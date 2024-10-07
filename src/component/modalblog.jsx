import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../App.css";

const Modals = ({isClick, imaged, contentTitle, content1, content2}) =>{
  return(
    <div className="fixed-top container-fluid">
     <div className="container-fluid">
        <div className="container bg-light myblog rounded">
          <button onClick={isClick} className="btn bt-close p-4"><i className="fa fa-close"></i></button>
          <LazyLoadImage
            alt="Profile"
            src={imaged}
            className="w-100"/><br /><br />
          <h2>{contentTitle}</h2>
          <p className="mt-4">{content1}</p>
          <p>{content2}</p>
        </div>
      </div>
    </div>
  );
}
export default Modals;