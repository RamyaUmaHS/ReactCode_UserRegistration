import React from 'react';

const reduxFormTextBox = ({ input, name, type,placeholder,meta:{touched,error} }) => {
    return <div className="row form-group">
        <div className="col-sm-4 text-right">
        </div>
        <div className="col-sm-4 compostyle">
            <input {...input}  type={type} name={name} placeholder={placeholder} className="form-group" />
        </div>
       <span className="col-sm-12" style={{fontSize:16, color:'blue'}}>{touched && error}</span>
    </div>

}

export default reduxFormTextBox;

