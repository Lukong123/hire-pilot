 
import subprocess  # noqa: S404
import sys
 
 
def doc_to_text_catdoc(file_path):
    try:
        process = subprocess.Popen(  # noqa: S607,S603
            ['catdoc', '-w', file_path],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            universal_newlines=True,
        )
    except (
        FileNotFoundError,
        ValueError,
        subprocess.TimeoutExpired,
        subprocess.SubprocessError,
    ) as err:
        return (None, str(err))
    else:
        stdout, stderr = process.communicate()
 
    return (stdout.strip(), stderr.strip())
 
 
if __name__ == '__main__':
    text, err = doc_to_text_catdoc('./resume-word.doc')
 
    if err:
        print(err)  # noqa: T001
        sys.exit(2)
 
    print(text)  # noqa: T001