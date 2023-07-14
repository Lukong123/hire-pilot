import React, { useState } from "react";
import axios from "axios";
import './ApplyJob.css';

function ApplyJob({ closeModal, job }) {
  const [fullName, setFullName] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("job", job.id);
    formData.append('company', job.company.id)
    formData.append("resume", resume);

    try {
        const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}` // replace with your actual token
            }
          };
      const response = await axios.post("http://127.0.0.1:8000/api/v1/apply/", formData, config);
      console.log(response.data); // log the response data if successful
      closeModal(false); // close the modal window
    } catch (error) {
      console.error(error); // log any errors
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleClosedBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="title">
          <p>Logo</p>
          <h2>Apply to Job</h2>
        </div>
        <div className="body-login">
          <form onSubmit={handleSubmit}>
            <p className="bodytitle">Apply</p>
            {/* <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
            /> */}
            <br />
            <input
              type="file"
              name="resume"
              id="resume"
              placeholder="Upload Resume"
              onChange={(event) => setResume(event.target.files[0])}
              required
            />
            <br />
            <button type="submit">Apply</button>
          </form>
        </div>
        <div className="body"></div>
      </div>
    </div>
  );
}

export default ApplyJob;