import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import profile from "../../component/static/profiles.png";
import "./experience.css";

const MyProfile = () => {
  return (
    <div className="abouts profile-container">
      {/* 🌌 UNIVERSE ORBIT */}
      <div className="profile-orbit">
        <div className="orbit-ring"></div>

        <LazyLoadImage
          alt="My Profile"
          src={profile}
          effect="blur"
          className="profile-image"
        />

        {/* ☄️ ORBITING ICONS */}
        <div className="orbit-icons">
          <a
            href="https://facebook.com"
            className="icon facebook"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>

          <a
            href="https://github.com/sulaimonazeez"
            className="icon twitter"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>

          <a
            href="https://instagram.com"
            className="icon instagram"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>

          <a
            href="https://linkedin.com"
            className="icon linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>

          <a
            href="https://wa.me/2348080891605"
            className="icon whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>
      </div>

      {/* 🧠 TEXT */}
      <div className="text-center container-fluid mt-4">
        <p className="role-text">Full-Stack Developer</p>
        <h2 className="text-light">Sulaimon Azeez</h2>
      </div>
    </div>
  );
};

export default MyProfile;