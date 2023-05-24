import React, {useState} from 'react';
import './DashboardEmployer.css';
import Footer from '../Footer/Footer';
import Jobs from '../Jobs/Jobs';
import AddJob from '../Modal/AddJob';
import SidebarEmployer from '../Sidebar/SidebarEmployer';
import TotalCard from '../TotalCard/TotalCard'


function DashboardEmployer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <React.Fragment>
      <div className="App">
        {/* <Header/> */}

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
  <div class="item4"><Jobs/></div>
</div>
        
      {/* <div class="grid-container">
        <div className='rightbar'>
          <div>one</div>
          <div>one</div>
          <div>one</div>
          <div>one</div>
          <div>one</div>
        </div>
        <div className='totalcard'>
          <div>two</div>
          <div>two</div>

          <div>two</div>

          <div>two</div>

        </div>
        <div className='jobs'>
          <div>three</div>
          <div>three</div>
          <div>three</div>
          <div>three</div>

        </div> */}

        {/* <SidebarEmployer/>
        <TotalCard/>
        <Jobs/>
         */}

        
    
        
  
    
{/* </div> */}
      </body>
      <Footer/>
     
    </div>
    </React.Fragment>
    
  );
}

export default DashboardEmployer;