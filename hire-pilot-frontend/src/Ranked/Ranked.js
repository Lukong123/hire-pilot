import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Ranked(props) {
  const [applications, setApplications] = useState([]);
  const { jobId } = useParams();

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem('token')}` // replace with your actual token
  }
};
  useEffect(() => {
    // http://localhost:8000/HirePilot/rank_application/1/
    axios.get(`http://localhost:8000/HirePilot/rank_application/${ jobId }/`,config)
      .then(response => {
        setApplications(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.jobId]);

  return (
    <div>
      <h2>Application Ranking</h2>
      <table>
        <thead>
          <tr>
            <th>Application ID</th>
            <th>Rank</th>

            <th>Applicant Name</th>
            <th>Email</th>
            <th>Phone</th>

            <th>Similarity Score</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(application => (
            <tr key={application.application_id}>
              <td>{application.application_id}</td>
              <td>{application.rank}</td>

              <td>{application.applicant_name}</td>
              <td>{application.emails.join(", ")}</td>
              <td>{application.phone ? application.phone : "-"}</td>
              <td>{application.similarity_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ranked;