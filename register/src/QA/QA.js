import React    from "react";
import template from "./QA.jsx";

class QA extends React.Component {
  constructor(){
    super();
    this.state={
      'ans':{}
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

export default QA;
