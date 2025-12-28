import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../../App.css";

const Project = ({ image1, title, content, link1, link2 }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="project-card glassmorphism p-4 mb-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="project-image-wrapper">
        <LazyLoadImage
          alt={title}
          src={image1}
          effect="blur"
          className="project-image rounded"
          style={{ width: isMobile ? "90%" : "60%", margin: "0 auto" }}
        />
      </div>
      <div className="project-content mt-4 text-center">
        <h3 className="project-title text-light">{title}</h3>
        <p className="project-description text-light">{content}</p>
        <div className="project-links d-flex justify-content-center gap-3 mt-3">
          <a
            href={link1}
            className="btn demo-btn glow-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={link2}
            className="btn github-btn glow-btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;