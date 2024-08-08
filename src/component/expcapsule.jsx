import React, {useEffect} from "react";
import Exp from './exp.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import planet from '../evrerf.png';

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
          <Exp job="FullStack Developer" part="FullTime" des="Google|remote" date="July 2023" company="Google LLC" content="Developed and implemented a new reusable component library, resulting in a 20% reduction in development time and increased consistency across projects. Collaborated with the database team to optimize database queries, resulting in a 30% reduction in query times and improved website performance." />
        </div>
        <div data-aos="fade-up" className="box mt-5 container-fluid">
          <Exp job="Visual Designer" part="Part Time" des="Redian IT|remote" date="August 2020" company="Redian IT" content="Wrote automated tests for front-end components, resulting in a 50% reduction in bug-related delays and improved overall code quality." />
        </div>
        <div data-aos="fade-up" className="box mt-5 container-fluid">
          <Exp job="Junior Developer" part="FullTime" des="IB Themes|remote" date="Feb 2019" company="IB Themes" content="Collaborated with the security team to implement data protection solutions, resulting in a 30% reduction in security vulnerabilities. Optimized website performance by implementing lazy loading and reducing page load times by 40%." />
        </div>
    </section>
  )
}

export default Ecapsule;