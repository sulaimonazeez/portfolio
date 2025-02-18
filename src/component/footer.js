import React from 'react';
import planet from '../evrerf.png';
import Slices from "./slice.jsx";\
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
//import second from './about-me.jpg';
function Footer(){
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    
    // Collect the form data in an object
    const formData = {
      fullname,
      email,
      subject,
      message,
    };

    try {
      // Step 3: Send form data to the backend (Assuming your backend is running at '/api/contact')
      const response = await axios.post("https://eshops.pythonanywhere.com/email/", formData);

      // If the response is successful, you can clear the form or show a success message
      alert("Message sent successfully!");
      setFullname("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("There was an error sending the message:", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <div className="container-fluid responsive">
    <div id="project" className="mb-5 mt-5 container-fluid">
          <LazyLoadImage
             alt="Planet"
             src={planet}
             className="planet"
            />
          <h2 className="text-light text-center">Showcase</h2>
          <p className="text-secondary text-center">most recently work</p>
       </div>
       <Slices />
        <div id="contact" className="mt-5">
          <h2 className="myform text-light">Let's Get in touch</h2>
          <div className="myform ">
             <p className="text-light full-de" tyle={{color:'lightgrey'}}>
                Always available for freelancing if the right project comes along, Feel free to contact me.
             </p>
          </div>
        </div>
        <div className="info--end">
          <div className="myform text-light">
              <span><i className="font fa fa-map-marker fs-2" aria-hidden="true"></i><span className="span full-de">154 street kwara, Nigerian</span></span><br/><br/>
              <span><i className="font fa fa-inbox fs-2" aria-hidden="true"></i><span className="span full-de">olaniyisulaimon221@gmail.com</span></span><br/><br/>
              <span><i className="font fa fa-phone fs-2" aria-hidden="true"></i><span className="span full-de">+2348080891605</span></span><br/>
          </div>
        </div>
        <div className="mt-5 form--end">
        <h2 className="myform text-light">Say Something</h2>
            <form className="text-light myform mt-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-12">
          <input
            style={{ color: "lightgrey" }}
            className="bg-dark text-light form-control"
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)} // Bind state to input
          />
          <br />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-12">
          <input
            style={{ color: "lightgrey" }}
            className="bg-dark text-light form-control"
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Bind state to input
          />
          <br />
        </div>
      </div>
      <input
        style={{ color: "lightgrey" }}
        className="bg-dark text-light form-control"
        type="text"
        name="subject"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)} // Bind state to input
      />
      <br />
      <textarea
        style={{ color: "lightgrey" }}
        className="text-light bg-dark placeholder-white form-control"
        placeholder="Type comment"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Bind state to textarea
      ></textarea>
      <br />
      <button type="submit" className="btn btn-light fw-bold btn--end p-2">
        Submit
      </button>
      <br />
      <br />
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
