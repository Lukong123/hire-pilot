

import React from 'react';
import { useTable } from 'react-table';

const sampleData = {
  "candidate_name": "Anne",
  "job_name": "Lawyer",
  "resume": <a href="http://127.0.0.1:8000/media/Candidates/Documents/resume5.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>,
  "candidate_extracted_data": "{\"skills\": [\"Networking\", \"python\", \"Excjbel\", \"networking\"], \"language\": [\"FRENCH\", \"PIDGIN\"], \"degree\": [\"Bachelor of Engineering\", \"MS in Computer Science\"], \"location\": null}"
};

const columns = [
  {
    Header: 'name',
    accessor: 'candidate_name'
  },
  {
    Header: 'job_title',
    accessor: 'job_name'
  },
  {
    Header: 'resume',
    accessor: 'resume'
  },
  {
    Header: 'candidate_extracted_data',
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

const data = [
  {
    candidate_name: sampleData.candidate_name,
    job_name: sampleData.job_name,
    resume: sampleData.resume,
    candidate_extracted_data: sampleData.candidate_extracted_data
  }
];

const MyComponent = () => {
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

export default MyComponent;