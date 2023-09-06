import React from "react";
import "../App.css";

function Education(props){
  return (
    <div className="container-fluid">
      <div>
        <p className="full-de text-light">{props.date}</p>
        <h5 className="text-light" >{props.cert}</h5>
        <p className="text-light full-de">{props.school}</p>
      </div>
    </div>
 )
}
export default Education;