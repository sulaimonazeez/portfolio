import React from 'react';
import '../../App.css';
const Do = ({icon, title, content}) => {
  return (
    <div className="do-container container-fluid bg-dark rounded text-light">
      <i className={icon}></i>
      <div className="p-2 content container-fluid">
        <h5 className="text-light">{title}</h5>
        <p className="doing text-light">{content}</p>
      </div>
    </div>
  );
}
export default Do;