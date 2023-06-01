import React, {useState} from 'react';
import './DashboardEmployer.css';
import Footer from '../Footer/Footer';
import Jobs from '../Jobs/Jobs';
import AddJob from '../Modal/AddJob';
import SidebarEmployer from '../Sidebar/SidebarEmployer';
import TotalCard from '../TotalCard/TotalCard'
import HeaderEmployer from '../Header/HeaderEmployer';
import Jobcontext from '../Jobs/Jobcontext';


function DashboardEmployer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <React.Fragment>
      <div className="App">
        {/* <HeaderEmployer/> */}

      <body>




<div class="gridd-container">
  <div class="item1"><SidebarEmployer/></div>
  <div class="item2"><TotalCard/></div> 
  <div class="item3">
  <div className='addJob'>
<div><button className="openModalBtn" onClick={() => {
      setOpenModal(true);
    }}> Add Job</button>
    {openModal && <AddJob closeModal={setOpenModal}/>}
    </div>
</div>

    </div> 
  
 
  {/* <div class="item4">Right</div> */}
  <div class="item4"><Jobcontext/></div>
</div>
      </body>
      <Footer/>
     
    </div>
    </React.Fragment>
    
  );
}

export default DashboardEmployer;