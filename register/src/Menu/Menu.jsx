import "./Menu.css";
import React from "react";
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import Userdetails from '../Userdetails/Userdetails';
import Signin from "../Signin/Signin";
import {HashRouter,Route} from 'react-router-dom';

function template() {
  return (
    <div className="menu">
         <HashRouter>
             <div>
                   <div className="tabs">
                      <a href="#/Signin">Signin</a>
                      <a href="#/RegistrationForm">Register</a>
                      <a href="#/Userdetails">Users Details</a>
                   </div>
                   <Route path="/" exact component={Signin} />
                   <Route path="/Signin"  component={Signin} />
                   <Route path="/RegistrationForm" component={RegistrationForm} />
                   <Route path="/Userdetails" component={Userdetails} />
              </div>
           </HashRouter>
    </div>
  );
};

export default template;
