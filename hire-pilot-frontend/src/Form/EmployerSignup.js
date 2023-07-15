import  React,{ useState } from 'react';
import './CandidateSignupForm.css';

export default function EmployerSignupForm() {

	// States for registration
	const [uname, setuName] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [location, setLocation] = useState('');
	const [phone, setPhone] = useState('');
	const [category, setCategory] = useState('');



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
	

	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

		// Handling the phone change
	const handlePhone = (e) => {
		setPhone(e.target.value);
		setSubmitted(false);
	};

			// Handling the location change
	const handleLocation = (e) => {
		setLocation(e.target.value);
		setSubmitted(false);
	};

			// Handling the category change
	const handleCategory = (e) => {
		setCategory(e.target.value);
		setSubmitted(false);
	};



	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	
	const handleSubmit = e => {
		e.preventDefault();
	  
		if (uname === '' || name === '' ||  location === '' || email === '' || phone === ''|| category=== '' || password === '' || confirmPassword === '') {
		  setError(true);
		} else if (password !== confirmPassword) {
		  setError(true);
		} else {
			const data = {
				username: uname,
				company_name: name,
				email: email,
				location: location,
				phone:phone,
				industry_type:category,
				password: password,
				confirm_password: confirmPassword
			  };
		
			  console.log(data)
			  fetch('http://127.0.0.1:8000/api/v1/employer/', {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			  })
				.then(response => {
				  if (!response.ok) {
					// throw new Error('Network response was not ok');
					console.error(error)
				  }
				  return response.json();
				})
				.then(data => {
				  console.log('Success:', data);
				  setSubmitted(true);
				  setError(false);
				})
				.catch(error => {
				  console.error('Error:', error);
				  setError(true);
				});
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

				{/* username */}
				<input onChange={handleuName} className="input" placeholder='Enter User Name'
					value={uname} type="text" /> <br></br>

				<input onChange={handleName} className="input" placeholder='Enter Company Name'
					value={name} type="text" /> <br></br>

<input onChange={handleLocation} className="input" placeholder='Enter Location'
					value={location} type="text" /> <br></br>

				{/* <label className="label">Email</label> */}
				<input onChange={handleEmail} className="input" placeholder='Enter Email'
					value={email} type="email" /> <br></br>

				{/* <label className="label">Phone</label> */}
				<input onChange={handlePhone} className="input" placeholder='Enter Phone Number'
					value={phone} type="email" /> <br></br>
				
				{/* <label className="label">Industry Type</label> */}
				{/* <input onChange={handleCategory} className="input" placeholder='Enter Email'
					value={email} type="email" /> <br></br> */}

				{/* Select */}
				<select className="" name='allIndustries' id='allIndustries' onChange={handleCategory} value={category}>
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

