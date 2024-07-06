import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in with:', { email, password });
    // After successful login, navigate to another page
    // Example: navigate to home page after login
    navigate('/home');
  };

  return (
    <div className="cont">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='btns'>Login</button>
        <p>
          Don't have an account? <span onClick={() => navigate('/signup')}>Sign up</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
