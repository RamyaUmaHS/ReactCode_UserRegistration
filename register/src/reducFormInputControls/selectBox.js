import React from 'react';

class SelectBoxCom extends React.Component{
    fnGetData(e){
        debugger;

        // this.props.f(e.target.id,e.target.value);
    }
          render(){
                 return <select id={this.props.id}  onChange={this.fnGetData.bind(this)}>
                            {
                                this.props.d.map((v)=>{
                                    return <option value={this.props.value}>{v}</option>
                                })
                            }
                        </select>
          }
    }

export default SelectBoxCom;

