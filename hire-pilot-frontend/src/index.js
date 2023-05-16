import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
// import Login from './Login/Login';

import DashboardEmployer from './DashboardEmployer/DashboardEmployer';
// import reportWebVitals from './reportWebVitals';
import Layout from './Layout/layout';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

export default function Appp() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<App />} />
        {/* <Route path='login' element={<Login />} /> */}
        <Route path='dashboardemployer' element={<DashboardEmployer />} />

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Appp />, document.getElementById('root'));
