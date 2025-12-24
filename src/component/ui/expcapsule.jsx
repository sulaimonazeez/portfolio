import React, {useEffect} from "react";
import Exp from '../../features/experience/exp.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import planet from '../../assets/evrerf.png';

const Ecapsule = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return(
    <section>
      <div id="exp" className="mt-5 container-fluid">
          <LazyLoadImage
            alt="Planetssssss"
            src={planet}
            className="planet"
          />
          <h2 className="text-light">Experience</h2>
        </div>
        <div data-aos="fade-up" className="box mt-4 container-fluid">
          <Exp job="Full-Stack Developer" part="FullTime" des="VTU Web Platform " date="July 2024" company="PAYSTAR" content="Built a scalable VTU web platform for airtime and data purchases, featuring automated virtual account creation, Paystack integration for one-time and recurring payments, and robust, secure transaction handling.
Led full-stack development, delivering a high-performance fintech product with an intuitive user interface." />
        </div>
        <div data-aos="fade-up" className="box mt-5 container-fluid">
          <Exp job="Freelancer" part="Part Time" des="Remote" date="Febuary 2024" company="Wasper Solution" content="Wrote automated tests for front-end components, resulting in a 50% reduction in bug-related delays and improved overall code quality." />
        </div>
        <div data-aos="fade-up" className="box mt-5 container-fluid">
          <Exp job="Junior Developer" part="FullTime" des="FLP|remote" date="Feb 2023" company="FlashPlug" content="Collaborated with the security team to implement data protection solutions, resulting in a 30% reduction in security vulnerabilities. Optimized website performance by implementing lazy loading and reducing page load times by 40%." />
        </div>
    </section>
  )
}

export default Ecapsule;
