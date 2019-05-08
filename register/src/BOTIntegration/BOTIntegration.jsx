import "./BOTIntegration.css";
import React from "react";

function template() {
  return (
    <div className="botintegration">
        {/* Options for BOT Integration */}
        <div className="row">
          <label className="col-md-4">Please select Option related to BOT - Integration</label>
          <select className="form-group col-md-2 hghtwidth" id="Q1BOTint" name="botintegtn" onChange={this.fnchange.bind(this, "SBBOTINT")}>
            <option>Select</option>
            <option id="Q1BOTa" name="menubot" value="menu_based_bot">Menu Based BOT</option>
            <option id="Q1BOTb" name="keyboardbot" value="keyboard_bot">Keyboard BOT</option>
            <option id="Q1BOTc" name="contextbot" value="contexual_bot">Contexual BOT</option>
          </select>

        </div>
        {/* Options for BOT Integration - Menu based or keyboard or contexual have the same questions to be rendered*/}
        {this.state.ans.SBBOTINT==='menu_based_bot' && 
        <div className="row">
          <label className="col-md-4">Please select Option related to BOT Integration on event selected</label>
          <select className="form-group col-md-2 hghtwidth" id="Q2BOTIN" name="BOTES" onChange={this.fnchange.bind(this, "BOTIN_MBB")}>
            <option>Select</option>
            <option id="Q2BOTINa" name="ownbot" value="own_bot">Own BOT</option>
            <option id="Q2BOTINb" name="tpbot" value="3rd_partybot">3RD party BOT</option>
          </select>
        </div>       
        }
        {/* Options for BOT Integration - 3rd party BOT for all options selected at id Q5*/}
        {this.state.ans.SBBOTINT==='menu_based_bot' && this.state.ans.BOTIN_MBB==='3rd_partybot' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to QA - 3rd Party BOT</label>
          <select className="form-group col-md-2 hghtwidth" id="Q3BOT3RD" name="tpbotops" onChange={this.fnchange.bind(this, "BOTIN_3rdP")}>
            <option>Select</option>
            <option id="Q3BOTa" name="powerd3rdparty" value="poweredby_3rdparty">Powered By 3rd Party</option>
            <option id="Q3BOTb" name="whitelbled" value="white_labelled">White Labelled</option>
          </select>
        </div>
        }

{/* //Keyboard Bot */}
{this.state.ans.SBBOTINT==='keyboard_bot' && 
        <div className="row">
          <label className="col-md-4">Please select Option related to BOT Integration on event selected</label>
          <select className="form-group col-md-2 hghtwidth" id="Q4BOTKB" name="BOTKB" onChange={this.fnchange.bind(this, "BOTIN_KB")}>
            <option>Select</option>
            <option id="Q4BOTKBa" name="ownbot" value="own_bot">Own BOT</option>
            <option id="Q4BOTKBb" name="tpbot" value="3rd_partybot">3RD party BOT</option>
          </select>
        </div>       
        }

        {/* Options for BOT Integration - 3rd party BOT for all options selected at id Q5*/}
        {this.state.ans.SBBOTINT==='keyboard_bot' && this.state.ans.BOTIN_KB==='3rd_partybot' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to QA - 3rd Party BOT</label>
          <select className="form-group col-md-2 hghtwidth" id="Q5BOT3RD" name="BOTKB3rd" onChange={this.fnchange.bind(this, "BOTIN_3rdP")}>
            <option>Select</option>
            <option id="Q5PBOTa" name="powerd3rdparty" value="poweredby_3rdparty">Powered By 3rd Party</option>
            <option id="Q5PBOTb" name="whitelbled" value="white_labelled">White Labelled</option>
          </select>
        </div>
        }


{/* //Contexual Bot */}
        {this.state.ans.SBBOTINT==='contexual_bot' && 
        <div className="row">
          <label className="col-md-4">Please select Option related to BOT Integration on event selected</label>
          <select className="form-group col-md-2 hghtwidth" id="Q6BOTCB" name="BOTCB" onChange={this.fnchange.bind(this, "BOTIN_CB")}>
            <option>Select</option>
            <option id="Q6BOTCBa" name="ownbot" value="own_bot">Own BOT</option>
            <option id="Q6BOTCBb" name="tpbot" value="3rd_partybot">3RD party BOT</option>
          </select>
        </div>       
        }
        {/* Options for BOT Integration - 3rd party BOT for all options selected at id Q5*/}
        {this.state.ans.SBBOTINT==='contexual_bot' && this.state.ans.BOTIN_CB==='3rd_partybot' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to QA - 3rd Party BOT</label>
          <select className="form-group col-md-2 hghtwidth" id="Q7BOTCB3RD" name="BOTCB3rdparty" onChange={this.fnchange.bind(this, "BOTIN_3rdP")}>
            <option>Select</option>
            <option id="Q7BOTCBa" name="powerd3rdparty" value="poweredby_3rdparty">Powered By 3rd Party</option>
            <option id="Q3BOTCBb" name="whitelbled" value="white_labelled">White Labelled</option>
          </select>
        </div>
        }

        </div>
  );
};

export default template;
