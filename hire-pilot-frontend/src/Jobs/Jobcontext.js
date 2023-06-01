import React, {Component} from 'react';
import './Jobcontext.css';

const todoItems = [
  
  {
    "pk": 1,
    "company_name": "Solution",
    "title": "software",
    "category": "Technology",
    "location": "Bamenda",
    "fulltime_partime": "Full Time",
    "offline_remote": "Offline",
    "submission_deadline": "2023-06-20",
    "selection_step": 3,
    "salary_range": "200000",
    "description": "Frontend developer good in react",
    "skills": "excel, social media handling, communication",
    "date_created": "2023-06-01"
},

{
  "pk": 1,
  "company_name": "City",
  "title": "software",
  "category": "Technology",
  "location": "Bamenda",
  "fulltime_partime": "Full Time",
  "offline_remote": "Offline",
  "submission_deadline": "2023-06-20",
  "selection_step": 3,
  "salary_range": "200000",
  "description": "Frontend developer good in react",
  "skills": "excel, social media handling, communication",
  "date_created": "2023-06-01"
},

{
  "pk": 1,
  "company_name": "CitySolution",
  "title": "software",
  "category": "Technology",
  "location": "Bamenda",
  "fulltime_partime": "Full Time",
  "offline_remote": "Offline",
  "submission_deadline": "2023-06-20",
  "selection_step": 3,
  "salary_range": "200000",
  "description": "Frodadfadfafdafafdf adfdafafdf agafdfa afafdf afdaff ntend developer good in react",
  "skills": "excel, social media handling, communication",
  "date_created": "2023-06-01"
}
];

class Jobcontext extends Component{
  constructor(props) {
    super(props);
    this.state = {todoItems};
  } 
  render () {
  return (
    <div class='jf'>
       {this.state.todoItems.map(item => (
        <div className='jobcontext'>
           <div> <p> Img </p> <p class='companyname'> {item.company_name}</p> </div>

<button  class ='applybtnn'>Apply</button>

<div class='jobtitle'> {item.title} <span class='dot'>.</span> <span class='location'>{item.location}</span> </div> 

<div class='jobdescription'> {item.description} </div>

<button class='partorfull'>{item.fulltime_partime}</button>
<div class='howlong'> {item.date_created}</div>
        </div>
       ))}
</div>
  )
}
}

export default Jobcontext;