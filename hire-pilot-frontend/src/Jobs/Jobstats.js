import React from 'react';
import './Jobcontext.css';

function Jobstats() {
  return (
    <div>
        <div class='jobcontext'>
    <div> <p> Img </p> <p class='companyname'> Uni.xyz</p> </div>

    <button  class ='applybtnn pending'>Pending</button>

    <div class='jobtitle'> UI Designer <span class='dot'>.</span> <span class='location'>Pune</span> </div> 
</div>
<div class='jobcontext'>
    <div> <p> Img </p> <p class='companyname'> Uni.xyz</p> </div>

    <button  class ='applybtnn interview'>Interview</button>

    <div class='jobtitle'> UI Designer <span class='dot'>.</span> <span class='location'>Pune</span> </div> 
</div>

<div class='jobcontext'>
    <div> <p> Img </p> <p class='companyname'> Uni.xyz</p> </div>

    <button  class ='applybtnn approved'>Approved</button>

    <div class='jobtitle'> UI Designer <span class='dot'>.</span> <span class='location'>Pune</span> </div> 
</div>

    </div>


  )
}

export default Jobstats;