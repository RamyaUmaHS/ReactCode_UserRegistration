import "./Signin.css";
import React from "react";
import Sparrow from './Sparrow.png';

function template() {
  return (
    
    <div className="container">
      <div className="row formStyle">
      <form id="Signinform" className="" onSubmit={this.handleSubmit}>
        <div className="headerClass">
      <img className="imgStyle" src={Sparrow} alt="Sparrow" height="50px" width=""/>
      <div className="headerclass">Welcome back! Log in to <br/> access all our features.
      </div>
      </div>
      <div className="text-center marginStyle">
      <div className="form-group myclass">
        <input name="name" id="un" className="form-group loginClass" type="text" placeholder=" Email address" onChange={this.handleChange}/>
      </div>
      <div className="form-group text-center" style={{fontSize:16, color:'blue'}}>{this.state.nameErr}
      </div>
      <div className="form-group">
        <input name="pwd" id="pwd" className="form-group loginClass" type="password" placeholder=" Password"  onChange={this.handleChange}/>
        </div>
        <div className="form-group" style={{fontSize:16, color:'blue'}}>{this.state.pwdErr}
        </div>
      <div>
        <input type="submit" className="form-group btn btn-primary loginClass" value="LOG IN"/>
      </div>
      <div>
        <input className="form-group btn btn-link" type="button" value="Forgot your password"/>
      </div>      
      <div>
        <input className="form-group loginClass" type="button" value="Sign Up" onClick={this.changeNavigation}/>
      </div>
      </div>      
      </form>
      </div>
    </div>
  );
};

export default template;
