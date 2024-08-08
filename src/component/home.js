import React, {useEffect} from 'react';
import resume from './static/resumes.png';
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
  useEffect (() =>{
    AOS.init();
  }, [])
  return (
      <div id="home" className="container-fluid home">
         <div id="home-section" className="container-fluid">
         <div className="container">
         <p data-aos="fade-right" className="fw-bold">Hello, My name is</p>
         <h1 data-aos="fade-left" className="owner-name">Sulaimon Azeez</h1>
         <p data-aos="fade-up" className="dev"><strong>FullStack Developer</strong></p>
         <div className="main-content content">
           <div data-aos="fade-up" className="cont">
            <p className="full-des" id="p">I design develop services for customers of all sizes, specializing in creating stylish, modern website, web services and online stores.</p>
            </div>
            </div>
         </div>
         <div data-aos="fade-up" className="container">
            <a className="fw-bold text-dark btn btn-light p-2" href={resume} download="">Download CV</a>
         </div>
         </div>
      </div>
    );
}

export default Home;
