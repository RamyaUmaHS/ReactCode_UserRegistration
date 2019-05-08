import "./RegistrationForm.css";
import React from "react";
import {Field} from 'redux-form';
import reduxFormTextBox from '../reducFormInputControls/reduxFormTextBox';

//Using Redux forms we are designing this content for Sign up page using inbuild methods of handlesubmit under forms
function template() {
  const {invalid} = this.props;
  return (
    <div className="container-fluid formClass">
    <div>
      
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
      <div className="alignmentclass">
      <div className="col-sm-2 Signinstyle">Sign Up for free!</div>
      <div className="headerStyles">Willing to take your ideas ahead and take it into action!!</div>
       <div className="form-group formStyles">
        <Field 
          name="fname"
          type="text"
          placeholder=" FullName " 
          component={reduxFormTextBox}
        />
        <Field 
          name="uname"
          type="text"
          placeholder=" UserName "
          component={reduxFormTextBox}
        />
         <Field 
          name="email"
          type="text"
          placeholder=" Email "
          component={reduxFormTextBox}
        />
         <Field 
          name="pwd"
          type="password"
          placeholder=" Password "
          component={reduxFormTextBox}
        /><br/>
        </div>
           <div className=" btnClass text-center">
            <div className="text-center">
            <input disabled={invalid} className="loginbtnCls" type='submit' value="SIGN UP" />
            </div>
            <input className="btn btn-primary loginbtnCls" type='submit' value="LOG IN" onClick={this.fnNavigate}/>
             <div className="text-center col-sm-8"> 
            <b>{this.state.msg}</b>
            </div>
           </div>
           </div>
         </form>
         </div>
      </div>
  );
};


export default template;
