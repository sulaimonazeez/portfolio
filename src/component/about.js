import MySkill from "./skiller.jsx";
import Testimony from "./testmony.js";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Edus from "./edus.jsx";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import planet from '../evrerf.png';
import Table from "./table.jsx";
import MyProfile from "./experience.jsx";
import IDo from "./whatidol.jsx";
import Awarded from "./awarded.jsx";
import Ecapsule from './expcapsule.jsx'
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up" id="about" className="about">
      <br/>
      <MyProfile />
      <section className="container-fluid">
        <br/><br/>
        <LazyLoadImage
          alt="Planet"
          src={planet}
          className="planet"
        />
        <h2 className="text-light">Biography</h2>
        <div className="box mt-3 biography-content">
          <p className="text-light full-de" style={{ color: 'lightgrey' }}>
            Experienced full-stack developer with three years of experience in the industry. Seeking to leverage high proficiency in SQL, Python, JavaScript, and CSS in a full-time career as a full-stack developer.
          </p>
        </div>
      </section>
      <Table />
      <hr />
      <section className="container-fluid mt-5">
        <LazyLoadImage
          alt="Planets"
          src={planet}
          className="planet"
        />
        <h2 className="text-light">What I do?</h2>
        <IDo />
      </section>
      <Edus />
      <div className="mt-5 container-fluid">
        <LazyLoadImage
          alt="Planetss"
          src={planet}
          className="planet"
        />
        <Awarded />
      <section>
        <div className="mt-5 container-fluid">
          <LazyLoadImage
            alt="Planeted"
            src={planet}
            className="planet"
          />
          <h2 data-aos="fade-up" className="text-light">Testimonials</h2>
        </div>
        <div data-aos="fade-left" className="mt-4 container-fluid">
          <Testimony />
        </div>
    </section>
    
    <section>
        <MySkill />
    </section>
      <Ecapsule />
      </div>
    </div>
  );
};

export default About;