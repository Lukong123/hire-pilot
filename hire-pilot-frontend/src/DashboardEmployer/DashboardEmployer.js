import React, {useState} from 'react';
import './DashboardEmployer.css';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/SidebarEmployer';
import Jobs from '../Jobs/Jobs';
import { Button } from 'bootstrap';
import AddJob from '../Modal/AddJob';
import SidebarEmployer from '../Sidebar/SidebarEmployer';


function DashboardEmployer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <React.Fragment>
      <div className="App">
        {/* <Header/> */}

      <body>


<div className='addJob'>
<div><button className="openModalBtn" onClick={() => {
      setOpenModal(true);
    }}> Add Job</button>
    {openModal && <AddJob closeModal={setOpenModal}/>}
    </div>
</div>

        
      <div class="grid-container">
        <SidebarEmployer/>
        <Jobs/>
  
    
</div>
      </body>
      <Footer/>
     
    </div>
    </React.Fragment>
    
  );
}

export default DashboardEmployer;