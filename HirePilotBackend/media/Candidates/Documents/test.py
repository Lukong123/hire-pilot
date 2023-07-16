import nltk
from pdfminer.high_level import extract_text


def extract_text_from_pdf(pdf_path):
    return extract_text(pdf_path)


SKILLS_DB = [
    'machine learning',
    'data science',
    'python',
    'word',
    # 'higher',
    'excel',
    # 'English',
    # 'French',
    'mysql',
    'mentor',
    'networking',
]

def extract_skills(input_text):
    stop_words = set(nltk.corpus.stopwords.words('english'))
    word_tokens = nltk.tokenize.word_tokenize(input_text)

    # remove stop words and punctuation
    filtered_tokens = [w.lower() for w in word_tokens if w.lower() not in stop_words and w.isalpha()]

    # generate bigrams and trigrams
    bigrams_trigrams = list(map(' '.join, nltk.everygrams(filtered_tokens, 2, 3)))

    print(bigrams_trigrams)


    # we create a set to keep the results in.
    found_skills = set()

    # we search for each token, bigram, and trigram in our skills database
    for token in filtered_tokens + bigrams_trigrams:
        if token.lower() in SKILLS_DB:
            found_skills.add(token)

    for ngram in bigrams_trigrams:
        if ngram.lower() in SKILLS_DB:
            found_skills.add(ngram)
    # print('Input text:', input_text)
    # print('Filtered tokens:', filtered_tokens)
    # print('Bigrams and trigrams:', bigrams_trigrams)
    # print('Found skills:', found_skills)

    return found_skills

if __name__ == '__main__':
    text = extract_text_from_pdf('resume.pdf')
    skills = extract_skills(text) 
    print(skills) 
