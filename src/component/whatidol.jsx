import React, { useEffect } from 'react';
import Do from './do.js';
import "../App.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
const IDo = () =>{
  useEffect(() =>{
    AOS.init();
  })
  return (
    <div className="row container-fluid mt-5">
      <div data-aos="fade-left" className="box col-sm-12 col-lg-6 col-md-6 col-lg-6 col-xl-6">
       <Do title="Full-Stack Developer" content="A full-stack developer may work as a programmer who may develop and update both the client and server side of a program. They may also optimize a program's user interface (UI) to best suit customer needs." icon='icon fa fa-mobile'/><br/>
            </div>
       <div data-aos="fade-right" className="box col-sm-12 col-lg-6 col-md-6 col-lg-6 col-xl-6">
        <Do icon="icon fa fa-desktop" title="Database development" content="Full-stack developers may help create servers and databases to support the back-end of the software. You may be part of the team that ensures the database's maintenance, security and scalability"/><br/>
              </div>
      <div data-aos="fade-up" className="box col-sm-12 col-lg-6 col-md-6 col-lg-6 col-xl-6">
        <Do icon='icon fa fa-check-circle' title="Graphic design" content="A full-stack developer may work with graphic designers to develop test application features and appearance. You may also use various models and textures to get various design effects for your platform."/>
               </div>
    </div>
  )
}

export default IDo;