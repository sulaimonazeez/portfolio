import React, {useEffect} from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Education from "./education.jsx";
import planet from '../../assets/evrerf.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Edus = () =>{
  useEffect(() => {
    AOS.init();
  }, []);
  return (
     <section>
        <div className="mt-5 container-fluid">
          <LazyLoadImage
            alt="Planetssssss"
            src={planet}
            className="planet"
          />
          <h2 data-aos="fade-up" className="text-light">Educations</h2>
        </div>
        <div data-aos="fade-up" className="mt-4 container-fluid">
          <Education date={"2024-2025"} cert={"ND in Computer Science"} school={"Kwara State Polytechnic"} />
        </div>
        <div data-aos="fade-up" className="mt-5 container-fluid">
          <Education date={"2020-2021"} cert={"Certificate of complete python"} school={"Udemy"} />
        </div>
        <div data-aos="fade-left" className="mt-5 container-fluid">
          <Education date={"2020-2022"} cert={"Certificate of web development"} school={"Programming Hero"} />
        </div>
    </section>
  )
}

export default Edus;