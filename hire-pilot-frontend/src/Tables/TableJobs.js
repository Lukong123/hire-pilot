import React, {useState, useEffect, useMemo} from 'react';
import './AllJobs.css';
// import axios from "axios";
import axios from 'axios';
import Table from './Table';



function TablesJobs() {
    // const candidateData = JSON.parse(jsonData.candidate_extracted_data);

  const columns = useMemo(
    () => [
      {
        Header: "Candidate Name",
        accessor: 'candidate_name'
      },

      {
        Header: "Job Title",
        accessor: 'job_name'
      },
      {
        Header: "Extracts",
        accessor: 'candidate_extracted_data'
      },
    ],
    []
  );

//   const { skills, language, degree } = candidateData;
   // Data state to store the ApI. it is initially an empty array

   const [data, setData] = useState([]);

   // using useEffect to call the API once mounted and use the data

   useEffect(() => {
    (async () => {
      const result = await axios("http://127.0.0.1:8000/api/v1/apply/?limit=10&offset=10");
      setData(result.data);
    })();
   }, []);

   const [filterInput, setFilterInput] = useState("");

// Update the state when input changes
const handleFilterChange = e => {
  const value = e.target.value || undefined;
  // setFilter("id", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
  setFilterInput(value);
};

// Input element
{/* <input
  value={filterInput}
  onChange={handleFilterChange}
  placeholder={"Search name"}
/> */}

  return (

    <div className='test'>
        {/* <SidebarEmployer/> */}
        <Table columns={columns} data={data} />

    </div>
  )
}

export default TablesJobs;