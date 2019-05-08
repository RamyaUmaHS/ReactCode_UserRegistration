import "./WebDevelopment.css";
import React from "react";
import Projectdetails from '../Projectdetails/Projectdetails';


function template() {
  return (
    <div className="web-development">

          {/* Options for WebDevelopement */}
        <div className="row">
          <label className="col-md-4">Please select Option related to Web Developement</label>
          <select className="form-group col-md-2 hghtwidth" id="Q1SBWD" name="Webdev" onChange={this.fnchange.bind(this, "SBWD")}>
            <option>Select</option>
            <option id="Q1SBWDa" name="statweb" value="Static_Website">Static_Website</option>
            <option id="Q1SBWDb" name="dynamweb" value="Dynamic_Website">Dynamic Website</option>
            <option id="Q1SBWDc" name="webapp" value="Web_Application">Web Application</option>
          </select>
        </div>
      {
        this.state.ans.SBWD && 
        <Projectdetails/>
      }

    </div>
  );
};

export default template;
