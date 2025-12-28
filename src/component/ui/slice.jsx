import React, { useState, useEffect } from "react";
import Project from "../../features/projects/project.jsx";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../App.css";
import { motion } from "framer-motion";

import vtu from "../static/vtu.png";
import NoRefund from "../../assets/norefunds.png";
import modern from "../static/hoobank2.jpg";
import manage from "../static/management.png";

const Slices = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Carousel
      showThumbs={false}
      swipeable={!isMobile}
      emulateTouch={true}
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      showStatus={false}
      className="carousel-hot"
    >
      <motion.div className="carousel-content container-fluid">
        <Project
          link1="https://paystarng.vercel.app/"
          link2="https://github.com/sulaimonazeez/paystarng"
          content="A modern VTU platform that lets users buy airtime and mobile data instantly, featuring automated virtual accounts and secure Paystack payments for one-time or recurring transactions."
          title="VTU Platform"
          image1="https://cdn.dribbble.com/userupload/39810389/file/original-338665626b099d522954de99a3d8af2c.png?format=webp&resize=1000x750&vertical=center"
        />
      </motion.div>

      <motion.div className="carousel-content container-fluid">
        <Project
          link1="https://ecomerces-rouge.vercel.app/"
          link2="https://github.com/sulaimonazeez/ecomerces"
          content="Created a fast, user-friendly e-commerce site featuring secure checkout and dynamic product display."
          title="E-commerce Site"
          image1="https://cdn.dribbble.com/userupload/9000437/file/original-05ce7878ecc282d0bdbc476f002b6087.png?resize=1200x900&vertical=center"
        />
      </motion.div>

      <motion.div className="carousel-content container-fluid">
        <Project
          link1="https://xentrovest.netlify.app/"
          link2="https://github.com/sulaimonazeez/xentrovest"
          content="A cryptocurrency web application developed with ReactJS, leveraging Redux for state management, Bootstrap for responsive design, and React Router for smooth navigation."
          title="Modern Cryptocurrency App"
          image1="https://cdn.dribbble.com/userupload/30126030/file/original-db886942583416b54bf014b3db63f4f4.png?format=webp&resize=1000x750&vertical=center"
        />
      </motion.div>

      <motion.div className="carousel-content container-fluid">
        <Project
          link1="https://pdfgenerators.pythonanywhere.com"
          link2="https://github.com/sulaimonazeez/pdf_generator"
          content="A sleek and modern resume generator built with Django and ReportLab, designed to help users create beautifully formatted resumes in just a few clicks."
          title="Resume Builder - PDF Generator"
          image1="https://cdn.dribbble.com/userupload/17398686/file/original-1e7b4e06fb7a14c3c80561e5384fd170.jpg?resize=1024x768&vertical=center"
        />
      </motion.div>

      <motion.div className="carousel-content container-fluid">
        <Project
          link1="https://paystar.com.ng"
          link2="https://github.com/sulaimonazeez/paystar"
          content="Paystar is a VTU webite where you can purchase Airtime, Mobile Data, TV Subscription, Utility Bills and more. Features: Virtual Account Creation, One Time Payment using Paystack, Email Notification."
          title="Paystar VTU Web App"
          image1={vtu}
        />
      </motion.div>

      <motion.div className="carousel-content container-fluid">
        <Project
          link1="https://managements-five.vercel.app/"
          link2="https://github.com/sulaimonazeez/management"
          content="Developed a School Management System using ReactJS, enabling administrators to manage the platform efficiently while allowing students to track academic records."
          title="School Management System"
          image1={"https://cdn.dribbble.com/userupload/4383731/file/original-f272d51184d619ad894b56baf88b99b2.png?format=webp&resize=1000x750&vertical=center"}
        />
      </motion.div>

      <motion.div className="carousel-content container-fluid">
        <Project
          link1="https://norefund.vercel.app/dashboard"
          link2="https://github.com/sulaimonazeez/norefund"
          content="Bank UI with Vue.js fully functional for sending and receiving payments."
          title="Bank UI"
          image1={NoRefund}
        />
      </motion.div>

      <motion.div className="carousel-content container-fluid">
        <Project
          link1="https://chatfronted.vercel.app/login"
          link2="https://github.com/sulaimonazeez/chatbackend"
          content="Managed a Chatting System with ReactJS front-end and Django backend API, using AJAX-based communication for free hosting support."
          title="ChatIt"
          image1="https://cdn.dribbble.com/userupload/37006423/file/original-a49d1d73942481b4a19853333b1e845b.png?resize=1024x768&vertical=center"
        />
      </motion.div>

      <motion.div className="carousel-content container-fluid">
        <Project
          link1="https://preeminent-crumble-03769b.netlify.app/"
          link2="https://github.com/sulaimonazeez/modernweb"
          content="Hoo Bank is a Clean Modern UI payment app with intuitive interface for secure and convenient finance management."
          title="Hoo Bank"
          image1={modern}
        />
      </motion.div>
    </Carousel>
  );
};

export default Slices;