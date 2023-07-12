


import React from 'react';

class Award extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className="container-fluid">
         <div className="bg-dark rounded container-fluid">
            <div className="mt-3 p-1 d-flex">
              <img className="mt-1 award" src={this.props.image} alt="award"/>
              <div className="mt-1 award-text">
                <h6 className="text-light">{this.props.head}</h6>
                <p className="text-secondary">{this.props.word}</p>
              </div>
            </div>
         </div>
      </div>
    );
  }
}
export default Award;