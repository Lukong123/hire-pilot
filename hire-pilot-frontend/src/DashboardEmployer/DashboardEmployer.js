import React from 'react';
import './DashboardEmployer.css';
import Footer from '../Footer/Footer';
import SidebarEmployer from '../Sidebar/SidebarEmployer';
import TotalCard from '../TotalCard/TotalCard'
import Jobcontext from '../Jobs/Jobcontext';


function DashboardEmployer() {
  // const [openModal, setOpenModal] = useState(false);
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

    <div><button className="openModalBtn" ><a href='/createjob'> Add Job</a></button>
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