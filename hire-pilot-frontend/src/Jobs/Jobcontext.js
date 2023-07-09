import React, {useState, useEffect} from "react";
import axios from 'axios';
import ApplyJob from '../Modal/ApplyJob';



function Jobcontext() {
  const [name, setName] = useState([]);
  const [openModal, setOpenModal] = useState(false);


  useEffect(() => {
    fetchData();
  }, []);


const fetchData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/HirePilot/alljobs/');
    setName(response.data);
  } catch (error) {
    console.log(error);
  }
};
return (
  <div>
    {name.map((data) => (
     <div className='jobcontext'>
     <div> <p> Img </p> <p class='companyname'> {data.company_name}</p> </div>

{/* <button  class ='applybtnn' href='/apply'><a href='/apply'>Apply</a></button> */}
<div><button className="openModalBtn applybtn" onClick={() => {
      setOpenModal(true);
    }}> Apply</button>
    {openModal && <ApplyJob closeModal={setOpenModal}/>}
    </div>

<div class='jobtitle'> {data.title} <span class='dot'>.</span> <span class='location'>{data.location}</span> </div> 

<div class='jobdescription'> {data.description} </div>

<button class='partorfull'>{data.fulltime_partime}</button>
<div class='howlong'> {data.date_created}</div>
  </div>
    ))}
  </div>
);
    }

export default Jobcontext;