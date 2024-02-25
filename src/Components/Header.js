import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <li><Link to="/">
      <img src="/foodlogo.png" alt="logo" /></Link></li>
       {/* <h1> Hungry Mate🍔🍟 </h1> */}
      <ul className="hlist">
      <li><Link to="/">Home</Link></li>
        <li className="dropdown">
        <Link to="/menus">Menus</Link> 
          <ul className="dropdown-content">
            <li>
              <Link to="/piza">Pizza</Link>
            </li>
            <li>
              <Link to="/burger">Burger</Link>
            </li>
          </ul>
        </li>
    
    <li><Link to="/ourservices">Services</Link></li>
    <li><Link to="/careers">Careers</Link></li>
    <li><button><Link to="/signup">SignUp</Link></button></li>
    <li><button><Link to="/login">Login</Link></button></li>
      </ul>
    </div>
  );
}
