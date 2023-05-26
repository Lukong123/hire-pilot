import React from 'react';
import './Jobstatus.css';
import Jobcontext from './Jobcontext';
import Jobstats from './Jobstats';

function Jobstatus() {
  return (
    <div>
         <div class='main-top'>
      <div class='main-top-left'>
      <p>CAREER</p>

      </div>
      <div class='main-top-right'>
        <p>Filter</p>
      </div>
    </div> {/* ending of main top which consist of career and filter*/ }

    {/* <Jobstatus/> */}
    <div>
      <Jobstats/>
      <Jobstats/>


    </div>

    </div>
  )
}

export default Jobstatus;