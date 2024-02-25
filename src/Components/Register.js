// // Register.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Change this line

// function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Change this line

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your register logic here
//     console.log('Register submitted:', email, password);
//     // Redirect to login page after successful registration
//     navigate('/login'); // Change this line
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;


// Register.js
import React, { useState } from 'react';

const Register = () => {
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
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-form">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="auth-info">
          <h2>Welcome!</h2>
          <p>Enter your details and start your journey with us.</p>
        </div>
      </div>
    </div>
  );
};

export default Register;

