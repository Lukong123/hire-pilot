import React from "react";
import './Sidebar.css';

function SidebarEmployer() {
    return(
        <div class="grid-item sidebar">
 
   <div>
  <p className='sideheading1'>Filter</p>

  <label class="rad-label">
    <input type="radio" class="rad-input" checked name="rad"/>
    <div class="rad-design"></div>
    <div class="rad-text">All Jobs</div>
  </label>

  <label class="rad-label">
    <input type="radio" class="rad-input" name="rad"/>
    <div class="rad-design"></div>
    <div class="rad-text">All Applicants</div>
  </label>
  </div>

<form>
  <p className='sideheading2'>Type Location</p>
  <input className='searchL' type='search' placeholder='Location...'/>
</form>

<form>
  <p className='sideheading3'>Type of Job</p>
  <select className='selectJob' name='jobType' id='jobType'>
    <option value={'Full Time'}>Full Time</option>
    <option value={'Part Time'}>Part Time</option>
    
  </select>

  <p className='sideheading4'>Type of Inustries</p>
  <select className="selectSidebar" name='allIndustries' id='allIndustries'>
    <option value={'All Industries'}>All Industries</option>
    <option value={'Tech Startup'}>Tech Startup</option>
    
  </select>
</form>
<div className='switchbox'>
<label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label> <span>Full Remote</span>
</div>
  </div> 
    );
}

export default SidebarEmployer;