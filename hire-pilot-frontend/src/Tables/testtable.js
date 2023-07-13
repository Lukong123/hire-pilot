import React from 'react';
import { useTable } from 'react-table';

const sampleData = [
  {
    "candidate_name": "Teddy",
    "job_name": "Content Creation",
    "resume": <a href="http://127.0.0.1:8000/media/Candidates/Documents/resume5_U6TEfDv.pdf">View Resume</a>,
    "candidate_extracted_data": "{\"skills\": [\"excel\", \"networking\", \"python\", \"automation\"], \"language\": [\"PIDGIN\", \"FRENCH\"], \"degree\": [\"Bachelor of Engineering\", \"GCE A-Level Certificate\", \"A-Level Certificate Had\", \"GCE advance level\", \"GCE ordinary level\", \"ordinary level .\"], \"location\": null}",
    "status": "Approved"
  },
  {
    "candidate_name": "Machinda",
    "job_name": "Software",
    "resume": <a href="http://127.0.0.1:8000/media/Candidates/Documents/CV_2023071005411379_1.pdf">View Resume</a>,
    "candidate_extracted_data": "{\"skills\": [\"react\", \"mentor\", \"python\", \"django\"], \"language\": [\"English\", \"French\"], \"degree\": [], \"location\": null}",
    "status": ""
},
  {
    "candidate_name": "Steph",
    "job_name": "Software",
    "resume": <a href="http://127.0.0.1:8000/media/Candidates/Documents/MBAH_STEPAHNE_WILLY_NEW_CV_FOMAT1_Gr48Ikn.PDF" target='_blank' rel="noopener noreferrer">View Resme</a>,
    "candidate_extracted_data": "{\"skills\": [ \"python\", \"engineering maintenance\",  \"welding\", \"problem solving\", \"interpersonal skills\", \"time management\", \"leadership\", \"molding\"], \"language\": [], \"degree\": [], \"location\": null}",
    "status": ""
},
{
  "candidate_name": "Kimberly",
  "job_name": "Software",
  "resume": <a href="http://127.0.0.1:8000/media/Candidates/Documents/kimbi_darlington_cv_ygv1uxx.pdf"> View Resume</a> ,
  "candidate_extracted_data": "{\"skills\": [\"communication\", \"react\", \"time management\", \"networking\", \"mysql\"], \"language\": [], \"degree\": [], \"location\": null}",
  "status": "Pending"
},

{
  "candidate_name": "Anne",
  "job_name": "Lawyer",
  "resume": <a href="http://127.0.0.1:8000/media/Candidates/Documents/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>,
  "candidate_extracted_data": '{"skills": ["Networking", "python", "Excel", "networking"], "language": ["FRENCH", "PIDGIN"], "degree": ["Bachelor of Engineering", "MS in Computer Science"], "location": null}'
},
  // Add more data items here
];

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

const MyComponent = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data: sampleData
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
