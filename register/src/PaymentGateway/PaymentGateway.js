import React    from "react";
import template from "./PaymentGateway.jsx";

class PaymentGateway extends React.Component {
  render() {
    return template.call(this);
  }
  fnchange(){
    debugger;
  }
}

export default PaymentGateway;
