import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import Rightbar  from './Right-Sidebar/Rightbar';
import Jobs from './Jobs/Jobs';
import SignupChoice from './Modal/SignupChoice';


function App() {
  return (
    <React.Fragment>
      <div className="App">
        {/* <Header/> */}
      
      <body>
      <div class="grid-container">
        <Sidebar/>
        <Jobs/>

        <Rightbar/>
    
</div>
      </body>
      <Footer/>
     
    </div>
    </React.Fragment>
    
  );
}

export default App;