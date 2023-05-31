import React, { useState } from "react";

import './Header.css';
import '../Jobs/Jobs';
import SignupChoice from '../Modal/SignupChoice';
import Login from '../Login/Login';


function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

    return(
        <div class="topnav">
  <a  href="/khome">Logo</a>
  <a href="#news">Hire Pilot</a>
  <input className='search' type='search' placeholder='Search'/> 

  <div class="topnav-right">

    <a class='active' href="/">My Jobs</a>
    <a href="/dashboardemployer">Login Emp</a>
    <a href="/status">Status</a>
    {/* <a href="/applicants">All Apllicants</a> */}
    {/* <a href="/alljobs">All Jobs</a> */}
    {/* <a href="/interview">Interviews</a> */}
    {/* <a href="viewjob">view job</a> */}
    {/* <a href="/myinterviews">My Interviews</a> */}

    <div><button className="openModalBtn" onClick={() => {
      setOpenModal(true);
    }}> Signup</button>
    {openModal && <SignupChoice closeModal={setOpenModal}/>}
    </div>
    <div><button className="openLoginBtn" onClick={() => {
      setOpenLogin(true);
    }}> Login</button>
    {openLogin && <Login closeLogin={setOpenLogin}/>}
    </div>

  </div>
  
  
</div>
    );
}

export default Header;