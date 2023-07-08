# import docx2txt
from pdfminer.high_level import extract_text
import nltk

# nltk.download('stopwords')

skills_database = [
    "machine learning",
    "data science",
    "python",
    "word",
    "excel",
    "mysql",
    "mentor",
    "networking",
    "microsoft word",
    "sales",
    "customer service",
    "communication",
    "critical thinking",
    "problem solving",
    "teamwork",
    "leadership",
    "adaptability",
    "creativity",
    "integrity",
    "dependability",
    "work ethic",
    "attention to detail",
    "time management",
    "organisation",
    "conflict resolution",
    "negotiation",
    "persuasion",
    "technical skills",
    "passion",
    "math",
    "medical knowledge",
    "empathy",
    "patience",
    "drilling",
    "carpentary",
    "welding",
    "molding",
    "automation",
    "engineering maintenance",
    "solid works",
    "reactjs",
    "react",
    "django",
    "django rest framework",
    "arduino",
    "microcontrollers",
    "interpersonal skills",
]


# def extract_text_from_docx(docx_path):
#     txt = docx2txt.process(docx_path)
#     if txt:
#         return txt.replace('\t', ' ')
#     return None


def extract_text_from_pdf(path):
    return extract_text(path)


def extract_skills(text):
    stop_words = set(nltk.corpus.stopwords.words("english"))
    tokenize_words = nltk.tokenize.word_tokenize(text)

    # reomving stop words and punctuation
    filtered_tokens = [
        w.lower() for w in tokenize_words if w.lower() not in stop_words and w.isalpha()
    ]

    # generating bigrams and trigrams
    bigrams_trigrams = list(map(" ".join, nltk.everygrams(filtered_tokens, 2, 3)))

    # found skills set
    found_skills = set()

    # search token in database
    for token in filtered_tokens + bigrams_trigrams:
        if token.lower() in skills_database:
            found_skills.add(token)

    # we search for each bigram and trigram in our skills database
    for ngram in bigrams_trigrams:
        if ngram.lower() in skills_database:
            found_skills.add(ngram)

    return found_skills
