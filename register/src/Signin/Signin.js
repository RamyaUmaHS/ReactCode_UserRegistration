import React    from "react";
import getFormData from 'get-form-data'; 
import template from "./Signin.jsx";

  const initialState={
    name:'',
    pwd:'',
    nameErr:'',
    pwdErr:''   
  }

class Signin extends React.Component {
  constructor(){
    super();
    this.state=initialState;
  }
  
  render() {
    return template.call(this);
  }

  handleChange=event=>{
    debugger;
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]:isCheckbox
      ? event.target.checked
      :event.target.value
    });
  };

  validate = () => {
    debugger;
    let nameErr="";
    let pwdErr="";

    if(this.state.pwd===''){
      pwdErr='Password cannot be blank';
    }

    if(!this.state.name.includes('@')){
      nameErr='Please enter valid Email Address';
    }

    if(nameErr || pwdErr){
      this.setState({nameErr,pwdErr});
      return false;
    }
    return true;
  };


  changeNavigation = () =>{
  debugger;
    window.location.href="#/RegistrationForm"
  }

  handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    const isValid=this.validate();
    if(isValid){
      var form = document.querySelector('#Signinform')
      var data = getFormData(form)
      this.setState(initialState);
      console.log(JSON.stringify(data));    
      }
  
    
  }

  // fnNavigations=()=>{
  //   debugger;
  //   window.location.href="#/ResetPassword"
  // }

}



export default Signin;
