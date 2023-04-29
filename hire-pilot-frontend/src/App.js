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
    {/* <form className='radioFilter'>
      <p>Filter</p>
      <input type='radio' id='all' name='all' value={'all'}><label for='all'>All Jobs</label></input>
      <input type='radio' id='relevant' name='relevant' value={'relevant'}><label for='relevant'>Most Relevant</label></input>
      <input type='radio' id='reccomend' name='reccomend' value={'reccomend'}><label for='reccomend'>Recommended Jobs</label></input>
      <input type='radio' id='recent' name='recent' value={'recent'}><label for='recent'>Most Recent</label></input>
    </form> */}
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