// 

// Login.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(formData);
  };

  return (
    <main>
      <Header />
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-info">
          {/* 
          */}
           <h2>Welcome!</h2>
          <h4>Log in to continue your journey with us.</h4> 
          <br />
          <img src='picture.jpg' alt='bg' />
         
        </div>
        <div className="auth-form">
          <h2>Login</h2>
          <form className="form" onSubmit={handleSubmit}>
            <label><h3>Username</h3></label>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <label><h3>Password</h3></label>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </main>
  );
};

export default Login;
