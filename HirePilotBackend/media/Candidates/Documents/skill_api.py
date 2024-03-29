from operator import gt
import docx2txt
import nltk
import requests
from pdfminer.high_level import extract_text

 
# nltk.download('stopwords')
 
 
def extract_text_from_pdf(pdf_path):
    return extract_text(pdf_path)

# print(extract_text_from_pdf('resume1.pdf'))

 
 #my key= 1XoAh302nMa1mn92HzFnRHZkqC9yLe7d
def skill_exists(skill):
    url = f'https://api.apilayer.com/skills?q={skill}&amp;count=1'
    headers = {'apikey': '1XoAh302nMa1mn92HzFnRHZkqC9yLe7d'}
    response = requests.request('GET', url, headers=headers)
    result = response.json()
    # print(response)
 
    if response.status_code == 200:
        # print(len(result) > 0 and result[0].lower() == skill.lower())
        return len(result) > 0 and result[0].lower() == skill.lower()
    raise Exception(result.get('message'))
 
 
def extract_skills(input_text):
    stop_words = set(nltk.corpus.stopwords.words('english'))
    word_tokens = nltk.tokenize.word_tokenize(input_text)
 
    # remove the stop words
    filtered_tokens = [w for w in word_tokens if w not in stop_words]
 
    # remove the punctuation
    filtered_tokens = [w for w in word_tokens if w.isalpha()]
 
    # generate bigrams and trigrams (such as artificial intelligence)
    bigrams_trigrams = list(map(' '.join, nltk.everygrams(filtered_tokens, 2, 3)))
 
    # we create a set to keep the results in.
    found_skills = set()
 
    # we search for each token in our skills database
    for token in filtered_tokens:
        if skill_exists(token):
            found_skills.add(token)
            print(found_skills)
 
    # we search for each bigram and trigram in our skills database
    for ngram in bigrams_trigrams:
        if skill_exists(ngram.lower()):
            found_skills.add(ngram) 
    return found_skills
 
 
if __name__ == '__main__':
    text = extract_text_from_pdf('resume.pdf')
    # print(text)
    skills = extract_skills(text)
 
    print(skills)
 #1:46pm