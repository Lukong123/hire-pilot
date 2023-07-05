import re
from pdfminer.high_level import extract_text

def extract_text_from_pdf(path):
    text = str(extract_text(path))
    return text
def extract_mobile_number(text):
    number = re.findall(re.compile(r"(\+\d{1,3}\)?[-.\s]?(\d{3}[-.\s]?){2}\d{3})"), text)
    
    for phone in number:
        for tel in phone:
            if len(tel) > 7:
                print(tel)
