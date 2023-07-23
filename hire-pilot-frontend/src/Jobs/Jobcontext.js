import React, {useState, useEffect} from "react";
import axios from 'axios';
import ApplyJob from '../Modal/ApplyJob';
import './jobcontext.css';



function Jobcontext() {
  const [jobs, setJobs] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    fetchData();
  }, []);


const fetchData = async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}` // replace with your actual token
      }
    };
  

    const response = await axios.get('http://127.0.0.1:8000/api/v1/job/',config);
    console.log(response.data)
    setJobs(response.data.results);
  } catch (error) {
    console.log(error);
  }
};
return (
  <div>
    {jobs.map((job) => (
     <div className='jobcontext'>
     <div> <p> Img </p> <p class='companyname'> {job.company.company_name}</p> </div>



<div><button className="openModalBtn applybtn" onClick={() => {
      setOpenModal(true);
    }}> {user.is_employer?'View':'Apply'}</button>
    {user.is_candidate && openModal && <ApplyJob job={job} closeModal={setOpenModal}/>}


   {user.is_employer? (<a href={`rank/${job.id}`}>View Applications</a>):(<div></div>)}
    </div>


<div class='jobtitle'> {job.title} <span class='dot'>.</span> <span class='location'>{job.location}</span> </div> 

<div class='jobdescription'> {job.description} </div>

<button class='partorfull'>{job.fulltime_partime}</button>
<div class='howlong'> {job.date_created}</div>
  </div>
    ))}
  </div>
);
    }

export default Jobcontext;