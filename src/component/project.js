



import React from 'react';

class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  //this comment is nothing just a notice
  //you can never understand my code except if you are genuine
  //this portfolio is developed by azeez
  render(){
    return (
      <div className="container-fluid">
        <div className="text-center container-fluid">
           <img style={{width: "60%"}} className="text-center rounded im" src={this.props.image1} alt="profile" />
        </div>
      <div className="left-aligned-content">
        <div className="mt-3 container-fluid">
           <h5 className="text-light">{this.props.title}</h5>
           <p className="full-de text-light">{this.props.content}</p>
        </div>
        <div className="container-fluid d-flex">
           <a style={{backgroundColor:"orange"}} href={this.props.link1} className="p-3 text-light btn">Demo </a>
           <a className="git p-3 btn btn-secondary" href={this.props.link2}>Github</a>
        </div>
     </div>
      </div>
    )
  }
}
export default Project;