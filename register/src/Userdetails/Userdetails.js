import React from "react";
import template from "./Userdetails.jsx";
import getFormData from 'get-form-data'; 
import 'react-router-dom';

class Userdetails extends React.Component {
  constructor() {
    super();
    this.state = {
      'ans': {},
      'decidingvalue':'',
      'msg':''
    }
    this.handleSubmit.bind(this);
  }
  render() {
    return template.call(this);
  }

    //change event for handling branching statements
  fnchange=(key, e)=> {
      this.setState({
        'ans':{
          ...this.state.ans,
          [key]:e.target.value
        }
      })
    }

    // taking data from form
    handleSubmit(e) {
        
      var form = document.querySelector('#Userform')
 
      var data = getFormData(form)

      console.log(JSON.stringify(data));
      e.preventDefault();

    }  
    }



  //Taking the data from the Form and storing it on the database
  // fnSubmit(data) {
  //   debugger;
  //   let keys = {...this.state.ans};
  //   console.log(keys);
  // }


export default Userdetails;
