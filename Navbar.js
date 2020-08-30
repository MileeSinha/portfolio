import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavCss from "./NavCss.css";
import { BrowserRouter, Route } from 'react-router-dom';
const Navbar = () => {
    return(
        
<div>
    <BrowserRouter>
    <div className="bg">
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul className="navbar-nav">
    <li className="nav-item ">
      <a className="nav-link" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Contact</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="./Resume.js">Resume</a>
    </li>
  </ul>
</nav>

<h1 className="heading">Center</h1>
</div>
</BrowserRouter>
</div>
    )
};

export default Navbar;