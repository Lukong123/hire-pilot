import React, { useState } from "react";

// import './Header.css';
import '../Jobs/Jobs';
import SignupChoice from '../Modal/SignupChoice';


function Header() {
  const [openModal, setOpenModal] = useState(false);
    return(
        <div class="topnav">
  <a  href="/khome">Logo</a>
  <a href="#news">Hire Pilot</a>
  <input className='search' type='search' placeholder='Search'/> 
  <div class="topnav-right">
    <a class='active' href="/main">My Jobs</a>
    <a href="/login">Login</a>
    <a href="/dashboardemployer">Login emp</a>

    <div><button className="openModalBtn" onClick={() => {
      setOpenModal(true);
    }}> Signup</button>
    {openModal && <SignupChoice closeModal={setOpenModal}/>}
    </div>
    {/* <a href="#about" onClick={"document.getElementById('id01').style.display='block'"}>SignUp</a> */}

  </div>
  {/* <SignupChoice /> */}
  
  
</div>
    );
}

export default Header;