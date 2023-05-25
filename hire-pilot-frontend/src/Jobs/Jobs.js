import React from "react";
import './Jobs.css';


function Jobs() {
    return(
        <div class="grid-item main " >
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
        <div class='main-side-box'>
        <div class="cardJob">
  <div class="container">
    <div class='compa'>
      <span class='dot'>...d</span> <span class='companyName'> UNI.xyz</span>
    <span class='dot'></span>
    </div>
    <button class='applybtn'><a href='/apply'>Apply</a></button>

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
        <div class="cardJob">
  <div class="container">
    <div class='compa'>
      <span class='dot'>...d</span> <span class='companyName'> UNI.xyz</span>
    <span class='dot'></span>
    </div>
    <button class='applybtn'><a href='/apply'>Apply</a></button>

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
        <div class="cardJob">
  <div class="container">
    <div class='compa'>
      <span class='dot'>...d</span> <span class='companyName'> UNI.xyz</span>
    <span class='dot'></span>
    </div>
    <button class='applybtn'><a href='/apply'>Apply</a></button>

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
        <div class="cardJob">
  <div class="container">
    <div class='compa'>
      <span class='dot'>...d</span> <span class='companyName'> UNI.xyz</span>
    <span class='dot'></span>
    </div>
    <button class='applybtn'><a href='/apply'>Apply</a></button>

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
        <div class="cardJob">
  <div class="container">
    <div class='compa'>
      <span class='dot'>...d</span> <span class='companyName'> UNI.xyz</span>
    <span class='dot'></span>
    </div>
    <button class='applybtn'><a href='/apply'>Apply</a></button>

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
    );
}

export default Jobs;