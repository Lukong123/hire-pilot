import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Status from '../Status/Status';
import Home from '../Home/Home';
import DashboardEmployer from '../DashboardEmployer/DashboardEmployer';

function HeaderTest() {
  return (
    <div>HeaderTest
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            
            <Route path='/dashboardemployer' element={<DashboardEmployer />}></Route>
            <Route path='/status' element={<Status />}></Route>



        </Routes>
    </div>
  )
}

export default HeaderTest;