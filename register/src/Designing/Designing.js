import React    from "react";
import template from "./Designing.jsx";

class Designing extends React.Component {
  constructor(){
    super();
    this.state={
      'ans':{},
      'decidedvalue':''
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
        [key]:e.target.value
      }
    })
  }

}


export default Designing;
