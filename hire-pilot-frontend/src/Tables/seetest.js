// import React from 'react';

// const sampleData = {
//     "candidate_name": "Anne",
//     "job_name": "Lawyer",
//     "resume": "http://127.0.0.1:8000/media/Candidates/Documents/resume5.pdf",
//     "candidate_extracted_data": "{\"skills\": [\"Networking\", \"python\", \"Excel\", \"networking\"], \"language\": [\"FRENCH\", \"PIDGIN\"], \"degree\": [\"Bachelor of Engineering\", \"MS in Computer Science\"], \"location\": null}"
// };

// const MyComponent = () => {
//     const jsonData = sampleData;
//     const candidateData = JSON.parse(jsonData.candidate_extracted_data);
//     const { skills, language, degree, location } = candidateData;
//     const tableHeaders = ['name', 'job_title', 'candidate_extracted_data'];
//     const subHeaders = ['skills', 'degree', 'language'];
//     const subHeaderData = [skills, degree, language];
//     const tableData = [jsonData.candidate_name, jsonData.job_name, ''];

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     {tableHeaders.map((header) => (
//                         <th key={header} colSpan={header === 'candidate_extracted_data' ? 3 : 1}>{header}</th>
//                     ))}
//                 </tr>
//                 <tr>
//                     {subHeaders.map((subHeader) => (
//                         <th key={subHeader}>{subHeader}</th>
//                     ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     {tableData.map((data, index) => (
//                         <td key={index}>{data}</td>
//                     ))}
//                     <td colSpan={subHeaders.length}>
//                         <table>
//                             <tbody>
//                                 {subHeaders.map((subHeader, index) => (
//                                     <tr key={subHeader}>
//                                         <td>{subHeader}</td>
//                                         <td>
//                                             {subHeaderData[index].map((data) => (
//                                                 <div key={data}>{data}</div>
//                                             ))}
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     );
// };

// export default MyComponent;