import React, {useState, useEffect, useMemo} from 'react';
import './AllJobs.css';
// import axios from "axios";
import axios from 'axios';
import Table from './Table';


// const Id = ({values}) => {
//   return (
//     <>
//     {values.map((id, idx) => {
//       return (
//         <span key={idx} className='badge'>
//           {id}
//         </span>
//       );
//     })}</>
//   );
// };

function TableJobs() {

  const columns = useMemo(
    () => [
      {
        Header: "User Id",
        accessor: 'userId'
      },
      {
        Header: "Id",
        accessor: 'id',
        // Cell: ({cell: {value}}) => <Id values={value}/>
      },
      {
        Header: "Title",
        accessor: 'title'
      },
      {
        Header: "Description",
        accessor: 'body'
      },
    ],
    []
  );
   // Data state to store the ApI. it is initially an empty array

   const [data, setData] = useState([]);

   // using useEffect to call the API once mounted and use the data

   useEffect(() => {
    (async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");
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

export default TableJobs;