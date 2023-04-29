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
  <div class="grid-item">
    
    <form className='filerRadio'>
      <p>Filter</p>
  <input type='radio' id='all' name='all' value={'all'}/>
  <label for='all'> All Jobs</label> <br></br>
  <input type='radio' id='relevant' name='relevant' value={'relevant'}/>
  <label for='relevant'> Most Relevant</label><br></br>
  <input type='radio' id='recommend' name='recommend' value={'recommend'}/>
  <label for='recommend'> Recommended Jobs</label><br></br>
  <input type='radio' id='recent' name='recent' value={'recent'}/>
  <label for='all'> Most Recent</label>
</form>

<form>
  <p>Select Location</p>
  <input type='search' placeholder='Location...'/>
</form>

<form>
  <p>Type of Job</p>
  <select name='jobType' id='jobType'>
    <option value={'Full Time'}>Full Time</option>
    <option value={'Part Time'}>Part Time</option>
    
  </select>

  <p>Type of Inustries</p>
  <select name='allIndustries' id='allIndustries'>
    <option value={'All Industries'}>All Industries</option>
    <option value={'Tech Startup'}>Tech Startup</option>
    
  </select>
</form>
<label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label> <span>Full Remote</span>
  </div> 
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
    
</div>
      </body>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;