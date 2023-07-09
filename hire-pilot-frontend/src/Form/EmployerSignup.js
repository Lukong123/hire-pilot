import  React,{ useState } from 'react';
import './CandidateSignupForm.css';

export default function EmployerSignupForm() {

	// States for registration
	const [uname, setuName] = useState('');
	const [name, setName] = useState('');
	const [lname, setlName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change
	const handleuName = (e) => {
		setuName(e.target.value);
		setSubmitted(false);
	};

	// Handling the name change
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	// Handling last name change
	const handlelName = (e) => {
		setlName(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	
	const handleSubmit = e => {
		e.preventDefault();
	  
		if (uname === '' || name === '' || lname === '' || email === '' || password === '' || confirmPassword === '') {
		  setError(true);
		} else if (password !== confirmPassword) {
		  setError(true);
		} else {
		  setSubmitted(true);
		  setError(false);
		}
	  };

	// Showing success message
	const successMessage = () => {
		return (

            <div
				className="success"
				style={{
					display: submitted ? '' : 'none',
				}}>
				<h3>User {name} successfully registered! You can now login</h3>
			</div>
		);
	};

	// Showing error message if error is true
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<h3>*** Please enter all the fields</h3>
			</div>
		);
	};

	return (
		<div className="candidatesignform">
			<div>
				<h1>Employer Registration</h1>
			</div>

			{/* Calling to the methods */}
			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>

			<form>
				{/* Labels and inputs for form data */}
				{/* <label className="label">Name</label> */}

				{/* username */}
				<input onChange={handleuName} className="input" placeholder='Enter User Name'
					value={uname} type="text" /> <br></br>

				<input onChange={handleName} className="input" placeholder='Enter Company Name'
					value={name} type="text" /> <br></br>

<input onChange={handlelName} className="input" placeholder='Enter Location'
					value={lname} type="text" /> <br></br>

				{/* <label className="label">Email</label> */}
				<input onChange={handleEmail} className="input" placeholder='Enter Email'
					value={email} type="email" /> <br></br>

				{/* <label className="label">Phone</label> */}
				<input onChange={handleEmail} className="input" placeholder='Enter Phone Number'
					value={email} type="email" /> <br></br>
				
				{/* <label className="label">Industry Type</label> */}
				<input onChange={handleEmail} className="input" placeholder='Enter Email'
					value={email} type="email" /> <br></br>

				{/* Select */}
				<select className="" name='allIndustries' id='allIndustries'>
    <option value={'Agriculture'}>Agriculture</option>
    <option value={'Health Care'}>Health Care</option>
    <option value={'Hospitality and Tourism'}>Hospitality and Tourism</option>
    <option value={'Aerospace'}>Aerospace</option>
    <option value={'Transport and Logistics'}>Transport and Logistics</option>

    <option value={'Banking and Finance'}>Banking and Finance</option>

    <option value={'Media and Entertainment'}>Media and Entertainment</option>

    <option value={'Professional Services'}>Professional Services</option>
    <option value={'Technology'}>Technology</option>


    <option value={'Others'}>Others</option>

  </select>


				{/* <label className="label">Password</label> */}
				<input onChange={handlePassword} className="input" placeholder='Enter Password'
					value={password} type="password" /> <br></br>


<input
  onChange={e => setConfirmPassword(e.target.value)}
  className="input"
  placeholder="Confirm Password"
  value={confirmPassword}
  type="password"
/>

				<button onClick={handleSubmit} className="btn"
						type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

// export default CandidateSignupForm;