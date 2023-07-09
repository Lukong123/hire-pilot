import React from "react";
import './SignupChoice.css';


function SignupChoice({closeModal}) {
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleClosedBtn">
                <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className="title">
                    <h2>Welcome to Hire Pilot</h2>
                    <p>Create Your Account</p>
                </div>
                <div className="body-button">
                    <button className="btnSeeker"><a href="/signupcandidate">SignUp as Jobseeker</a></button> <br></br>
                    
                    <button className="btnEmployer"><a href="/signupemployer">SignUp as Employer</a></button>


                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)}>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default SignupChoice;