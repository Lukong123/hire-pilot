import React from "react";
import './AddJob.css';


function AddJob({closeModal}) {
    return(
        <div className="modalBackground">
            <div className="modalContainer">
              
                <div className="titleClosedBtn">
                <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className="title">
                <p>Logo</p>
                <h2>Welcome to Hire Pilot</h2>
                </div>
                <div className="body-login">
                    <p className='bodytitle'>ADD JOB</p>

                    <input type="text" name="jobname" id="jobname" placeholder="Job Name"/> <br></br>
                     <select name='jobType' id='jobType'>
                     <option value={'Full Time'}>Full Time</option>
                     <option value={'Tech Startup'}>Part Time</option>
                     </select> <br></br>
                    <input type="text" name="location" id="location" placeholder="Location"/> <br></br>
                    <select name='position' id='jobposition'>
                        <option value={'Remote'}>Remote</option>
                        <option value={'On site'}>On site</option>

                    </select>
                    <button><a>Add Job</a></button>
                </div>
                <div className="body">
                </div>
            </div>
        </div>
    )
}

export default AddJob;