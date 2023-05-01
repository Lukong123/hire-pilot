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
  <div class="grid-item main" >
    <div class='main-top'>
      <div class='main-top-left'>
      <p>CAREER</p>

      </div>
      <div class='main-top-right'>
        <p>Filter</p>
      </div>
    </div>
    <div class='box'>
    <div class='searchselect'>
      <input class='searchone' type='search' placeholder='Search'/> 
      {/* <span class='midsort'>Sort By:</span> */}
      <span>
        
      <select class='eselect' name='sortType' id='sortType'>
      <option value="none" selected disabled hidden>Sort By:</option>
    <option value={'Latest'}>Latest</option>
    <option value={'New'}>New</option>
    
  </select>
      </span>
      <div class='main-box'>
        <div class='side-box tag'>
          New
        </div>  {/**Ending of sidebox tag */}
        <div class='side-box main-side-box'>
        <div class="card">
  <div class="container">
    <div class='compa'>
      <span class='dot'>...d</span> <span class='companyName'> UNI.xyz</span>
    <span class='dot'></span>
    </div>
    <button class='applybtn'><a href='#apply'>Apply</a></button>

    <div class='compp'>
    <span class='position'>UI Designer</span><span class='dot'>..d</span> <span class='location'> Yaounde</span>
    <span class='dot'></span>
    </div>

    <div class='greytext'>
      <p class='jobtext'>Marketplace lorem ipsum delor Marketplace lorem ipsum delor</p>
      <p class='time'> 10 mins ago</p>
    <span class='dot'></span>

    </div>
    <div class='likes'>
      <p class='dot'></p>
    </div>
   </div> {/**Ending of container */}

  </div>
</div> {/*Ending of main side box*/}
 
        </div>
        <div class='main-box'>
        <div class='side-box tag'>
          New
        </div>  {/**Ending of sidebox tag */}
        <div class='side-box main-side-box'>
        <div class="card">
  <div class="container">
    <div class='compa'>
      <span class='dot'>...d</span> <span class='companyName'> UNI.xyz</span>
    <span class='dot'></span>
    </div>
    <button class='applybtn'><a href='#apply'>Apply</a></button>

    <div class='compp'>
    <span class='position'>UI Designer</span><span class='dot'>..d</span> <span class='location'> Yaounde</span>
    <span class='dot'></span>
    </div>

    <div class='greytext'>
      <p class='jobtext'>Marketplace lorem ipsum delor Marketplace lorem ipsum delor</p>
      <p class='time'> 10 mins ago</p>
    <span class='dot'></span>

    </div>
    <div class='likes'>
      <p class='dot'></p>
    </div>
   </div> {/**Ending of container */}

  </div>
</div> {/*Ending of main side box*/}
 
        </div>
        <div class='main-box'>
        <div class='side-box tag'>
          New
        </div>  {/**Ending of sidebox tag */}
        <div class='side-box main-side-box'>
        <div class="card">
  <div class="container">
    <div class='compa'>
      <span class='dot'>...d</span> <span class='companyName'> UNI.xyz</span>
    <span class='dot'></span>
    </div>
    <button class='applybtn'><a href='#apply'>Apply</a></button>

    <div class='compp'>
    <span class='position'>UI Designer</span><span class='dot'>..d</span> <span class='location'> Yaounde</span>
    <span class='dot'></span>
    </div>

    <div class='greytext'>
      <p class='jobtext'>Marketplace lorem ipsum delor Marketplace lorem ipsum delor</p>
      <p class='time'> 10 mins ago</p>
    <span class='dot'></span>

    </div>
    <div class='likes'>
      <p class='dot'></p>
    </div>
   </div> {/**Ending of container */}

  </div>
</div> {/*Ending of main side box*/}
 
        </div>
        <div class='main-box'>
        <div class='side-box tag'>
          New
        </div>  {/**Ending of sidebox tag */}
        <div class='side-box main-side-box'>
        <div class="card">
  <div class="container">
    <div class='compa'>
      <span class='dot'>...d</span> <span class='companyName'> UNI.xyz</span>
    <span class='dot'></span>
    </div>
    <button class='applybtn'><a href='#apply'>Apply</a></button>

    <div class='compp'>
    <span class='position'>UI Designer</span><span class='dot'>..d</span> <span class='location'> Yaounde</span>
    <span class='dot'></span>
    </div>

    <div class='greytext'>
      <p class='jobtext'>Marketplace lorem ipsum delor Marketplace lorem ipsum delor</p>
      <p class='time'> 10 mins ago</p>
    <span class='dot'></span>

    </div>
    <div class='likes'>
      <p class='dot'></p>
    </div>
   </div> {/**Ending of container */}

  </div>
</div> {/*Ending of main side box*/}
 
        </div>
        <div class='main-box'>
        <div class='side-box tag'>
          New
        </div>  {/**Ending of sidebox tag */}
        <div class='side-box main-side-box'>
        <div class="card">
  <div class="container">
    <div class='compa'>
      <span class='dot'>...d</span> <span class='companyName'> UNI.xyz</span>
    <span class='dot'></span>
    </div>
    <button class='applybtn'><a href='#apply'>Apply</a></button>

    <div class='compp'>
    <span class='position'>UI Designer</span><span class='dot'>..d</span> <span class='location'> Yaounde</span>
    <span class='dot'></span>
    </div>

    <div class='greytext'>
      <p class='jobtext'>Marketplace lorem ipsum delor Marketplace lorem ipsum delor</p>
      <p class='time'> 10 mins ago</p>
    <span class='dot'></span>

    </div>
    <div class='likes'>
      <p class='dot'></p>
    </div>
   </div> {/**Ending of container */}

  </div>
</div> {/*Ending of main side box*/}
 
        </div> {/*ending of main-box */}
        <div class='see-all'>
          <p>see all</p>
        </div>
    </div>

  </div>

  </div>
  
    <div class="grid-item right-bar">
      <div class='thirdt-right'>
        <span> Search by Categories</span>
        <span class='dot'>.</span>
      </div>

      <div class='two-box'>
      <div class='contu one'>
        <div class='dot'>.</div>
        <p class='category'> Design and Development</p>
        <p class='number'> 234 Jobs</p>
      </div>
      <div class='contu two'>
      <div class='dot dott'>.</div>
        <p class='category'> Design and Development</p>
        <p class='number'> 234 Jobs</p>
      </div>

      </div>
      <p class='see-all-t'>see all</p>
      <hr class='hr'></hr>
      <div class='top-com'>
      <p class='top-comp'>Top Comapanies</p>
      <span class='dot'>...d</span> <span class='companyName'> UNI.xyz</span> <br/><br/>
      <span class='dot'>...d</span> <span class='companyName'> UNI.xyz</span>

      <div class='cont'>
        <p>Stay Up to date with us</p>
        <p>Get a daily email for all new jobs</p>
        <input type='email' placeholder='Enter your email'/>
      </div>

      </div>
      

      </div>   {/*Ending of third grid item */}
    
</div>
      </body>
      <footer className="footer">
        <div class='rights'>
          c 2023
        </div>
        <div class='social'> 
          <a href='#ig'>Instagram</a>
          <a href='#ig'>Faceboook</a>
          <a href='#ig'>Twitter</a>

        </div>
        <div class='foot-nav'>
        <a href='#ig'>Help</a>
        <a href='#ig'>Contact</a>
        <a href='#ig'>Privacy Policy</a>
        <a href='#ig'>Term of Use</a>
          
        </div>
      </footer>
    </div>
  );
}

export default App;