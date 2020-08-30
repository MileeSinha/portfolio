import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter,Route, Switch } from 'react-router-dom';

import Home from "./Home.js";
import Contact from "./Contact.js";
import Resume from "./Resume.js";
import Navigation from './Navigation.js';
import Base from './Base.js';

const App = () => {
  return (
   <div>
    
   <BrowserRouter>
  <Switch>
  <Route path="/" component={Home} exact />
  <Route path="/Contact" component={Contact} />
  <Route path="/Resume" component={Resume}/>
  </Switch>

 
 </BrowserRouter>
 <div className="bg"></div>
 
  </div>
  )
}

export default App;
