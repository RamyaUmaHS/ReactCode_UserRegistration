import "./MobileAppDevelopment.css";
import React from "react";

function template() {
  return (
    <div className="mobile-app-development">
      {/* If selects "Mobile App Development" the below questions should be enabled */}
      
        <div className="row">
          <label className="col-md-4">Please select Option related to Mobile App Development?</label>
          <select className="form-group col-md-2" id="SBMADOpts" name="MobileApptype" onChange={this.fnchange.bind(this, "SBMADOpts")}>
            <option>Select</option>
            <option id="Q1MDa" name="Com" value="Communication">Communication</option>
            <option id="Q1MDb" name="game" value="Gaming">Gaming</option>
            <option id="Q1MDc" name="fin" value="Finance">Finance</option>
            <option id="Q1MDd" name="ecom" value="Ecommerce">Ecommerce</option>
            <option id="Q1MDe" name="mag" value="Magazine">Magazine</option>
            <option id="Q1MDf" name="utils" value="Utility">Utility</option>
            <option id="Q1MDg" name="oth" value="Other">Other</option>
          </select>

        </div>
      {/* //Questions for the selected value of Communication - Options starts here*/}
        {this.state.ans.SBMADOpts === 'Communication' &&
          <div className="row">
              <label className="col-md-4">Please select Option related to Mobile App Developement in terms of Communication</label>
              <select className="form-group col-md-2 hghtwidth" id="Q2MD" name="MobileAppComm" onChange={this.fnchange.bind(this, "SBMAD_Comm")}>
                <option>Select</option>
                <option id="Q2MDa" name="SM" value="Social_Media">Social Media</option>
                <option id="Q2MDb" name="MC" value="Message_Chatting">Messaging/Chatting</option>
              </select>
            </div>
        }
      
      {/* //Questions for the selected value of Communication - Options*/}
      {(this.state.ans.SBMAD_Comm === 'Social_Media' || this.state.ans.SBMAD_Comm === 'Message_Chatting') &&
        <div className="row">
          <label className="col-md-4">Please select Option related to Mobile App Developement in terms of Options</label>
          <select className="form-group col-md-2 hghtwidth" id="Q3MD" name="Options" onChange={this.fnchange.bind(this, "SBMAD_Comm_Opts")}>
            <option>Select</option>
            <option id="Q3MDa" name="AD" value="Android">Android</option>
            <option id="Q3MDb" name="IOS" value="IOS">IOS</option>
          </select>
        </div>
      }


      {/* //Questions for the selected value of Gaming */}
      {this.state.ans.SBMADOpts === 'Gaming' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to Mobile App Developement in terms of Gaming</label>
          <select className="form-group col-md-2 hghtwidth" id="Q4MDG" name="MobileAppGaming" onChange={this.fnchange.bind(this, "SBGame")}>
          <option>Select</option>
            <option id="Q4MDa" name="Game2d" value="2D">2D</option>
            <option id="Q4MDb" name="Game3d" value="3D">3D</option>
          </select>
        </div>
      }

      {/* //Questions for the selected value of Gaming - Options for both the values*/}
    {this.state.ans.SBMADOpts === 'Gaming' && (this.state.ans.SBGame === '2D' || this.state.ans.SBGame === '3D') &&
        <div className="row">
          <label className="col-md-4">Please select Option related to Mobile App Developement for Gaming in terms of Gadgets</label>
          <select className="form-group col-md-2 hghtwidth" id="Q6MDF" name="MobileAppGamingGadgets" onChange={this.fnchange.bind(this, "SBMAD_Finan_Opts")}>
            <option>Select</option>
            <option id="Q6MDFa" name="andrd" value="Android">Android</option>
            <option id="Q6MDFb" name="ios" value="IOS">IOS</option>
          </select>
        </div>
      }


      {/* //Questions for the selected value of Finance */}
      {this.state.ans.SBMADOpts === 'Finance' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to Mobile App Developement for Finance in terms of Gadgets</label>
          <select className="form-group col-md-2 hghtwidth" id="Q6MDF" onChange={this.fnchange.bind(this, "SBMAD_Finan_Opts")}>
            <option>Select</option>
            <option id="Q6MDFa" value="Android">Android</option>
            <option id="Q6MDFb" value="IOS">IOS</option>
          </select>
        </div>
      }

      {/* //Questions for the selected value of Ecommerce */}
      {this.state.ans.SBMADOpts === 'Ecommerce' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to Mobile App Developement for Ecommerce</label>
          <select className="form-group col-md-2 hghtwidth" id="Q7MDE" onChange={this.fnchange.bind(this, "SBMAD_Ecomm_Opts")}>
            <option>Select</option>
            <option id="Q7MDEa" value="Food">Food</option>
            <option id="Q7MDEb" value="Grocerries">Grocerries</option>
            <option id="Q7MDEc" value="Rent">Rent</option>
            <option id="Q7MDEd" value="Delivery">Delivery</option>
            <option id="Q7MDEe" value="Others">Others</option>
          </select>
        </div>
      }

      {/* //(this.state.ans.SBMAD_Ecomm_Opts==='Food' || this.state.ans.SBMAD_Ecomm_Opts==='Grocerries' || this.state.ans.SBMAD_Ecomm_Opts==='Rent' || this.state.ans.SBMAD_Ecomm_Opts==='Delivery' || this.state.ans.SBMAD_Ecomm_Opts==='Others' ) && */}
      {(this.state.ans.SBMAD_Ecomm_Opts==='Food' || this.state.ans.SBMAD_Ecomm_Opts==='Grocerries' || this.state.ans.SBMAD_Ecomm_Opts==='Rent' || this.state.ans.SBMAD_Ecomm_Opts==='Delivery' || this.state.ans.SBMAD_Ecomm_Opts==='Others' ) &&
        <div className="row">
          <label className="col-md-4">Please select Option related to Mobile App Developement for Ecommerce in terms of Gadgets</label>
          <select className="form-group col-md-2 hghtwidth" id="Q8MDE" onChange={this.fnchange.bind(this, "SBMAD_Ecomm_Gad_Opts")}>
            <option>Select</option>
            <option id="Q8MDEa" value="Android">Android</option>
            <option id="Q8MDEb" value="IOS">IOS</option>
          </select>
        </div>
      }

      {/* //Questions for the selected value of Magazine */}

      {this.state.ans.SBMADOpts === 'Magazine' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to Mobile App Developement for Magazine in terms of Gadgets</label>
          <select className="form-group col-md-2 hghtwidth" id="Q9MDM" onChange={this.fnchange.bind(this, "SBMAD_Mag_Opts")}>
            <option>Select</option>
            <option id="Q9MDMa" value="Android">Android</option>
            <option id="Q9MDMb" value="IOS">IOS</option>
          </select>
        </div>
      }

      {/* //Questions for the selected value of Utility */}
      {this.state.ans.SBMADOpts === 'Utility' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to Mobile App Developement for Utility in terms of Gadgets</label>
          <select className="form-group col-md-2 hghtwidth" id="Q10MDU" onChange={this.fnchange.bind(this, "SBMAD_Utility_Opts")}>
            <option>Select</option>
            <option id="Q10MDUa" value="Android">Android</option>
            <option id="Q10MDMb" value="IOS">IOS</option>
          </select>
        </div>
      }

      {/* //Questions for the selected value of Other */}
      {this.state.ans.SBMADOpts === 'Other' &&
        <div className="row">
          <label className="col-md-4">Please select Option related to Mobile App Developement on Others</label>
          <select className="form-group col-md-2 hghtwidth" id="Q11MDO" onChange={this.fnchange.bind(this, "SBMAD_Others_Opts")}>
            <option>Select</option>
            <option id="Q11MDOa" value="Android">Android</option>
            <option id="Q11MDOb" value="IOS">IOS</option>
          </select>
        </div>
      }

      {/* {
        this.state.ans.SBMADOpts && 
        <Projectdetails/>
      } */}
        </div>
  );
};

export default template;

