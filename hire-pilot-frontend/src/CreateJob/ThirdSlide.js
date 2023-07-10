import React from 'react';
import './CreateJob.css';


function ThirdSlide({formData, setFormData}) {
  return (
    <div className='containerapply thirdd'>
        <form id="Form3">
                <h3>System Information</h3>

                <select className="selectJob" name='jobType' id='jobType'
                  value={formData.selection_step}
                  onChange={(event) =>
                       setFormData({...formData, selection_step: event.target.value
                  })}>
                <option value="" disabled selected>Selection Step</option>

    <option value={'One'}>One</option>
    <option value={'Two'}>Two</option>
  
    
  </select>
                <input className="newst" 
                type="text" 
                placeholder="Required Skills" 
                value={formData.skills}
                onChange={(event) =>
                     setFormData({...formData, skills: event.target.value
                })}/>
                   <input className="newst" 
                type="text" 
                placeholder="Required Degree" 
                value={formData.degree}
                onChange={(event) =>
                     setFormData({...formData, degree: event.target.value
                })}/>
                  <input className="newst" 
                type="text" 
                placeholder="Required Language" 
                value={formData.language}
                onChange={(event) =>
                     setFormData({...formData, language: event.target.value
                })}/>
                <div className="btn-box">
            </div>
            </form>

    </div>
  )
}

export default ThirdSlide;