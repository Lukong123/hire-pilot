import matplotlib.pyplot as plt

def plot_similarity_scores(candidate_names, similarity_scores):
    fig, ax = plt.subplots()
    ax.bar(candidate_names, similarity_scores)
    ax.set_title('Similarity Scores')
    ax.set_xlabel('Candidate')
    ax.set_ylabel('Score')
    plt.show()