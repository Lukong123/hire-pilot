import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
def calculate_similarity(candidates, recruiter):

    scores = []
    for candidate in candidates:
    # candidate's feature vector
        candidate_vector = [

            1 if candidate['degree'] == recruiter['degree'] else 0,
            len(candidate['language'] & recruiter['language']),
            len(candidate['skills'] & recruiter['skills']),
        ]
        # recruiter's desired feature vector
        recruiter_vector = [
            1 if recruiter['degree'] is None else 1 if candidate['degree'] == recruiter['degree'] else 0,
            len(recruiter['language']),
            len(recruiter['skills']),

        ]

        # converting the feature vectors to arrays
        candidate_array = np.array(candidate_vector).reshape(1, -1)
        recruiter_array = np.array(recruiter_vector).reshape(1, -1)

        # calculating the cosine similarity
        similarity_score = cosine_similarity(candidate_array, recruiter_array)[0][0]

        scores.append((candidate['application_id'], similarity_score))

    return scores
