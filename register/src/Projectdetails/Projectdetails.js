import React    from "react";
import template from "./Projectdetails.jsx";

class Projectdetails extends React.Component {
  constructor(){
    super();
    this.state={
      'ans':{},
      'decidedvalue':false
    }
  }

  render() {
    return template.call(this);
  }
  fnchange(key,e){
    debugger;
    this.setState({
      'ans':{
      ...this.state.ans,
      [key]:e.target.value,
      'decidedvalue':true
      }
    })
    e.preventDefault();
  }
}

export default Projectdetails;
