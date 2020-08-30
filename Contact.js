import React from 'react';
import Base from "./Base";
import linkedin  from "./linkedin.png";
import gitpic  from "./gitpic.png";
const Contact = () => {
    return(
        <div>
 <Base>

 <div className="contactinfo">
     <div className="innerinfo">
     <h2>Name :   Milee Sinha</h2>
     <hr/>
     <h2> Email :    Sinhamilee7@gmail.com</h2>
     <hr/>
     <h2>Phone : 8427971929</h2>
     <hr/>
     <h3>Address: Lovely Professional University, 
         Jalandhar, Punjab </h3>
<hr/>
<a href="https://www.linkedin.com/in/mileesinha">
<img className="linkedinpic" 
src={linkedin} alt="linkedin"/>
 </a>
 <a href="https://www.github.com/MileeSinha/">
<img className="gitpic" 
src={gitpic} alt="gitpic"/>
 </a>
     </div>
    

 </div>
     </Base>
 
        </div>
    )
};
export default Contact;
