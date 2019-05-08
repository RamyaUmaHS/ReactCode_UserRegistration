import React    from "react";
import template from "./MobileAppDevelopment.jsx";

class MobileAppDevelopment extends React.Component {
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

  fnchange=(key, e)=> {
    debugger;
      this.setState({
        'ans':{
          ...this.state.ans,
          [key]:e.target.value
        }
      })
      e.preventDefault();
    }

}


export default MobileAppDevelopment;
