import React from 'react';
import { useTable } from 'react-table';
import Table from './Table';
import MyComponentt from './test1';

// import React from 'react'

function Test2() {
    const data = [{
        candidate_name: 'Anne',
        job_name: 'Lawyer',
        resume: <a href="http://127.0.0.1:8000/media/Candidates/Documents/resume5.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>,
        candidate_extracted_data: "{\"skills\": [\"Networking\", \"python\", \"Excel\", \"networking\"], \"language\": [\"FRENCH\", \"PIDGIN\"], \"degree\": [\"Bachelor of Engineering\", \"MS in Computer Science\"], \"location\": null}"
      }];
      
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
  
}

export default Test2;
// import React from 'react';

// const sampleData = {
//   "candidate_name": "Anne",
//   "job_name": "Lawyer",
// "resume": <a href="http://127.0.0.1:8000/media/Candidates/Documents/resume5.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>,
//   "candidate_extracted_data": "{\"skills\": [\"Networking\", \"python\", \"Excel\", \"networking\"], \"language\": [\"FRENCH\", \"PIDGIN\"], \"degree\": [\"Bachelor of Engineering\", \"MS in Computer Science\"], \"location\": null}"
// };

// const MyComponent = () => {
//   const jsonData = sampleData;
//   const candidateData = JSON.parse(jsonData.candidate_extracted_data);
//   const { skills, language, degree, location } = candidateData;
//   const tableHeaders = ['name', 'job_title', 'resume','candidate_extracted_data'];
//   const tableData = [jsonData.candidate_name, jsonData.job_name, jsonData.resume, ''];

//   return (
//     <table>
//       <thead>
//         <tr>
//           {tableHeaders.map((header) => (
//             <th key={header} colSpan={header === 'candidate_extracted_data' ? 4 : 1}>{header}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           {tableData.map((data, index) => (
//             <td key={index}>{data}</td>
//           ))}
//           <td colSpan={3}>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <div style={{ marginRight: '10px' }}>Skills:</div>
//               <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//                 {skills.map((skill, index) => (
//                   <div key={index} style={{ marginRight: '10px' }}>{skill}</div>
//                 ))}
//               </div>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <div style={{ marginRight: '10px' }}>Language:</div>
//               <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//                 {language.map((lang, index) => (
//                   <div key={index} style={{ marginRight: '10px' }}>{lang}</div>
//                 ))}
//               </div>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <div style={{ marginRight: '10px' }}>Degree:</div>
//               <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//                 {degree.map((deg, index) => (
//                   <div key={index} style={{ marginRight: '10px' }}>{deg}</div>
//                 ))}
//               </div>
//             </div>
//           </td>
//           <td>{location}</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// export default MyComponent;