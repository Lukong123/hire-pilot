import React from 'react';
import './Header.css';

function HeaderCandidate() {
  return (
    <div class="topnav">
  <a  href="/khome">Logo</a>
  <a href="#news">Hire Pilot</a>
  <input className='search' type='search' placeholder='Search'/> 

  <div class="topnav-right">

    <a class='active' href="/">My Jobs</a>
    {/* <a href="/dashboardemployer">Dashboard</a> */}
    <a href="/status">Status</a>
    {/* <a href="/applicants">All Apllicants</a> */}
    {/* <a href="/alljobs">All Jobs</a> */}
    {/* <a href="/interview">Interviews</a> */}
    {/* <a href="viewjob">view job</a> */}
    <a href="/myinterviews">My Interviews</a>
</div>
</div>
  )
}

export default HeaderCandidate;