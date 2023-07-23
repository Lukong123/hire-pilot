import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
// import Select from 
import Select from 'react-select';
import axios from 'axios';
import './improve.css';

const statusOptions = [
  { value: 'Pending', label: 'Pending' },
  { value: 'Approved', label: 'Approved' },
  { value: 'Declined', label: 'Declined' },
];
const columns = [
  {
    Header: 'Name',
    accessor: 'candidate', 
    Cell: ({ value }) => {
      return (
        <div>
          {value.first_name}
        </div>
      );
    }

  },
  {
    Header: 'Job Title',
    accessor: 'job',
    Cell: ({ value }) => {
      return (
        <div>
          {value.title}
        </div>
      );
    }
  },
  {
    Header: 'Resume',
    accessor: 'resume',
    Cell: ({ value }) => {
      return (
        <a href={value} target="_blank" rel="noopener noreferrer">
          View Resumes
        </a>
      );
    }
  },
  {
    id: 'skills',
    Header: 'Skills',
    accessor: 'candidate_extracted_data',
    Cell: ({ value }) => {
      if (!value) {
        return null;
      }
      const candidateData = JSON.parse(value);
      const { skills } = candidateData;
      return (
        <div>
          {skills.map((skill, index) => (
            <div key={index}>{skill}</div>
          ))}
        </div>
      );
    }
  },
  {
    id: 'languages',
    Header: 'Languages',
    accessor: 'candidate_extracted_data',
    Cell: ({ value }) => {
      if (!value) {
        return null;
      }
      const candidateData = JSON.parse(value);
      const { language } = candidateData;
      return (
        <div>
          {language.map((lang, index) => (
            <div key={index}>{lang}</div>
          ))}
        </div>
      );
    }
  },
  {
    id: 'degrees',
    Header: 'Degrees',
    accessor: 'candidate_extracted_data',
    Cell: ({ value }) => {
      if (!value) {
        return null;
      }
      const candidateData = JSON.parse(value);
      const { degree } = candidateData;
      return (
        <div>
          {degree.map((deg, index) => (
            <div key={index}>{deg}</div>
          ))}
        </div>
      );
    }
  },
    {
    Header: 'Status',
    accessor: 'status', // default to 'pending'
    Cell: ({ row }) => {
      const [status, setStatus] = useState(row.original.status);
      console.log(row.original)

      const updateStatus = async () => {
        try {
          const response = await axios.patch(`http://127.0.0.1:8000/api/v1/apply/${row.original.id}/`, { status }, config);

          if (response.status === 200) {
            setStatus(status);
            alert('Status updated successfully');
          } else {
            alert('Failed to update status');
          }
        } catch (error) {
          console.error(error);
          alert('Failed to update status');
        }
      };

      const handleStatusChange = (selectedOption) => {
        setStatus(selectedOption.value);
      };

      return (
        <div>
          <Select
            options={statusOptions}
            value={statusOptions.find(option => option.value === status)}
            onChange={handleStatusChange}
            styles={{
              control: (provided) => ({
                ...provided,
                width: 150,
                minHeight: 30,
                borderRadius: 5,
                borderColor: '#ccc',
                boxShadow: 'none',
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? '#007bff' : 'white',
                color: state.isSelected ? 'white' : 'black',
                ':active': {
                  backgroundColor: state.isSelected ? '#007bff' : '#f8f9fa',
                },
              }),
              singleValue: (provided, state) => ({
                ...provided,
                color: state.isSelected ? 'white' : 'black',
              }),
            }}
          />
          <button onClick={updateStatus}>Update</button>
        </div>
      );
    }
  },
];

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem('token')}` // replace with your actual token
  }
};

const MyComponecnt = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/apply/', config);
        setData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
   <div>
    <button><a href='/rank'>Ranked</a></button>
     <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
   </div>
  );
};

export default MyComponecnt;