import React    from "react";
import template from "./WebHosting.jsx";

class WebHosting extends React.Component {
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

export default WebHosting;
