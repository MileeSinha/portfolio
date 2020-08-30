import React from "react"
import NavCss from './NavCss.css';
import Navigation from "./Navigation"

import Footer from "./Footer"
const Base= (props)=>{

    return(
       <div>
           <Navigation/>
           {props.name}
           {props.children}
           
      </div>
    )
}


export default Base;

