import re
from pdfminer.high_level import extract_text

email_regex = re.compile(r"[a-z0-9\.\-+_]+@[a-z0-9\.\-+_]+\.[a-z]+")


def extract_text_from_pdf(path):
    return extract_text(path)


def extract_emails(resume_text):
    return re.findall(email_regex, resume_text)
