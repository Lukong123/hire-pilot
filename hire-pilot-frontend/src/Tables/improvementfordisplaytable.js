import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import axios from 'axios';

const columns = [
  {
    Header: 'Name',
    accessor: 'candidate',
    Cell: ({ value }) => {
      return (
        <div >
          {value.first_name}
        </div>
      );
    }

  },
  {
    Header: 'Job Title',
    accessor: 'job'
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
    id: 'location',
    Header: 'Location',
    accessor: 'candidate_extracted_data',
    Cell: ({ value }) => {
      if (!value) {
        return null;
      }
      const candidateData = JSON.parse(value);
      const { location } = candidateData;
      return <div>{location || '-'}</div>;
    }
  }
];

function accessRow(originalRow, rowIndex, depth, parentIndex, rows) {
  const rowData = {};
  columns.forEach(column => {
    const { accessor, id } = column;
    
    rowData[id] = originalRow[accessor];
  });

  rows.push({
    data: rowData,
    depth,
    parentIndex,
    index: rows.length,
    original: originalRow,
    subRows: []
  });
}

const config = {
  headers: {
    "Content-Type": "application/json",
  }
}

const MyComponecnt = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}` // replace with your actual token
      }
    };
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
  );
};

export default MyComponecnt;