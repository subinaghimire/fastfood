// Register.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
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
    // Add your registration logic here
    console.log(formData);
  };

  return (
    <main>
        <Header />
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-form">
          <h2>Register</h2>
         
          <form className="form" onSubmit={handleSubmit}>
          <label><h3>Username</h3></label>
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
            <label><h3>Email</h3></label>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <label><h3>Password</h3></label>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="auth-info">
          <h2>Welcome!</h2>
          <p>Enter your details and start your journey with us.</p>
          <br />
          <img src='pic.jpg' alt='bg' />
        </div>
      </div>
    </div>
    <Footer />
    </main>
  );
};

export default Signup;