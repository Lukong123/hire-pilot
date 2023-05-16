<<<<<<< HEAD
import React from 'react';
// import './Login.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Rightbar  from '../Right-Sidebar/Rightbar';
import Jobs from '../Jobs/Jobs';
import SignupChoice from '../Modal/SignupChoice';
=======
// import React from 'react';
import React from 'react';
import './Login.css';
>>>>>>> 35e729ac1e491b98424d97155050d3adb765a428


function Login() {
  return (
    <React.Fragment>
      <div className="Login">
        {/* <Header/> */}
      
      <body>
      <div class="grid-container">
        {/* <Sidebar/>
        <Jobs/>
        <Rightbar/>     */}
        <div>one</div>
        <div>one</div>
        <div>one</div>

<<<<<<< HEAD
</div>
      </body>
      <Footer/>
     
    </div>
    </React.Fragment>
    
  );
}
=======
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

>>>>>>> 35e729ac1e491b98424d97155050d3adb765a428

export default Login;