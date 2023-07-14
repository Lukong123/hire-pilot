import React, { useState, useEffect } from "react";
import axios from 'axios';
import './JobStatus.css';
function JobStatus() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}` // replace with your actual token
      }
    };
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/apply/', config);
      setJobs(response.data.results); // set the jobs state to the data extracted from the "results" field of the API response
    } catch (error) {
      console.log(error);
    }
  };

  const getButtonClassName = (status) => {
    switch (status) {
      case 'Pending':
        return ' yellow';
      case 'Approved':
        return 'applybtn green';
      case 'Decline':
        return 'applybtn red';
      case 'Interview':
        return 'blue';
      default:
        return 'yellow';
    }
  };

  return (
    <div>
      {jobs.length === 0 ? (
        <div>Loading...</div>
      ) : (
        jobs.map((job) => (
          <div className='jobcontext' key={job.id}>
    <div> <p> Img </p> <p class='companyname'> Job title</p> </div>

            
              <button className={getButtonClassName(job.status)}>
              {job.status}
              </button>
            <div className='jobtitle'>{job.job} </div>
          
          </div>
        ))
      )}
    </div>
  );
}

export default JobStatus;

