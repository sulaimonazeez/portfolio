import React from 'react';
import Project from './project.js';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import first from './static/Screenshot_20230712-130440_1689163517268.png';
import ecomerce from './static/Screenshot_20231018-130921_Chrome.jpg';
import Trade from "../trading.jpg";
import api from './static/api.jpg';
import "../App.css";


const Slices = () =>{
  return (
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
  )
}

export default Slices
