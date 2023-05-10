import React from "react";


function AddJob({closeModal}) {
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeModal(false)}>X</button>
                <div className="title">
                    <h1>Hello there, Anne</h1>
                    <h5>Add Job</h5>
                </div>
                <div className="body">
                

  <input type="text" name="jobname" id="jobname" placeholder="Job Name"/> <br></br>
  <select name='jobType' id='jobType'>
    <option value={'Full Time'}>Full Time</option>
    <option value={'Tech Startup'}>Part Time</option>
    
  </select> <br></br>
  <input type="text" name="location" id="location" placeholder="Location"/> <br></br>
  <select name='position' id='jobposition'>
    <option value={'Remote'}>Remote</option>
    <option value={'On site'}>On site</option>
    
  </select>
  <button>Add Job</button>

                    

                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)}>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default AddJob;