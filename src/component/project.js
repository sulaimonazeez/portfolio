import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Project = ({image1, title, content,link1, link2}) => {
  return (
    <div className="container-fluid">
    <div className="text-center container-fluid">
     <LazyLoadImage
        alt="Description"
        src={image1}
        className="text-center rounded im"
        style={{width: "13rem"}}
     />
    </div>
      <div className="left-aligned-content">
        <div className="mt-3 container-fluid">
           <h5 className="text-light">{title}</h5>
           <p className="full-de text-light">{content}</p>
        </div>
        <div className="container-fluid d-flex">
           <a style={{backgroundColor:"orange"}} href={link1} className="p-3 text-light btn">Demo </a>
           <a className="git p-3 btn btn-secondary" href={link2}>Github</a>
        </div>
     </div>
      </div>
    )
}

export default Project
