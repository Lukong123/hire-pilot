// import React from 'react';
import React from 'react';
import './Login.css';



function Login({closeLogin}){
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleClosedBtn">
                <button onClick={() => closeLogin(false)}>X</button>
                </div>
                <div className="title">
                <p>Logo</p>
                <h2>Welcome to Hire Pilot</h2>
                </div>
                <div className="body-login">
                    <p className='bodytitle'>LOGIN</p>

                    <input type='email' placeholder='Enter Your Email'/> <br></br>
                    <input type='password' placeholder='Enter Your Password'/>

                    <p><a href='#pass'className='forgotPass'>Forgot Password?</a></p>
                    <button className="loginbtn"><a href='#login'>Login</a></button> <br></br>

                </div>
                <div className="footer">
                    <p className='donthaveaccount'>Don't yet have an account? <span> <a href='#create' className='create'>Create Account</a></span></p>
                </div>

            </div>
        </div>
    )
}


export default Login;
