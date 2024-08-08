import React, { useEffect } from "react";
import Skill from "./skills.js";
import "../App.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
const MySkill = () =>{
  useEffect(() =>{
    AOS.init();
  }, [])
  return (
    <div>
      <div className="mt-5 container-fluid">
             <Skill rate={"92%"} language={"HTML5"} style={{backgroundColor:"orange", width:"90%"}}/>
          </div>
          <div data-aos="fade-up" className="mt-4 container-fluid">
             <Skill rate={"85%"} language={"ReactJs"} style={{backgroundColor:"orange", width:"85%"}}/>
          </div>
          <div data-aos="fade-left" className="mt-4 container-fluid">
             <Skill rate={"88%"} language={"Python"} style={{backgroundColor:"orange", width:"88%"}}/>
          </div>
          <div data-aos="fade-up" className="mt-4 container-fluid">
             <Skill rate={"80%"} language={"CSS3"} style={{backgroundColor:"orange", width:"80%"}}/>
          </div>
          <div data-aos="fade-up" className="mt-4 container-fluid">
             <Skill rate={"70%"} language={"JQuery"} style={{backgroundColor:"orange", width:"70%"}}/>
          </div>
          <div className="mt-3 container-fluid">
             <Skill rate={"90%"} language={"Django"} style={{backgroundColor:"orange", width:"90%"}}/>
          </div>
          <div className="mt-3 container-fluid">
             <Skill rate={"87%"} language={"JavaScript"} style={{backgroundColor:"orange", width:"87%"}}/>
          </div>
    </div>
  )
}

export default MySkill;