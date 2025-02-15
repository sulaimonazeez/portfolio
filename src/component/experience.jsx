import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from './static/profiles.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../App.css";



const MyProfile = () =>{
  useEffect(()=>{
    AOS.init()
  }, [])
  return (
    <div data-aos="fade-up" className="abouts profile-container">
        <LazyLoadImage
          alt="My Profile"
          src={profile}
          className="mt-5 box profile-image"
          data-aos="fade-up"
        />
        <div className="box text-center social d-flex justify-content-center">
          <a className="facebook" href="https://www.facebook.com/profile.php?id=100094372373251"><i className="fa fa-facebook"></i></a>
           <a className="twitter" href="https://github.com/sulaimonazeez"><i className="fa fa-twitter"></i></a>
           <a className="instagram" href="https://instagram.com/olaniyi8973?igshid=MzNlNGNkZWQ4Mg=="><i className="fa fa-instagram"></i></a>
           <a className="linked" href="https://www.linkedin.com/in/sulaimon-olaniyi-73226223a?trk=contact-info"><i className="fa fa-linkedin"></i></a>
           <a className="whatsapp" href="https://WA.me/+2348080891605"><i className="fa fa-whatsapp"></i></a>
        </div>
        <div className="text-center container-fluid">
           <p style={{color:'lightgrey'}} className="full">FullStack Developer</p>
           <h2 id="name" className="text-light">Sulaimons Azeez</h2>
        </div>
       </div>
  );
}

export default MyProfile
