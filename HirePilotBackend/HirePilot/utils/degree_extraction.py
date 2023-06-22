import spacy
import nltk
import re
from pdfminer.high_level import extract_text



def extract_text_from_pdf(pdf_path):
    return extract_text(pdf_path)


def extract_degree(text):

  nlp = spacy.load('en_core_web_sm')

  # text = "I have a BSc in Computer Science and an M.Eng in Electrical Engineering."
  # text1 = extract_text_from_pdf('/content/drive/MyDrive/Resume/b.pdf')
  text = text.replace("\n\nFinal", "") .replace('\n\n', '') .replace('\n', '')
  education_degrees = ['BS', 'BSc', 'BA', 'MS', 'MSc', 'MA',
                     'PhD', 'GCE', 'FSLC', 'Probatioire', 'BEPC',
                     'CAP', 'CAPIEM', 'A-Level', 'Advanced Level',
                     'A Level', 'Ordinary Level', 'O Level', 'O-Level',
                     'CEP', 'HND', 'Bachelor', 'BA', 'Phd']

  # Define a pattern for education degrees using regular expressions
  degree_pattern = re.compile(
    r"(?i)\b(" + "|".join(education_degrees) + r")\b"    # A whole word match of any degree type in the education list, case-insensitive
    r"(?:\s+(?:in|of)\s+(?P<field>[A-Za-z ]+))?"  # Matches optional "in" or "of" before the field of study
    r"\b"                                    # Matches the end of the word
  )
  # Process the text with SpaCy
  tokens = nltk.word_tokenize(text)
  # print(tokens)

  # Perform part-of-speech tagging
  pos_tags = nltk.pos_tag(tokens)
  # print(pos_tags)

  # Extract degree entities using regular expression pattern
  degree_entities = []
  for i in range(len(pos_tags)):
      if re.match(degree_pattern, ' '.join([pos_tags[j][0] for j in range(i, min(i+3, len(pos_tags)))])):
          degree_entities.append((' '.join([pos_tags[j][0] for j in range(i, min(i+3, len(pos_tags)))])))

  # Print the list of degree entities
  # print(degree_entities)
  return degree_entities
