import React    from "react";
import template from "./Successpage.jsx";
import Signin from '../Signin/Signin';

class Successpage extends React.Component {
  render() {
    return template.call(this);
  }

  fnNavigations(){
    debugger;
    window.location.href="#/Signin"
  }
}

export default Successpage;
