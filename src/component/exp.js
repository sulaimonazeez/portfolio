



import React from 'react';
import '../App.css';
class Exp extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className="container-fluid">
         <div className="bg-dark rounded container-fluid row">
            <div className="p-2 col-sm-12 col-md-6 col-lg-6 col-xl-6">
               <h5 className="text-light">{this.props.job}</h5>
               <p style={{color:'lightgrey'}} className="">{this.props.des}</p>
               <p style={{color:'lightgrey'}}>{this.props.date}</p>
               <span className="bt text-light p-2 rounded" style={{backgroundColor:'orange'}}>{this.props.part}</span>
            </div>
            <div className="p-2 col-sm-12 col-md-6 col-lg-6 col-xl-6">
               <h5 className="mt-2 text-light">{this.props.company}</h5>
               <p style={{color:'lightgrey'}}>{this.props.content}</p>
            </div>
         </div>
      </div>
    )
  }
}
export default Exp;