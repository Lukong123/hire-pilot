import React from 'react';
import './CreateJob.css';


function SecondSlide({formData, setFormData}) {
  return (
    <div className='containerapply'>
        <form id="Form2">
                <h3>Other Information</h3>
               
                <select className="selectJob" name='jobType' id='jobType'
                 value={formData.fulltime_partime}
                 onChange={(event) =>
                      setFormData({...formData, fulltime_partime: event.target.value
                 })}>
                <option value="" disabled selected>Full time or Part time</option>

    <option value={'Full Time'}>Full Time</option>
    <option value={'Part Time'}>Part Time</option>
    value={formData.fulltime_partime}
                onChange={(event) =>
                     setFormData({...formData, fulltime_partime: event.target.value
                })}
    
  </select>
  <select className="selectJob" name='jobType' id='jobType' value={formData.offline_remote}
                onChange={(event) =>
                     setFormData({...formData, offline_remote: event.target.value
                })}>
                <option value="" disabled selected>Offline or Remote</option>

    <option value={'Full Time'}>Offline</option>
    <option value={'Part Time'}>Remote</option>
    
    
  </select>
  <input className="newst" 
                type="text" 
                placeholder="Salary Range" 
                value={formData.salary_range}
                onChange={(event) =>
                     setFormData({...formData, salary_range: event.target.value
                })}/>
                   <input className="newst" 
                type="text" 
                placeholder="Submission Deadline" 
                value={formData.submission_deadline}
                onChange={(event) =>
                     setFormData({...formData, submission_deadline: event.target.value
                })}/>
                <div className="btn-box">
                
            </div>
            </form>
    </div>
  )
}

export default SecondSlide;