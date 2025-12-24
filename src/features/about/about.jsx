import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Asset Imports
import planet from '../../assets/evrerf.png';

// Component Imports
import Table from "../../component/ui/table.jsx";
import Ecapsule from '../../component/ui/expcapsule.jsx';

// Feature Imports
import MyProfile from "../experience/experience.jsx";
import IDo from "../whatido/whatidol.jsx";
import Edus from "../education/edus.jsx";
import Awarded from "../award/awarded.jsx";
import Testimony from "../testimony/testmony.jsx";
import MySkill from "../skill/skiller.jsx";

// 1. Helper Component to stay DRY (Don't Repeat Yourself)
const AboutSection = ({ title, children, aos = "fade-up" }) => (
  <section className="container-fluid mt-5" data-aos={aos}>
    <LazyLoadImage alt="decoration" src={planet} className="planet" />
    {title && <h2 className="text-light">{title}</h2>}
    {children}
  </section>
);

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="about" className="about" data-aos="fade-up">
      {/* 2. Hero / Profile Section */}
      <MyProfile />

      {/* 3. Biography */}
      <AboutSection title="Biography">
        <div className="box mt-3 biography-content">
          <p className="text-light full-de">
            Experienced full-stack developer with 7+ years in designing, building, and deploying scalable web and mobile applications.
Proficient in .NET, C#, ASP.NET, ReactJS, Node.js, Django, React Native, MongoDB, Docker, and CSS, with a strong focus on clean code, modern architectures, and delivering products users love.
          </p>
        </div>
      </AboutSection>

      <Table />
      <hr className="my-5" />

      {/* 4. Service Section */}
      <AboutSection title="What I do?">
        <IDo />
      </AboutSection>

      <Edus />

      {/* 5. Awards */}
      <AboutSection>
        <Awarded />
      </AboutSection>

      {/* 6. Social Proof & Skills */}
      <AboutSection title="Testimonials" aos="fade-left">
        <Testimony />
      </AboutSection>

      <section className="mt-5">
        <MySkill />
        <Ecapsule />
      </section>
    </div>
  );
};

export default About;
