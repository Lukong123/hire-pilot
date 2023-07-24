import React, {useState, useEffect} from 'react';

function SimilarityScores() {

  const [imgData, setImgData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/HirePilot/plot/')
      .then(res => res.json())
      .then(data => {
        setImgData(data.img_data);
      })
  }, [])

  return (
    <div>
      {imgData && <img src={`data:image/png;base64,${imgData}`} />}
    </div>
  )
}

export default SimilarityScores;