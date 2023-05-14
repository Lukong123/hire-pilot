import React from "react";
// import './Rightbar.css';

function Rightbar() {
    return(
        <div class="grid-item right-bar">
        <div class='thirdt-right'>
          <span> Search by Categories</span>
          <span class='dot'>.</span>
        </div>
  
        <div class='two-box'>
        <div class='contu one'>
          <div class='dot'>.</div>
          <p class='category'> Design and Development</p>
          <p class='number'> 234 Jobs</p>
        </div>
        <div class='contu two'>
        <div class='dot dott'>.</div>
          <p class='category'> Design and Development</p>
          <p class='number'> 234 Jobs</p>
        </div>
  
        </div>
        <p class='see-all-t'>see all</p>
        <hr class='hr'></hr>
        <div class='top-com'>
        <p class='top-comp'>Top Comapanies</p>
        <span class='dot'>...d</span> <span class='companyName'> UNI.xyz</span> <br/><br/>
        <span class='dot'>...d</span> <span class='companyName'> UNI.xyz</span>
  
        <div class='cont'>
          <p>Stay Up to date with us</p>
          <p>Get a daily email for all new jobs</p>
          <input type='email' placeholder='Enter your email'/>
        </div>
  
        </div>
        
  
        </div>  /* Ending of third grid item*/
     
    );
}

export default Rightbar;