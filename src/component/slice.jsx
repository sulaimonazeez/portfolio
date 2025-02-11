import React, { useState, useEffect } from 'react';
import Project from './project.js';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import first from './static/Screenshot_20230712-130440_1689163517268.png';
import ecomerce from './static/ecommerce.jpg';
import Trade from "../trading.jpg";
import api from './static/api.jpg';
import manage from "./static/management.png";
import "../App.css";
import modern from "./static/hoobank2.jpg";
import vtu from "./static/vtu.png";
import NoRefund from "../norefunds.png";
import ChatIcon from "../chat.png";
const Slices = () => {
  const [isMobile, setIsMobile] = useState(false);

  
  // Determine if the device is mobile by checking screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if width is less than or equal to 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial render

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  return (
    <Carousel 
      showThumbs={false} 
      swipeable={!isMobile}   // Disable swipe on mobile
      emulateTouch={true}     // Allow touch without swiping
      autoPlay={true}         // Automatically navigate to the next slide
      interval={5000}         // Interval time in milliseconds (5000ms = 5 seconds)
      infiniteLoop={true}     // Loop back to the first slide after the last one
    >
      <div className="carousel-content container-fluid">
        <Project 
          link1="https://paystar.com.ng" 
          link2="https://github.com/sulaimonazeez/paystar" 
          content="Paystar is a VTU webite where you can purchase e.g Airtime, Mobile Data, Tv Subcription, Utility Bills and so on. Feature: Virtual Account Creation, One Tim Payment using paystack, Email Notification. Tech Stack: Django, django_restframework, JQuery, MySQL Database and Boostrap 🔥" 
          title="Paystar VTU Web App" 
          image1={vtu} 
        />
      </div>

      <div className="carousel-content container-fluid">
        <Project 
          link1="https://management-git-main-sulaimonazeezs-projects.vercel.app" 
          link2="https://github.com/sulaimonazeez/portfolio" 
          content="I Created School Management System with Reactjs where Admin can login and student can track their record see message send by their teacher or admin" 
          title="School Management System" 
          image1={vtu} 
        />
      </div>

      <div className="carousel-content container-fluid">
        <Project 
          link1="https://norefund.vercel.app/dashboard" 
          link2="https://github.com/sulaimonazeez/norefund" 
          content="I Develop and Create Bank UI with Vue.js with full functionality the feature also include sending and recieving payment"
          title="Bank Ui" 
          image1={NoRefund} 
        />
      </div>

      <div className="carousel-content container-fluid">
        <Project 
          link1="https://chatfronted.vercel.app/login" 
          link2="https://github.com/sulaimonazeez/chatbackend" 
          content="I Manage and Develop a Chatting System with Reactjs for my fronted and Python Django for my backend api, I use ajax-based chatting system because free hosting provider like vercel does'nt support websocket."
          title="ChatIt" 
          image1={ChatIcon} 
        />
      </div>
      
      <div className="carousel-content container-fluid">
        <Project 
          link1="https://preeminent-crumble-03769b.netlify.app/" 
          link2="https://github.com/sulaimonazeez/modernweb" 
          content="Hoo Bank Hoo Bank is a Clean Modern UI payment app for a range of Banking Services. its's intuitive interface and comprehensive features makes it an excellent choice for secure and conveninet finance management. Tech Stack: Reactjs, Boostrap 🔥" 
          title="Hoo Bank" 
          image1={modern} 
        />
      </div>
      <div className="carousel-content container-fluid">
        <Project 
          link1="https://sulaimons.pythonanywhere.com" 
          link2="https://github.com/sulaimonazeez/ecomerce" 
          content="This is an ecommerce website built with Django, HTML, CSS, JavaScript & Bootstrap. It has functionalities like authentication and payment integration with Stripe API. Tech Stack: Django, django_restapi and JQuery 🔥" 
          title="Ecommerce" 
          image1={ecomerce} 
        />
      </div>
      <div className="carousel-content container-fluid">
        <Project 
          link1="https://buzzs.vercel.app" 
          link2="https://github.com/sulaimonazeez/buzz" 
          content="This is one of the crazy project i built when i start learning reactjs in 2020 it was a music player where you can download or listening to music. Tech Stack: ReactJs, django_restapi SQL Database and boostrap 😂" 
          title="Music Cloud Web App" 
          image1={first} 
        />
      </div>
      <div className="carousel-content container-fluid">
        <Project 
          link1="https://ola90.pythonanywhere.com" 
          link2="https://github.com/sulaimonazeez/myapi" 
          title="Django Rest API" 
          image1={api} 
          content="This API is built with Django Rest Framework for a music cloud app rendered with ReactJS."
        />
      </div>
      <div className="carousel-content container-fluid">
        <Project 
          link1="https://ola90.pythonanywhere.com" 
          link2="https://github.com/sulaimonazeez/myapi" 
          content="This is a crypto web app built with ReactJS. It includes functionalities using ReactJS, Redux, Bootstrap & Router." 
          title="Crypto Currency Web App" 
          image1={Trade} 
        />
      </div>
    </Carousel>
  );
};




export default Slices;
