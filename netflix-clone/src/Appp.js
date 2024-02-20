import React, { useState } from 'react';
import './Appp.css';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
      <div className="App">
        <div className="header">
          <img className="logo" src="./logo.png" alt="logo" />
        </div>
        <div className="login-container">
          <h1>Welcome Back!</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
  );
}

export default App;
