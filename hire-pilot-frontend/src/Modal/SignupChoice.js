import React from "react";
// import './SignupChoice.css';



function SignupChoice({closeModal}) {
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeModal(false)}>X</button>
                <div className="title">
                    <h1>Welcome to Hire Pilot</h1>
                </div>
                <div className="body">
                    <button><a>SignUp as Jobseeker</a></button>
                    <button><a>SignUp as Employee</a></button>

                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)}>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default SignupChoice;