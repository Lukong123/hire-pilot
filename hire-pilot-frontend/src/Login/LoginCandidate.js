import React, { useState } from 'react';
import './Login.css';

function LoginCandidate(props) {
  const [uname, setuName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const handleuNameChange = (event) => {
    setuName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data1 = {
      username: uname,
      password: password
    };
    const response = await fetch('http://127.0.0.1:8000/Account/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data1),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token); // Save the token to local storage
      localStorage.setItem('user', data.user)
      console.log(localStorage.getItem('data'))
      setShowModal(false); // Close the login modal
    } else {
      setError(data.error);
    }
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleClosedBtn">
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <div className="title"></div>
        <div className="body-login">
          <p className="bodytitle">LOGIN</p>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Username" value={uname} onChange={handleuNameChange} />
            <br />
            <input type="password" placeholder="Enter Your Password" value={password} onChange={handlePasswordChange} />
            {error && <p className="error">{error}</p>}
            <button type="submit" className="loginbtn">
              Login
            </button>
            <br />
          </form>
        </div>
        <div className="footer">
          <p className="donthaveaccount">
            Don't yet have an account? <span> <a href="#create" className="create">Create Account</a></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginCandidate;