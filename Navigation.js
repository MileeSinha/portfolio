import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return(
        <div>
<nav class="navbar navbar-expand-lg mynav navbar-dark bg-dark ">
  <a class="navbar-brand" href="/">Home</a>
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/Contact">Contact</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/Resume">Resume</a>
      </li>
    
     
    </ul>
  </div>
</nav>




</div>

    )
};
export default Navigation;
