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
                    <button className="btnSeeker"><a href="/logincandidate">Login as Jobseeker</a></button> <br></br>
                    
                    <button className="btnEmployer"><a href="/loginemployer">Login as Employer</a></button>


                </div>
                <div className="footer">
                    <button onClick={() => closeLogin(false)}>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default LoginChoice;