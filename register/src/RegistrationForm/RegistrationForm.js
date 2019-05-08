import React from "react";
import template from "./RegistrationForm.jsx";
import {reduxForm} from 'redux-form';
import formValidations from '../validations/formValidations';
// import getFormData from 'get-form-data'; 
import ServerCall from '../Servercalls/Servicecall';
import Signin from '../Signin/Signin';


class RegistrationForm extends React.Component{
  constructor(){
    super();
    this.state={
      'msg':''
    };
  
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  render() {
    return template.call(this);
  }

  // canBeSubmitted() {
  //   const { uname,fname,email, pwd } = this.state;
  //   return (
  //     uname.length > 0 &&
  //     fname.length > 0 &&
  //     email.length > 0 &&
  //     pwd.length > 0
  //   );
  // }

  handleSubmit(data,e){
    // if (!this.canBeSubmitted()) {
    //   evt.preventDefault();
    //   return;

    ServerCall.fnPostReq('users/register',data)
    .then((res)=>{
      if(res.data && res.data.affectedRows === 1){
         this.setState({
           'msg':'Success'
         })
         this.props.reset();
      }else{
        this.setState({
          'msg':'Error'
        })
      }
    })
    .catch(()=>{
      this.setState({
        'msg':'something went wrong'
      })
    })
  }

  fnNavigate=()=>{
    window.location.href={Signin};
  }

  // fnlogin(){
  //   debugger;
  //   window.location.href="localhost:3000/Signin"
  // }
}



RegistrationForm=reduxForm({
  form:"regForm",
  validate:formValidations
})(RegistrationForm)

export default RegistrationForm;
