import spacy
import re
from pdfminer.high_level import extract_text


def extract_text_from_pdf(pdf_path):
    return extract_text(pdf_path)
known_languages = ["Lamso", "French", "Spanish", "German", "Italian", "Pidgin"]


def extract_language(text):
    nlp = spacy.load("en_core_web_sm")
    # known_languages = ["Lamso", "French", "Spanish", "German", "Italian", "Pidgin"]
    lang_pattern = re.compile("|".join(known_languages), re.IGNORECASE)
    doc = nlp(text)
    languages = set()
    for ent in doc.ents:
        if ent.label_ == "LANGUAGE":
            languages.add(ent.text.title())
        for line in text.split("\n"):
            match = lang_pattern.search(line)
            if match:
                languages.add(match.group(0))
    return languages
