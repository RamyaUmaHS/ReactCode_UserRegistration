import "./Userdetails.css";
import React from "react";
import MobileAppDevelopment from '../MobileAppDevelopment/MobileAppDevelopment';
import WebDevelopment from '../WebDevelopment/WebDevelopment';
import Designing from '../Designing/Designing';
import QA from '../QA/QA';
import BOTIntegration from '../BOTIntegration/BOTIntegration';
import PaymentGateway from '../PaymentGateway/PaymentGateway';
import SMSProvider from '../SMSProvider/SMSProvider';
import WebHosting from '../WebHosting/WebHosting';

function template() {
  return (
    <div className="userdetails">
    <div className="text-center HC">
      <div>Hello, Greetings for the day and Welcome to Hiresparrow</div>
      </div>
      <form id="Userform" className="row form-group formstyle" onSubmit={this.handleSubmit}>
      <div className="container-fluid form-group">
        <div className="formalign">
          <div className="row">
          <label className="col-md-4"> Could you please tell us your Name?</label> <input id="n1" name="Name" className="form-group col-md-2" />
          </div>
          <div className="row">
            <label className="col-md-4">Enter your professional email id for communication</label>
            <input className="col-md-2 form-group hghtwidth" id="em" name="Email" />
          </div>
          <div className="row">
            <label className="col-md-4">Please provide your location</label>
            <input className="form-group col-md-2 hghtwidth" id="Loc" name="Location" />
          </div>
          <div className="row">
            <label className=" col-md-4">How can we help you with?</label>
            <select className="form-group col-md-2 hghtwidth" id="SBHelp" name="Tasktype" onChange={this.fnchange.bind(this, "SBHelp")}>
              <option>Select</option>
              <option id="MAD" name="mobapp" value="Mobile_App_Development">Mobile App Development</option>
              <option id="WD" name="webapp" value="Web_Development">Web Development</option>
              <option id="DE" name="design" value="Designing">Designing</option>
              <option id="QA" name="quaas" value="Quality_Assurance">Quality Assurance</option>
              <option id="BOT" name="botint" value="BOT_integration">BOT integration</option>
              <option id="PG" name="paygate" value="Payment_Gateway">Payment Gateway</option>
              <option id="SPI" name="smsprovint" value="SMS_provider_integration">SMS provider integration</option>
              <option id="WH" name="webhost" value="WEB_Hosting">WEB Hosting</option>
            </select>
          </div>

{/* //Conditional rendering starts from the below components */}
          {
            this.state.ans.SBHelp && this.state.ans.SBHelp === 'Mobile_App_Development' &&
           <MobileAppDevelopment/>
          }

        {
            this.state.ans.SBHelp && this.state.ans.SBHelp === 'Web_Development' &&
          <WebDevelopment/>
        }

        {
            this.state.ans.SBHelp && this.state.ans.SBHelp === 'Designing' &&
          <Designing/>
        }

        {
            this.state.ans.SBHelp && this.state.ans.SBHelp === 'Quality_Assurance' &&
          <QA/>
        }

        {
            this.state.ans.SBHelp && this.state.ans.SBHelp === 'BOT_integration' &&
          <BOTIntegration/>
        }

        {
            this.state.ans.SBHelp && this.state.ans.SBHelp === 'Payment_Gateway' &&
          <PaymentGateway/>
        }

        {
            this.state.ans.SBHelp && this.state.ans.SBHelp === 'SMS_provider_integration' &&
          <SMSProvider/>
        }

        {
            this.state.ans.SBHelp && this.state.ans.SBHelp === 'WEB_Hosting' &&
          <WebHosting/> 
        }

        <div className="row text-center btnstyle">
            <div className="col-md-10">
            <input type="submit" className="col-md-2" value="Submit" />
          </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default template;

