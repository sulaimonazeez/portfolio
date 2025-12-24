import React from 'react';
import "../../App.css";
const Skill = ({rate, language, style}) =>{
  return (
    <div className="d-flex container-fluid">
     <div>
        <h1 style={{ fontSize: '20px'}} className="rate fw-bold text-light">{rate}</h1>
     </div>
      <div className="shift w-100">
        <h6 className="text-light">{language}</h6>
      <div className="bg-light rounded progress-bar">
        <div className="progress" style={style}></div>
     </div>
     </div>
    </div>
  );
}
export default Skill;