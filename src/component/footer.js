import React from 'react';
import planet from '../evrerf.png';
import first from './Screenshot_20230712-130440_1689163517268.png';
import ecomerce from './Screenshot_20231018-130921_Chrome.jpg';
import Trade from "../trading.jpg";
import { Carousel } from 'react-responsive-carousel';
import api from '../api.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import second from './about-me.jpg';
import Project from './project.js';
function Footer(){
  return (
    <div className="container-fluid">
      <div id="project" className="mb-5 mt-5 container-fluid">
          <img src={planet} alt="planet" className="planet" />
          <h2 className="text-light text-center">Showcase</h2>
          <p className="text-secondary text-center">most recently work</p>
        </div>
        <Carousel showThumbs={false}>
        <div className="carousel-content container-fluid">
            <Project link1="https://sulaimons.pythonanywhere.com" link2="https://github.com/sulaimonazeez/ecomerce" content="This is a ecomerce website built with django, html, css, Javascript & boostrap this web app have alot of functionality like authentication payment integration with stripe api." title="Ecomerce" image1={ecomerce} />
          </div>
          <div className="carousel-content container-fluid">
            <Project link1="https://buzzs.vercel.app" link2="https://github.com/sulaimonazeez/buzz" content="This is music player web app with necessary functionality.This is include filter latest song with the user interactive. I used Reactjs, Roudjango_restframewor & django_restframework" title="Music Cloud Web App" image1={first} />
          </div>
          <div className="carousel-content container-fluid">
            <Project link1="https://ola90.pythonanywhere.com" link2="https://github.com/sulaimonazeez/myapi" title="Django Rest Api" image1={api} content="This is Api is built with django-resrframework, this api built for music cloud render with reactjs"/>
          </div>
           <div className="carousel-content container-fluid">
            <Project link1="https://ola90.pythonanywhere.com" link2="https://github.com/sulaimonazeez/myapi" content="This is a crypto web app built with reactjs. this include the functionality. I used Reactjs, Radux, Boostrap & Router" title="Crypto Currency Web App" image1={Trade} />
          </div>
       </Carousel>
        <div id="contact" className="mt-5 container-fluid">
          <h2 className="myform text-light">Let's Get in touch</h2>
          <div className="myform ">
             <p className="text-light full-de" tyle={{color:'lightgrey'}}>
                Always available for freelancing if the right project comes along, Feel free to contact me.
             </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="myform text-light">
              <span><i className="font fa fa-map-marker fs-2" aria-hidden="true"></i><span className="span full-de">154 street kwara, Nigerian</span></span><br/><br/>
              <span><i className="font fa fa-inbox fs-2" aria-hidden="true"></i><span className="span full-de">olaniyisulaimon221@gmail.com</span></span><br/><br/>
              <span><i className="font fa fa-phone fs-2" aria-hidden="true"></i><span className="span full-de">+2348080891605</span></span><br/>
          </div>
        </div>
        <div className="mt-5 container-fluid">
        <h2 className="myform text-light">Say Something</h2>
           <form className="myform mt-3" method="post" action="/">
             <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-12">
               <input style={{color:'lightgrey'}} className="form-control" type="text" name="fullname" placeholder="fullname"/><br/>
              </div>
               <div className="col-sm-12 col-md-6 col-lg-6 col-xl-12">
               <input style={{color:'lightgrey'}} className="form-control" type="email" name="email" placeholder="Email address"/><br/>
              </div>
             </div>
               <input style={{color:'lightgrey'}} className="form-control" type="text" name="subject" placeholder="Subject"/><br/>
                <textarea style={{color:'lightgrey'}} className="text-light form-control" placeholder="Type comment"></textarea><br/>
               <a className="btn btn-light p-2" href="mailto:olaniyisulaimon221@gmail.com">Submit</a><br/><br/>
           </form>
        </div>
        <div className="full-de bottom text-center">
           <a href="https://www.facebook.com/profile.php?id=100094372373251"><i className="fa fa-facebook"></i></a>
          <a href="https://instagram.com/olaniyi8973?igshid=MzNlNGNkZWQ4Mg=="><i className="fa fa-instagram"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100094372373251"><i className="fa fa-twitter"></i></a>
          <a href="https://WA.me/+2348080891605"><i className="fa fa-whatsapp"></i></a>
          <p className="text-light">©opyright 2023 - sulaimon</p>
       </div>
    </div>
  )
}
export default Footer