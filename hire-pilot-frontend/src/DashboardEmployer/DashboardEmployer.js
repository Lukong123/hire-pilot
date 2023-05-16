import React, {useState} from 'react';
import './DashboardEmployer.css';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Jobs from '../Jobs/Jobs';
import { Button } from 'bootstrap';
import AddJob from '../Modal/AddJob';


function DashboardEmployer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <React.Fragment>
      <div className="App">
        {/* <Header/> */}

      <body>

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
<div className='addJob'>
<div><button className="openModalBtn" onClick={() => {
      setOpenModal(true);
    }}> Add Job</button>
    {openModal && <AddJob closeModal={setOpenModal}/>}
    </div>
</div>

        
      <div class="grid-container">
        <Sidebar/>
        <Jobs/>
  
    
</div>
      </body>
      <Footer/>
     
    </div>
    </React.Fragment>
    
  );
}

export default DashboardEmployer;