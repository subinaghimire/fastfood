// import React from "react";
// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <div className="footer">
//       <li><Link to="/">
//       <img src="/foodlogo.png" alt="logo" /></Link></li>
//        {/* <h1> Hungry Mate🍔🍟 </h1> */}
//       <ul className="flist">
//       <li><Link to="/">Home</Link></li>
//     <li><Link to="/piza">Pizzas</Link></li>
//     <li><Link to="/burger">Burgers</Link></li>
//       </ul>
//       <div className="social-icons">
//       <Link to="https://www.facebook.com"> <img src="/fb.jpg" alt="Facebook" />Facebook</Link>
//        <Link to="https://www.facebook.com"><img src="/twitter.jpg" alt="Twitter" />Twitter</Link>
//        <Link to="https://www.facebook.com"><img src="/download.jpg" alt="Twitter" />Instagram</Link>

//         {/* Add more social icons as needed */}
//       </div>
//     </div>
//   );
// }

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/">
         <span> <img src="/foodlogo.png" alt="logo" /></span> </Link>
      <div className="footer-links">
      
        <div className="footer-section">
          
        
          
          <ul>
          
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menus">Menus</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          
          <div className="social-icons">
            <a href="https://github.com"><FaGithub /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://au.linkedin.com/in/subina-ghimire01"><FaLinkedin /></a>
          </div>
          <br/>
          <div className="social-icons">
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Subina Project. All rights reserved.</p>
        <p>Contact us at <a href="mailto:contact@example.com">subina@gmail.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
