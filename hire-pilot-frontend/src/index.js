import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import DashboardEmployer from './DashboardEmployer/DashboardEmployer';
import Layout from './Layout/layout';
import CreateJobForm from './CreateJob/CreateJobForm';
import Status from './Status/Status';
import AllJobs  from './Tables/AllJobs';
import CandidateSignupForm from './Form/CandidateSignupForm';
import EmployerSignupForm from './Form/EmployerSignup';
import LoginEmployer from './Login/LoginEmployer';
import LoginCandidate from './Login/LoginCandidate';
import TablesJobs from './Tables/TablesJobs';
import MyComponent from './Tables/testtable';
import MyTest from './Tables/seetest';
import MyComponecnt from './Tables/improvementfordisplaytable';
import Tags from './Tags/Tags';
import SignupChoice from './Modal/SignupChoice';
import Ranked from './Ranked/Ranked';
import SimilarityScores from './Ranked/Similarity_Plot';


export default function Appp() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<App />} />
        <Route path='dashboardemployer' element={<DashboardEmployer />} />
        <Route path='createjob' element={<CreateJobForm />} />
        <Route path='status' element={<Status />} />
        <Route path='alljobs' element={<AllJobs />} />
        <Route path='signupcandidate' element={<CandidateSignupForm />} />
        <Route path='signupemployer' element={<EmployerSignupForm />} />

        <Route path='loginemployer' element={<LoginEmployer/>} />
        <Route path='logincandidate' element={<LoginCandidate/>} />
        <Route path='tables' element={<TablesJobs/>} />
        <Route path='ohh' element={<MyComponent/>}/>
        <Route paht='manytest' element= {<MyTest/>}/>
        <Route path='noo' element={<MyComponecnt />}/>
        <Route path='tag' element={<Tags />}/>
        <Route path='/signupchoice' element={<SignupChoice />}/>
        <Route path='/rank/:jobId' element={<Ranked />}/>
        <Route path='/plot' element={<SimilarityScores />}/>





        
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Appp />, document.getElementById('root'));
