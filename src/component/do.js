




import React from 'react';
import '../App.css';
class Do extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    //nothing here
  }
  render(){
    return (
      <div className="">
         <div id="do-container" className="container-fluid bg-dark rounded text-light">
            <i id="icon" className={this.props.icon}></i>
            <div className="p-2 content container-fluid">
              <h4 className="text-light">{this.props.title}</h4>
              <p className="text-light">
                 {this.props.content}
              </p>
            </div>
         </div>
      </div>
    );
  }
}
export default Do;