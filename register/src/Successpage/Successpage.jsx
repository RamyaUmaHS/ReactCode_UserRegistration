import "./Successpage.css";
import React from "react";
import Sparrow from './Sparrow.png';

function template() {
  return (
    <div className="successpage">
      <div className="row formStyle">        
      <form id="Successpage" className="" onSubmit={this.handleSubmit}>
        <div className="headerClass">
      <img className="imgStyle" src={Sparrow} alt="Sparrow" height="50px" width=""/>
      <div className="headerclass">Success! <br/> Use your new password to login
      </div>
      </div>
      <div>
        <input type="submit" className="form-group btn btn-primary loginClass" value="GO TO LOG IN" onClick={this.fnNavigations}/>
      </div>
      </form>
    </div>
    </div>
  );
};

export default template;
