import docx2txt
import nltk
from pdfminer.high_level import extract_text

 
# nltk.download('stopwords')
# nltk.download('punkt')
# nltk.download('averaged_perceptron_tagger')
# nltk.download('maxent_ne_chunker')
# nltk.download('words')
 
 
RESERVED_WORDS = [
    'school',
    'college',
    'univers',
    'academy',
    'faculty',
    'institute',
    'faculdades',
    'Schola',
    'schule',
    'lise',
    'lyceum',
    'lycee',
    'polytechnic',
    'kolej',
    'ünivers',
    'okul',
    'government'
]

def extract_text_from_pdf(pdf_path):
    return extract_text(pdf_path)
 
# def extract_text_from_docx(docx_path):
#     txt = docx2txt.process(docx_path)
#     if txt:
#         return txt.replace('\t', ' ')
#     return None
 

def extract_education(input_text):
    education = []
 
    # first get all the organization names using nltk
    for sent in nltk.sent_tokenize(input_text):
        for chunk in nltk.ne_chunk(nltk.pos_tag(nltk.word_tokenize(sent))):
            print(chunk)
            if hasattr(chunk, 'label') and chunk.label() == 'EDUCATION':
                education.append(' '.join(c[0] for c in chunk.leaves()))
                print(education)
 
    # we search for each bigram and trigram for reserved words
    # (college, university etc...)
    education = set()
    for org in education:
        for word in RESERVED_WORDS:
            if org.lower().find(word) >= 0:
                education.add(org)
    
    # print(organizations)
 
    return education
 
 
if __name__ == '__main__':
    text = extract_text_from_pdf('Resume.pdf')
    education_information = extract_education(text)
 
    print(education_information)  # noqa: T001
 