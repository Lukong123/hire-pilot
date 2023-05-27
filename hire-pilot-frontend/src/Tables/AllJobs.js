import React from 'react';
import SidebarEmployer from '../Sidebar/SidebarEmployer';
import TableJobs from './TableJobs';


function AllJobs() {
  return (
    <div className='alljobs-grid-container'>
      <SidebarEmployer/>
      <TableJobs/>
    </div>
  )
}

export default AllJobs;