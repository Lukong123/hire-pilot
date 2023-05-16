import React from "react";
<<<<<<< HEAD
// import './SignupChoice.css';

=======
import './SignupChoice.css';
>>>>>>> 35e729ac1e491b98424d97155050d3adb765a428


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
                    <button className="btnSeeker"><a>SignUp as Jobseeker</a></button> <br></br>
                    
                    <button className="btnEmployer"><a>SignUp as Employer</a></button>


                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)}>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default SignupChoice;