import React, {useState, useEffect, useMemo} from 'react';
// import './AllJobs.css';
import axios, { Axios } from 'axios';
// import Table from './Table';


function TableJxobs() {
    const [joke, setJokes] = useState("");
    const getJoke = () => {
        axios.get("http://127.0.0.1:8000/HirePilot/alljobs/").then(
        (response) => {
            // console.log(response)
            setJokes(response.data.title + "..." + response.data.company_name)
        }
    )

    }
 return (  
    <div className='test'>
        {/* <SidebarEmployer/> */}
        {/* <Table columns={columns} data={data} />
         */}
         <button onClick={getJoke}>Get jo</button>
     
    </div>
  )
}

export default TableJxobs;