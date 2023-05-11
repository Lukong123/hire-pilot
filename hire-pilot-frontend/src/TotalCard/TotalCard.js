import React from "react";
import './TotalCard.css';


function TotalCard() {
    return(
        <div class="flex-container">
  <div className='card blue'>
    <p><a href='#totaljobs'>Total Jobs</a></p>
    <p>40</p>
  </div>
  <div className='card blueblack '>
  <p><a href='#totaljobs'>Total Applicants</a></p>
    <p>20</p>
  </div>
  <div className='card yellow'>
  <p><a href='#totaljobs'>Interviews</a></p>
    <p>10</p></div>  

</div>
    )
}

export default TotalCard;