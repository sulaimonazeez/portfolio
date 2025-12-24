import React, { useState, useEffect } from 'react';
import Project from '../../features/projects/project.jsx';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import first from './static/Screenshot_20230712-130440_1689163517268.png';
//import ecomerce from './static/ecommerce.jpg';
//import Trade from "../trading.jpg";
//import api from './static/api.jpg';
import manage from "../static/management.png";
import "../../App.css";
import modern from "../static/hoobank2.jpg";
import vtu from "../static/vtu.png";
import NoRefund from "../../assets/norefunds.png";
//import ChatIcon from "../../assets/chat.png";
//import ecomerces from './static/ecomerce.png';
//import resume from '../static/generator.png';
//import xentrovex from "../../assets/Screenshot_20251025-162359_1.jpg";
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
          link1="https://paystarng.vercel.app/" 
          link2="https://github.com/sulaimonazeez/paystarng" 
          content="A modern VTU platform that lets users buy airtime and mobile data instantly, featuring automated virtual accounts and secure Paystack payments for one-time or recurring transactions." 
          title="VTU Platform" 
          image1={"https://cdn.dribbble.com/userupload/39810389/file/original-338665626b099d522954de99a3d8af2c.png?format=webp&resize=1000x750&vertical=center"} 
        />
      </div>
      <div className="carousel-content container-fluid">
        <Project 
          link1="https://ecomerces-rouge.vercel.app/" 
          link2="https://github.com/sulaimonazeez/ecomerces" 
          content="Created a fast, user-friendly e-commerce site featuring secure checkout and dynamic product display." 
          title="" 
          image1={"https://cdn.dribbble.com/userupload/9000437/file/original-05ce7878ecc282d0bdbc476f002b6087.png?resize=1200x900&vertical=center"} 
        />
      </div>
      <div className="carousel-content container-fluid">
        <Project 
          link1="https://xentrovest.netlify.app/" 
          link2="https://github.com/sulaimonazeez/xentrovest" 
          content="A cryptocurrency web application developed with ReactJS, leveraging Redux for state management, Bootstrap for responsive design, and React Router for smooth navigation." 
          title="Modern Cryptocurrency App" 
          image1={"https://cdn.dribbble.com/userupload/30126030/file/original-db886942583416b54bf014b3db63f4f4.png?format=webp&resize=1000x750&vertical=center"} 
        />
      </div>
      <div className="carousel-content container-fluid">
        <Project 
          link1="https://pdfgenerators.pythonanywhere.com" 
          link2="https://github.com/sulaimonazeez/pdf_generator" 
          content="A sleek and modern resume generator built with Django and ReportLab, designed to help users create beautifully formatted resumes in just a few clicks. With a clean and responsive UI, users can input their details and instantly generate a high-quality PDF resume with professional styling." 
          title="Resume Builder - PDF Generator" 
          image1={"https://cdn.dribbble.com/userupload/17398686/file/original-1e7b4e06fb7a14c3c80561e5384fd170.jpg?resize=1024x768&vertical=center"} 
        />
      </div>
      
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
          link2="https://github.com/sulaimonazeez/management" 
          content="I Created School Management System with Reactjs where Admin can login and student can track their record see message send by their teacher or admin" 
          title="School Management System" 
          image1={manage} 
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
          image1={"https://cdn.dribbble.com/userupload/37006423/file/original-a49d1d73942481b4a19853333b1e845b.png?resize=1024x768&vertical=center"} 
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
    </Carousel>
  );
};




export default Slices;
