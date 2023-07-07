import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';

const Table = () => {
  const [data, setData] = useState([]);
  const columns = [
    {
      Header: 'Name',
      accessor: 'candidate_name'
    },
    {
      Header: 'Job Title',
      accessor: 'job_name'
    },
    {
      Header: 'Resume',
      accessor: 'resume'
    },
    {
      Header: 'Candidate Extracted Data',
      accessor: 'candidate_extracted_data',
      Cell: ({ value }) => {
        const candidateData = JSON.parse(value);
        const { skills, language, degree, location } = candidateData;
        return (
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '10px' }}>Skills:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {skills.map((skill, index) => (
                  <div key={index} style={{ marginRight: '10px' }}>{skill}</div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '10px' }}>Language:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {language.map((lang, index) => (
                  <div key={index} style={{ marginRight: '10px' }}>{lang}</div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '10px' }}>Degree:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {degree.map((deg, index) => (
                  <div key={index} style={{ marginRight: '10px' }}>{deg}</div>
                ))}
              </div>
            </div>
            <div>{location}</div>
          </div>
        );
      }
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://example.com/api/data');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

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

export default Table;