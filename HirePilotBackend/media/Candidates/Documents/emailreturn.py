import re 
from pdfminer.high_level import extract_text
 
email_regex = re.compile(r'[a-z0-9\.\-+_]+@[a-z0-9\.\-+_]+\.[a-z]+')
 
 
def extract_text_from_pdf(path):
    return extract_text(path)
 
 
def extract_emails(resume_text):
    return re.findall(email_regex, resume_text)
 
 
if __name__ == '__main__':
    text = extract_text_from_pdf('resume2.pdf')
    emails = extract_emails(text)
 
    if emails:
        print(emails[0])  # noqa: T001
 
