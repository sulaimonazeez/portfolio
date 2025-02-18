import React, { useState, useEffect } from "react";
import Project from "./project.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";

// Import images
import vtu from "./static/vtu.png";
import manage from "./static/management.png";
import ecomerces from "./static/ecomerce.png";
import NoRefund from "../norefunds.png";
import ChatIcon from "../chat.png";
import modern from "./static/hoobank2.jpg";
import api from "./static/api.jpg";
import Trade from "../trading.jpg";
import first from "./static/Screenshot_20230712-130440_1689163517268.png";

const Slices = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  
  const totalImages = 10; // Update this based on the number of images

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to track image loading progress
  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  // Hide loading spinner when all images are loaded
  useEffect(() => {
    if (loadedImages >= totalImages) {
      setLoading(false);
    }
  }, [loadedImages]);

  return (
        <Carousel
          showThumbs={false}
          swipeable={!isMobile}
          emulateTouch={true}
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
        >
          <div className="carousel-content container-fluid">
            <Project
              link1="https://paystar.com.ng"
              link2="https://github.com/sulaimonazeez/paystar"
              content="Paystar is a VTU website for purchasing Airtime, Mobile Data, TV Subscription, and Utility Bills."
              title="Paystar VTU Web App"
              image1={vtu}
              onLoad={handleImageLoad}
            />
          </div>

          <div className="carousel-content container-fluid">
            <Project
              link1="https://management-git-main-sulaimonazeezs-projects.vercel.app"
              link2="https://github.com/sulaimonazeez/management"
              content="A School Management System where Admins can login, and students can track records & messages."
              title="School Management System"
              image1={manage}
              onLoad={handleImageLoad}
            />
          </div>

          <div className="carousel-content container-fluid">
            <Project
              link1="https://eshops.pythonanywhere.com/account/login"
              link2="https://github.com/sulaimonazeez/ecomerce"
              content="An E-Commerce website where users can order different products using Django."
              title="E-Commerce Website"
              image1={ecomerces}
              onLoad={handleImageLoad}
            />
          </div>

          <div className="carousel-content container-fluid">
            <Project
              link1="https://norefund.vercel.app/dashboard"
              link2="https://github.com/sulaimonazeez/norefund"
              content="A Bank UI built with Vue.js, featuring full functionality, including sending & receiving payments."
              title="Bank UI"
              image1={NoRefund}
              onLoad={handleImageLoad}
            />
          </div>

          <div className="carousel-content container-fluid">
            <Project
              link1="https://chatfronted.vercel.app/login"
              link2="https://github.com/sulaimonazeez/chatbackend"
              content="A chat system built with ReactJS and Django using an AJAX-based chat system."
              title="ChatIt"
              image1={ChatIcon}
              onLoad={handleImageLoad}
            />
          </div>

          <div className="carousel-content container-fluid">
            <Project
              link1="https://preeminent-crumble-03769b.netlify.app/"
              link2="https://github.com/sulaimonazeez/modernweb"
              content="Hoo Bank is a clean modern UI payment app with intuitive features for secure finance management."
              title="Hoo Bank"
              image1={modern}
              onLoad={handleImageLoad}
            />
          </div>

          <div className="carousel-content container-fluid">
            <Project
              link1="https://ola90.pythonanywhere.com"
              link2="https://github.com/sulaimonazeez/myapi"
              content="This is a Django Rest API built for a music cloud app."
              title="Django Rest API"
              image1={api}
              onLoad={handleImageLoad}
            />
          </div>

          <div className="carousel-content container-fluid">
            <Project
              link1="https://buzzs.vercel.app"
              link2="https://github.com/sulaimonazeez/buzz"
              content="A music cloud web app for downloading & listening to music, built with ReactJS and Django."
              title="Music Cloud Web App"
              image1={first}
              onLoad={handleImageLoad}
            />
          </div>

          <div className="carousel-content container-fluid">
            <Project
              link1="https://ola90.pythonanywhere.com"
              link2="https://github.com/sulaimonazeez/myapi"
              content="A crypto web app built with ReactJS, Redux, Bootstrap, and Router."
              title="Crypto Currency Web App"
              image1={Trade}
              onLoad={handleImageLoad}
            />
          </div>
        </Carousel>
  );
};

export default Slices;
