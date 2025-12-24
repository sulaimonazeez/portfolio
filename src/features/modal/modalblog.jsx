import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./ModalHot.css";

const Modals = ({ isClick, imaged, contentTitle, content1, content2 }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-hot animate-scale-up">
        <button className="modal-close-btn" onClick={isClick}>
          ✕
        </button>
        <div className="modal-image-wrapper">
          <LazyLoadImage
            alt="Profile"
            src={imaged}
            effect="blur"
            className="modal-image"
          />
        </div>
        <h2 className="modal-title">{contentTitle}</h2>
        <p className="modal-content">{content1}</p>
        <p className="modal-content">{content2}</p>
      </div>
    </div>
  );
};

export default Modals;