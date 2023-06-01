import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import DashboardEmployer from './DashboardEmployer/DashboardEmployer';
import Layout from './Layout/layout';
import ApplyForm from './Apply/ApplyForm';
import Status from './Status/Status';
import AllJobs  from './Tables/AllJobs';
import CandidateSignupForm from './Form/CandidateSignupForm';
import EmployerSignupForm from './Form/EmployerSignup';
import LoginEmployer from './Login/LoginEmployer';
import LoginCandidate from './Login/LoginCandidate';


export default function Appp() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<App />} />
        <Route path='dashboardemployer' element={<DashboardEmployer />} />
        <Route path='apply' element={<ApplyForm />} />
        <Route path='status' element={<Status />} />
        <Route path='alljobs' element={<AllJobs />} />
        <Route path='signupcandidate' element={<CandidateSignupForm />} />
        <Route path='signupemployer' element={<EmployerSignupForm />} />
        <Route path='loginemployer' element={<LoginEmployer/>} />
        <Route path='logincandidate' element={<LoginCandidate/>} />







      </Route>
    </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Appp />, document.getElementById('root'));
