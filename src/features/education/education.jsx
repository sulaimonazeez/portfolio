import React from "react";
import "../../App.css";

const Education = ({date, cert, school}) =>{
  return (
    <div className="container-fluid">
      <div>
        <p className="full-de text-light">{date}</p>
        <h5 className="text-light" >{cert}</h5>
        <p className="text-light full-de">{school}</p>
      </div>
    </div>
 )
}
export default Education;