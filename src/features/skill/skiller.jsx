import React, { useEffect } from "react";
import Skill from "./skills.jsx";
import "../../App.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
const MySkill = () =>{
  useEffect(() =>{
    AOS.init();
  }, [])
  return (
    <div className="shift-x">
      <div className="mt-5 container-fluid">
             <Skill rate={"85%"} language={"Nodejs"} style={{backgroundColor:"orange", width:"80%"}}/>
          </div>
          <div data-aos="fade-up" className="mt-4 container-fluid">
             <Skill rate={"90%"} language={"ReactJs"} style={{backgroundColor:"orange", width:"90%"}}/>
          </div>
          <div data-aos="fade-left" className="mt-4 container-fluid">
             <Skill rate={"90%"} language={"Django"} style={{backgroundColor:"orange", width:"90%"}}/>
          </div>
          <div data-aos="fade-up" className="mt-4 container-fluid">
             <Skill rate={"70%"} language={"Asp.net"} style={{backgroundColor:"orange", width:"70%"}}/>
          </div>
          <div data-aos="fade-up" className="mt-4 container-fluid">
             <Skill rate={"70%"} language={"React-Native"} style={{backgroundColor:"orange", width:"70%"}}/>
          </div>
          <div className="mt-3 container-fluid">
             <Skill rate={"90%"} language={"Nextjs"} style={{backgroundColor:"orange", width:"90%"}}/>
          </div>
          <div className="mt-3 container-fluid">
             <Skill rate={"87%"} language={"Vue.Js"} style={{backgroundColor:"orange", width:"87%"}}/>
          </div>
    </div>
  )
}

export default MySkill;