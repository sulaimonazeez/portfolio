import React, {useState, useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../../App.css";

const Project = ({image1, title, content,link1, link2}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Determine if the device is mobile by checking screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if width is less than or equal to 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial render

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="container-fluid">
    <div className="parent--slide text-center container-fluid">
     <LazyLoadImage
        alt="Description"
        src={image1}
        className="text-center rounded slide--image"
        style={isMobile ? {width: "90%"} : {width: "50%"}}
     />
    </div>
      <div className="left-aligned-content">
        <div className="mt-3 container-fluid">
           <h5 className="text-light">{title}</h5>
           <p className="full-de text-light">{content}</p>
        </div>
        <div className="container-fluid d-flex">
           <a style={{backgroundColor:"orange"}} href={link1} className="demo p-3 text-light btn">Demo </a>
           <a className="git p-3 btn btn-secondary" href={link2}>Github</a>
        </div>
     </div>
      </div>
    )
}

export default Project
