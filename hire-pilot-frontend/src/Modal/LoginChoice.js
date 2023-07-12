import React from "react";
import './SignupChoice.css';


function LoginChoice({closeLogin}) {
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleClosedBtn">
                <button onClick={() => closeLogin(false)}>X</button>
                </div>
                <div className="title">
                    <h2>Welcome to Hire Pilot</h2>
                    <p>Create Your Account</p>
                </div>
                <div className="body-button">
                    <a href="/logincandidate" className="btnSeeker">Login as Jobseeker</a><br></br>
                    
                    <a href="/loginemployer" className="btnEmployer">Login as Employer</a>


                </div>
                <div className="footer">
                    <button onClick={() => closeLogin(false)}>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default LoginChoice;