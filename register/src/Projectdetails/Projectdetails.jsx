import "./Projectdetails.css";
import React from "react";

function template() {
  return (
    <div className="projectdetails">
    <div>
      <div className="row">
        <label className="col-sm-4">Tell us in detail about your project</label>
        <textarea className="" id="ProjDetails" name="ProjDetailSumm"></textarea>
      </div>
      {!this.state.ans.ProjDetailSumm==='' && 
      <div className="row">
      <label className="col-md-6">How many days can you complete this Project</label>
      <input  className="col-md-2" id="Q2b" name="noOfDays"/>
    </div>
  }  
    </div>
    </div>
  );
};

export default template;
