import React from 'react';
import Base from "./Base";
import resumepic  from './resumepic.jpg';
import NavCss from './NavCss.css';
import Navigation from './Navigation.js';
const Resume = () => {
    return(
        <div>
     
     <Base>
     <div>
        <img className="resume" 
        src={resumepic} alt="resumepic"/>
    
     </div>
     </Base>
      </div>
    )
};
export default Resume;