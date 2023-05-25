import React from 'react';
import './Apply.css'


function FirstSlide({formData, setFormData}) {
  return (
    <div className='containerapply'>
        <form id="Form1">
                <h3>Appply</h3>
                <input className="newst" 
                type="text" 
                placeholder="Resume" 
                value={formData.resume}
                onChange={(event) =>
                     setFormData({...formData, resume: event.target.value
                })}/>
                <input className="newst" type="text" placeholder="Resume"/>
                <input  className="newst" type="text" placeholder="Resume"/>
                <div className="btn-box">
            </div>
            </form>
    </div>
  )
}

export default FirstSlide;