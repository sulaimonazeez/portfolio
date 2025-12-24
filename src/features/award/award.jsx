import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Award = ({image, head, word}) =>{
    return (
      <div className="container-fluid">
         <div className="bg-dark rounded container-fluid">
            <div className="mt-3 p-1 d-flex">
              <LazyLoadImage
               alt="award"
               src={image}
               className="mt-1 award"
              />
              <div className="mt-1 award-text">
                <h6 className="text-light">{head}</h6>
                <p className="text-secondary">{word}</p>
              </div>
            </div>
         </div>
      </div>
    );
  }
export default Award;