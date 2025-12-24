import React, { useEffect } from 'react';
import Do from './do.jsx';
import "../../App.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
const IDo = () =>{
  useEffect(() =>{
    AOS.init();
  })
  return (
    <div className="row container-fluid mt-5">
      <div data-aos="fade-left" className="box col-sm-12 col-lg-6 col-md-6 col-lg-6 col-xl-6">
       <Do title="Full-Stack Developer" content="As a full-stack developer, I handle both the front-end and back-end of applications.
I design and build user interfaces with ReactJS or React Native, develop server-side logic using .NET, C#, ASP.NET, Node.js, or Django, manage databases like MongoDB, and deploy applications using Docker." icon='icon fa fa-mobile'/><br/>
            </div>
       <div data-aos="fade-right" className="box col-sm-12 col-lg-6 col-md-6 col-lg-6 col-xl-6">
        <Do icon="icon fa fa-desktop" title="Database development" content="I design, implement, and manage databases that store and organize application data efficiently.
This includes creating data models, schemas, and relationships, writing queries and stored procedures, and ensuring data integrity, security, and performance."/><br/>
              </div>
      <div data-aos="fade-up" className="box col-sm-12 col-lg-6 col-md-6 col-lg-6 col-xl-6">
        <Do icon='icon fa fa-check-circle' title="Graphic design" content="Alongside full-stack development, I also handle graphic design to ensure applications look as good as they function.
I design UI components, illustrations, and graphics, blending aesthetic appeal with usability for web and mobile platforms."/>
               </div>
    </div>
  )
}

export default IDo;