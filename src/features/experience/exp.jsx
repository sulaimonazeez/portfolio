import React from 'react';
import '../../App.css';
const Exp = ({job, des, date, part, company, content}) =>{
    return (
      <div className="container-fluid">
         <div className="bg-dark rounded container-fluid row">
            <div className="p-2 col-sm-12 col-md-6 col-lg-6 col-xl-6">
               <h5 className="text-light">{job}</h5>
               <p className="full-de" style={{color:'lightgrey'}}>{des}</p>
               <p className="full-de" style={{color:'lightgrey'}}>{date}</p>
               <span className="bt text-light p-2 rounded" style={{backgroundColor:'orange'}}>{part}</span>
            </div>
            <div className="p-2 col-sm-12 col-md-6 col-lg-6 col-xl-6">
               <h5 className="mt-2 text-light">{company}</h5>
               <p className="full-de" style={{color:'lightgrey'}}>{content}</p>
            </div>
         </div>
      </div>
    )
}
export default Exp;