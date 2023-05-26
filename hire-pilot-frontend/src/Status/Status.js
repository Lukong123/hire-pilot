import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Rightbar from '../Right-Sidebar/Rightbar';
import '../App.css';
import Jobstatus from '../Jobs/Jobstatus';

function Status() {
  return (
    <div className='grid-container'>
        <Sidebar />
        <Jobstatus />
        <Rightbar />
    </div>
  )
}

export default Status;