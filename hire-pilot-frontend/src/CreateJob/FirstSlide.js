import React from 'react';
import './CreateJob.css'


function FirstSlide({formData, setFormData}) {
  return (
    <div className='containerapply'>
        <form id="Form1">
                <h3>Basic Information</h3>
                <input className="newst" 
                type="text" 
                placeholder="Job Title" 
                value={formData.title}
                onChange={(event) =>
                     setFormData({...formData, title: event.target.value
                })}/>
                <input className="newst" 
                type="text" 
                placeholder="Job Description" 
                value={formData.description}
                onChange={(event) =>
                     setFormData({...formData, description: event.target.value
                })}/>
                <input className="newst" 
                type="text" 
                placeholder="Job Category" 
                value={formData.category}
                onChange={(event) =>
                     setFormData({...formData, category: event.target.value
                })}/>
                <input className="newst" 
                type="text" 
                placeholder="Job location" 
                value={formData.location}
                onChange={(event) =>
                     setFormData({...formData, location: event.target.value
                })}/>
                <div className="btn-box">
            </div>
            </form>
    </div>
  )
}

export default FirstSlide;