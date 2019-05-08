import "./SMSProvider.css";
import React from "react";

function template() {
  return (
    <div className="smsprovider">
        {/* Options for SMS Provider */}
        <div className="row">
          <label className="col-md-4">Please select Option related to SMS Provider</label>
          <select className="form-group col-md-2 hghtwidth" id="Q1SMS" name="SMSprov" onChange={this.fnchange.bind(this, "SBSMSP")}>
            <option>Select</option>
            <option id="Q1SMSa" name="transsms" value="transactional_sms">Transactional SMS</option>
            <option id="Q1SMSb" name="promosms" value="promotional_sms">Promotional SMS</option>
          </select>

        </div>
        {/* Options for SMS Provider - Transactional sms or promotional sms */}
        {this.state.ans.SBSMSP==='transactional_sms' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to SMS Provider for selected Transactional SMS</label>
          <select className="form-group col-md-2 hghtwidth" id="Q2SMS" name="transopst" onChange={this.fnchange.bind(this, "SBSMSP_ops")}>
            <option>Select</option>
            <option id="Q2TSMSa" name="Tfixpack" value="Tfixed_packages">Fixed Packages</option>
            <option id="Q2TSMSb" name="Tpayperuse" value="Tpay_as_per_usage">Pay as Per Usage</option>
          </select>
        </div>        
        }
 
      {this.state.ans.SBSMSP==='promotional_sms' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to SMS Provider for selected Promotional SMS</label>
          <select className="form-group col-md-2 hghtwidth" id="Q2SMS" name="Ptransopsp" onChange={this.fnchange.bind(this, "SBSMSP_ops")}>
            <option>Select</option>
            <option id="Q3PSMSa" name="Pfixpack" value="Pfixed_packages">Fixed Packages</option>
            <option id="Q3PSMSb" name="Ppayperuse" value="Ppay_as_per_usage">Pay as Per Usage</option>
          </select>
        </div>        
        }
 
      </div>
  );
};

export default template;
