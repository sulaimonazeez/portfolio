import React from 'react';
import "../App.css";
function Skill(props) {
  return (
    <div className="d-flex container-fluid">
     <div>
        <h1 className="rate fw-bold text-light">{props.rate}</h1>
     </div>
      <div className="shift w-100">
        <h6 className="text-light">{props.language}</h6>
      <div className="bg-light rounded progress-bar">
        <div className="progress" style={props.style}></div>
     </div>
     </div>
    </div>
  );
}
export default Skill;