import "./Designing.css";
import React from "react";

function template() {
  return (
    <div className="designing">
          {/* Options for Designing */}
          <div className="row">
          <label className="col-md-4">Please select Option related to Designing</label>
          <select className="form-group col-md-2 hghtwidth" id="Q1SBDES" name="desgn" onChange={this.fnchange.bind(this, "SBDES")}>
            <option>Select</option>
            <option id="Q1SBDESa" name="ui_ux" value="UI_UX">UI UX Designing</option>
            <option id="Q1SBDESb" name="gd" value="Graphic_Designing">Graphic Designing</option>
          </select>

        </div>
            {/* Options for Designing - UI/UX Designing*/}

            {this.state.ans.SBDES && this.state.ans.SBDES==='UI_UX' &&
           <div className="row">
          <label className="col-md-4">Please select Option related to UI/UX</label>
          <select className="form-group col-md-2 hghtwidth" id="Q2UIUX" name="ui_ux_ops" onChange={this.fnchange.bind(this, "SBDES_UIUX")}>
            <option>Select</option>
            <option id="Q2UIUXa" name="mobappdesgn" value="Mobile_App_Designing">Mobile App Designing</option>
            <option id="Q2UIUXb" name="webdesgn" value="Web_Designing">Web Designing</option>
          </select>

        </div>
        }
            {/* Options for Designing - Graphic Designing */}
            {this.state.ans.SBDES && this.state.ans.SBDES==='Graphic_Designing' &&
            <div className="row">
          <label className="col-md-4">Please select Option related to Graphic Designing</label>
          <select className="form-group col-md-2 hghtwidth" id="Q3GD" name="grapdesgn" onChange={this.fnchange.bind(this, "SBDES_GD")}>
            <option>Select</option>
            <option id="Q3GDa" name="illus" value="illustrations">Illustrations</option>
            <option id="Q3GDb" name="bann" value="banners">Banners</option>
            <option id="Q3GDc" name="postrs" value="posters">Posters</option>
            <option id="Q3GDd" name="pic" value="logo">logo</option>
            <option id="Q3GDe" name="oth" value="othr">Others</option>
          </select>

        </div>        
    }

        {/* <div>
          <label>How early you want to start the project</label>
          <input className="form-group hghtwidth" id="Q4OT" name="projdur"/>
        </div> */}

        </div>
  );
};

export default template;
