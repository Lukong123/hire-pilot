import React, {useState} from 'react';
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';
import axios from 'axios';

function CreateJobForm() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        location: "",
        description: "",

        fulltime_partime: "",

        offline_remote: "",
        salary_range: "",

        submission_deadline: "",


        selection_step: "",
        


        skills:"",
        language:"",
        degree:""

    });

    const FormTitles = ["First", "Second", "Third"];
    const PageDisplay = () => {
        if (page == 0) {
    
            return <FirstSlide formData={formData} setFormData = {setFormData} />;
        }
        else if (page == 1) {
            return <SecondSlide formData={formData} setFormData = {setFormData} />
        }
        else{
            return <ThirdSlide formData={formData} setFormData = {setFormData} />
        }
    }
  return (
    <div className='formApply bodyapply'>
        
        
    <div className='formapplycontainer'>
        <div className='header'>
        

            {/* <h1>{FormTitles[page]}</h1> */}
        </div>
        <div className='body'>
        <div className='progressbar'>
            <div id='progress'
            style={{width: page === 0 ? '33.3%': page == 1 ? "66.6%": "100%"}}></div>
         <div className="step-col"><small>Step 1</small></div>
                <div className="step-col"><small>Step 2</small></div>
                <div className="step-col"><small>Step 3</small></div>
        </div>
            {PageDisplay()}
        
        </div>
        <div className='footer'>
        <button
        disabled = {page == 0}
        onClick={() => {setPage((currentPage) => currentPage
             - 1)}}
        >Previous</button>
        {/* <button
        onClick={() => {
            if (page === FormTitles.length -1) {
                alert("form sumbitted")
                console.log(formData)
                // send data to api around here

            }
            else {
            setPage((currentPage) => currentPage +1 );}
        }}>
       {page=== FormTitles.length -1 ? "Submit": "Next"}</button> */}
       <button onClick={() => {
    if (page === FormTitles.length -1) {
        axios.post('http://127.0.0.1:8000/api/v1/job/', formData)
            .then((response) => {
                alert('Form submitted successfully!');
                console.log(response);
            })
            .catch((error) => {
                alert('Error submitting form: ' + error.message);
                console.error(error);
            });
    } else {
        setPage((currentPage) => currentPage +1 );
    }
}}>
    {page=== FormTitles.length -1 ? "Submit": "Next"}
</button>

        </div>
        
    </div>
    </div>
  )
}

export default CreateJobForm;