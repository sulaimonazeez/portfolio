




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
         <div className="do-container container-fluid bg-dark rounded text-light">
            <i className={this.props.icon}></i>
            <div className="p-2 content container-fluid">
              <h5 className="text-light">{this.props.title}</h5>
              <p className="doing text-light">
                 {this.props.content}
              </p>
            </div>
         </div>
    );
  }
}
export default Do;