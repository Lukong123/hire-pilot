import { useEffect, useState } from "react"
import React from 'react';

function Jobcontext() {

  const [name, setName] = useState([]);

  useEffect(() => {
    names()
  }, []
  )

  const names = async () => {
    const response = await fetch('http://127.0.0.1:8000/HirePilot/alljobs/');

    setName(await response.json())
  }
  return (
    <div>Jobcontext

      {name.map((data) => {
        return(
          <div className='jobcontext'>
           <div> <p> Img </p> <p class='companyname'> {data.company.company_name}</p> </div>

<button  class ='applybtnn' href='/apply'><a href='/apply'>Apply</a></button>

<div class='jobtitle'> {data.title} <span class='dot'>.</span> <span class='location'>{data.location}</span> </div> 

<div class='jobdescription'> {data.description} </div>

<button class='partorfull'>{data.fulltime_partime}</button>
<div class='howlong'> {data.date_created}</div>
        </div>
        )
      })}
    </div>
  )
}

export default Jobcontext;