import "./WebHosting.css";
import React from "react";

function template() {
  return (
    <div className="web-hosting">
        {/* Options for SMS Provider */}
        <div className="row">
          <label className="col-md-4">Please select Option related to WebHosting</label>
          <select className="form-group col-md-2 hghtwidth" id="Q1WH" name="webhosting" onChange={this.fnchange.bind(this, "SBWH")}>
            <option>Select</option>
            <option id="Q1WHa" name="sharehost" value="shared_hosting">Shared Hosting</option>
            <option id="Q1WHb" name="vpshost" value="vps_hosting">VPS Hosting</option>
            <option id="Q1WHc" name="dedserverhost" value="dedicated_server_hosting">Dedicated Server Hosting</option>
            <option id="Q1WHd" name="cloudhost" value="cloud_hosting">Cloud Hosting</option>
            <option id="Q1WHe" name="managedhost" value="managed_hosting">Managed Hosting</option>
            <option id="Q1WHf" name="cocolatn" value="colocation">Colocation</option>
          </select>

        </div>
    </div>
  );
};

export default template;
