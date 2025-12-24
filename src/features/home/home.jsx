import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import resume from "../../component/static/sulaimonazeezs.pdf";
import OpenNav from "../../component/layout/nav.jsx";
import "./home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section id="home" className="home-hero">
      <OpenNav />
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <p data-aos="fade-down" className="hero-intro">
          Hello, my name is
        </p>

        <h1 data-aos="zoom-in" className="hero-name">
          Sulaimon Azeez
        </h1>

        <p data-aos="fade-up" className="hero-role">
          Full-Stack Developer
        </p>

        <p data-aos="fade-up" className="hero-description">
          I design and build modern, scalable web applications and digital
          experiences — blending clean code with beautiful UI to create
          products users love.
        </p>

        <div data-aos="fade-up" className="hero-actions">
          <a href={resume} download className="hero-btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;