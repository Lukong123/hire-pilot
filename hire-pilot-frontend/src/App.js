import './App.css';
// import searchSvg from './search-outline.svg';
// import {ReactComponent as searchLogo} from './search-outline.svg';



function App() {
  return (
    <div className="App">
      <div class="topnav">
  <a  href="#home">Logo</a>
  <a href="#news">Hire Pilot</a>
  <input className='search' type='search' placeholder='Search'/> 
  <div class="topnav-right">
    <a class='active' href="#search">My Jobs</a>
    <a href="#about">Login</a>
    <a href="#about">SignUp</a>

  </div>
</div>
      
      <body>
      <div class="grid-container">
  <div class="grid-item sidebar">
 
  <div>
  <p className='sideheading1'>Filter</p>

  <label class="rad-label">
    <input type="radio" class="rad-input" checked name="rad"/>
    <div class="rad-design"></div>
    <div class="rad-text">All Jobs</div>
  </label>

  <label class="rad-label">
    <input type="radio" class="rad-input" name="rad"/>
    <div class="rad-design"></div>
    <div class="rad-text">Most Relevant</div>
  </label>

  <label class="rad-label">
    <input type="radio" class="rad-input" name="rad"/>
    <div class="rad-design"></div>
    <div class="rad-text">Recommended</div>
  </label>

  <label class="rad-label">
    <input type="radio" class="rad-input" name="rad"/>
    <div class="rad-design"></div>
    <div class="rad-text">Most Recent</div>
  </label>

  </div>

<form>
  <p className='sideheading2'>Select Location</p>
  <input className='searchL' type='search' placeholder='Location...'/>
</form>

<form>
  <p className='sideheading3'>Type of Job</p>
  <select name='jobType' id='jobType'>
    <option value={'Full Time'}>Full Time</option>
    <option value={'Part Time'}>Part Time</option>
    
  </select>

  <p className='sideheading4'>Type of Inustries</p>
  <select name='allIndustries' id='allIndustries'>
    <option value={'All Industries'}>All Industries</option>
    <option value={'Tech Startup'}>Tech Startup</option>
    
  </select>
</form>
<div className='switchbox'>
<label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label> <span>Full Remote</span>
</div>
  </div> 
  <div class="grid-item main" >2</div>
  <div class="grid-item">3</div>  
    
</div>
      </body>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;