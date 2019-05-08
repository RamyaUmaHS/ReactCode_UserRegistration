import "./PaymentGateway.css";
import React from "react";

function template() {
  return (
    <div className="payment-gateway">
        {/* Options for Payment Gateway */}
        <div className="row">
          <label className="col-md-4">Please select Option related to Payment Gateway</label>
          <select className="form-group col-md-2 hghtwidth" id="Q1PG" name="paygate" onChange={this.fnchange.bind(this, "SBPG")}>
            <option>Select</option>
            <option id="Q1PGa" name="pgpaypalpro" value="paypal_payments_pro">PayPal Payments Pro</option>
            <option id="Q1PGb" name="pgstrp" value="stripe">Stripe</option>
            <option id="Q1PGc" name="pgamazpay" value="amazon_payments">Amazon Payments</option>
            <option id="Q1PGd" name="pgpayu" value="payu">PayU</option>
            <option id="Q1PGe" name="pgzohocheck" value="zoho_checkout">Zoho Checkout</option>
            <option id="Q1PGf" name="skril" value="skrill">Skrill</option>
            <option id="Q1PGg" name="ady" value="adyen">Adyen</option>
            <option id="Q1PGh" name="oth" value="other">Other</option>
          </select>

        </div>    </div>
  );
};

export default template;
