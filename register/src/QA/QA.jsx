import "./QA.css";
import React from "react";

function template() {
  return (
    <div className="qa">
      {/* Options for QA*/}
      <div className="row">
        <label className="col-md-4">Please select Option related to Quality Assurance</label>
        <select className="form-group col-md-2 hghtwidth" id="Q1QA" name="QAops" onChange={this.fnchange.bind(this, "SBQA_Q1")}>
          <option>Select</option>
          <option id="Q1SBQAa" name="mantest" value="manual_testing">Manual Testing</option>
          <option id="Q1SBQAb" name="autotest" value="automation_testing">Automation Testing</option>
        </select>
      </div>

      {/* Options for QA - Manual Testing*/}
    <div>
      {this.state.ans.SBQA_Q1 === 'manual_testing' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to QA - Manual Testing</label>
          <select className="form-group col-md-2 hghtwidth" id="Q2QAMT" name="mantest" onChange={this.fnchange.bind(this, "SBQA_MT")}>
            <option>Select</option>
            <option id="Q2QAMTa" name="adtest" value="adhoc_testing">Adhoc Testing</option>
            <option id="Q2QAMTb" name="endtest" value="endtoend_testing">End to End Testing</option>
          </select>
        </div>
      }

      {/* Options for QA - Manual Testing - Adhoc Testing*/}

      {this.state.ans.SBQA_Q1 === 'manual_testing' && this.state.ans.SBQA_MT === 'adhoc_testing' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to QA - Manual Testing - Adhoc Testing</label>
          <select className="form-group col-md-2 hghtwidth" id="Q3MTO" name="mantestops" onChange={this.fnchange.bind(this, "SBQA_MT_AEOE")}>
            <option>Select</option>
            <option id="Q3MTOa" name="mobs" value="mobile">Mobile</option>
            <option id="Q3MTOb" name="webs" value="web">Web</option>
          </select>
        </div>
      }

      {/* Options for QA - Manual Testing - Adhoc - Mobile*/}

      {this.state.ans.SBQA_Q1 === 'manual_testing' && this.state.ans.SBQA_MT === 'adhoc_testing' && this.state.ans.SBQA_MT_AEOE === 'mobile' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to QA - Manual Testing for Mobile</label>
          <select className="form-group col-md-4 hghtwidth" id="Q4MTM" name="qamob" onChange={this.fnchange.bind(this, "SBQA_MT_Mob")}>
            <option>Select</option>
            <option id="Q4MTMa" name="andr" value="android">Android</option>
            <option id="Q4MTMb" name="ioss" value="ios">IOS</option>
          </select>
        </div>
      }

      {/* Options for QA - Manual Testing - Adhoc Testing - Web*/}
      {this.state.ans.SBQA_Q1 === 'manual_testing' && this.state.ans.SBQA_MT === 'adhoc_testing' && this.state.ans.SBQA_MT_AEOE === 'web' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to QA - Manual Testing for Web</label>
          <select className="form-group col-md-2 hghtwidth" id="Q5MTW" name="mantestweb" onChange={this.fnchange.bind(this, "SBQA_MT_Web")}>
            <option>Select</option>
            <option id="Q5MTWa" name="webapp" value="web_app">Web App</option>
            <option id="Q5MTWb" name="website" value="web_site">Website</option>
          </select>
        </div>
      }

      {/* //Options for End to End Testing */}

      {this.state.ans.SBQA_Q1 === 'manual_testing' && this.state.ans.SBQA_MT === 'endtoend_testing' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to QA - Manual - End to End Testing</label>
          <select className="form-group col-md-2 hghtwidth" id="Q6MTETE" name="mantestopsete" onChange={this.fnchange.bind(this, "SBQA_MT_EOE")}>
            <option>Select</option>
            <option id="Q6MTETEa" name="mobs" value="mobile">Mobile</option>
            <option id="Q6MTETEb" name="webs" value="web">Web</option>
          </select>
        </div>
      }

      {/* Options for QA - Manual Testing - End to End Testing options - Mobile*/}

      {this.state.ans.SBQA_Q1 === 'manual_testing' && this.state.ans.SBQA_MT === 'endtoend_testing' && this.state.ans.SBQA_MT_EOE === 'mobile' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to QA - Manual - End to End Testing for Mobile</label>
          <select className="form-group col-md-2 hghtwidth" id="Q7MTETEM" name="QA_ETE_Mob" onChange={this.fnchange.bind(this, "SBQA_MTEOE_Mob")}>
            <option>Select</option>
            <option id="Q7MTETEMa" name="andr" value="android">Android</option>
            <option id="Q7MTETEMb" name="ioss" value="ios">IOS</option>
          </select>

        </div>
      }

      {/* Options for QA - Manual Testing - Adhoc or end to end have same options - Web*/}
      {this.state.ans.SBQA_Q1 === 'manual_testing' && this.state.ans.SBQA_MT === 'endtoend_testing' && this.state.ans.SBQA_MT_EOE === 'web' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to QA - Manual End to End Testing for Web</label>
          <select className="form-group col-md-2 hghtwidth" id="Q8MTETEW" name="mantestweb" onChange={this.fnchange.bind(this, "SBQA_MTEOE_Web")}>
            <option>Select</option>
            <option id="Q8MTETEWa" name="webapp" value="web_app">Web App</option>
            <option id="Q8MTETEWb" name="website" value="web_site">Website</option>
          </select>

        </div>
      }
</div>
 
 
      {/* Options for QA - Automation Testing */}
<div>
      {this.state.ans.SBQA_Q1==='automation_testing' &&
      <div className="row">
        <label className="col-md-4">Please select Option related to Quality Assurance - Automation Testing </label>
        <select className="form-group col-md-2 hghtwidth" id="Q9AT" name="QA_Autotest" onChange={this.fnchange.bind(this, "SBQA_AT")}>
          <option>Select</option>
          <option id="Q9ATa" name="untest" value="unit_test">Unit Test</option>
          <option id="Q9ATb" name="apitest" value="api_test">API Test</option>
          <option id="Q9ATc" name="guitest" value="Gui_test">GUI Test</option>
        </select>
      </div>
      }
      {/* Options for QA - Automation Testing - Adhoc or end to end have same options*/}
      {this.state.ans.SBQA_Q1==='automation_testing' && (this.state.ans.SBQA_AT==='unit_test' || this.state.ans.SBQA_AT==='api_test' || this.state.ans.SBQA_AT==='Gui_test') &&
      <div className="row">
        <label className="col-md-4">Please select Option related to Quality Assurance - Automation Testing for type of test selected</label>
        <select className="form-group col-md-2 hghtwidth" id="Q10ATT" name="QA_AT_Test" onChange={this.fnchange.bind(this, "SBQA_AT_Ops")}>
          <option>Select</option>
          <option id="Q10ATTa" name="adhocmob" value="mobile_app">Mobile App</option>
          <option id="Q10ATTb" name="adhocweb" value="web_app">Web APP</option>
        </select>
      </div>
      }
      </div>
    </div>
  );
};

export default template;

