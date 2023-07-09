import React from "react";
import './ApplyJob.css';


function ApplyJob({closeModal}) {
    return(
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
                    <p className='bodytitle'>Apply</p>

                    <input type="text" name="jobname" id="jobname" placeholder="Full Name"/> <br></br>
                    <input type="file" name="jobname" id="jobname" placeholder="Upload Resume"/> <br></br>

                    
                    <button><a>Apply</a></button>
                </div>
                <div className="body">
                </div>

            </div>
        </div>
    )
}

export default ApplyJob;