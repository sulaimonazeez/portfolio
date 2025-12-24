import React, { useState } from 'react';
import planet from '../../assets/evrerf.png';
import "./contact.css";
import Slices from "../ui/slice.jsx";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Function to extract CSRF token from cookies
const getCSRFToken = () => {
  const csrfToken = document.cookie
    .split(';')
    .find(cookie => cookie.trim().startsWith('csrftoken=') || cookie.trim().startsWith('csrf_token='));
  return csrfToken ? csrfToken.split('=')[1] : null;
};

function Footer() {
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

    const csrfToken = getCSRFToken(); // Get the CSRF token from cookies

    try {
      // Send form data to the backend
      const response = await fetch("https://eshops.pythonanywhere.com/email/", {
        method: "POST", // Specify the request method
        headers: {
          "Content-Type": "application/json", // Make sure to send JSON data
          "X-CSRFToken": csrfToken, // Include CSRF token in headers
        },
        body: JSON.stringify(formData), // Convert form data to JSON format
      });

      // Handle the response
      if (response.ok) {
        // If the response is successful, clear the form or show a success message
        alert("Message sent successfully!");
        setFullname("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("There was an error sending the message:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container-fluid responsive">
      <div id="project" className="mb-5 mt-5 container-fluid">
        <LazyLoadImage alt="Planet" src={planet} className="planet" />
        <h2 className="text-light text-center">Showcase</h2>
        <p className="text-secondary text-center">most recently work</p>
      </div>
      <Slices />
      <div id="contact" className="mt-5">
        <h2 className="myform text-light">Let's Get in touch</h2>
        <div className="myform">
          <p className="text-light full-de" style={{ color: 'lightgrey' }}>
            Always available for freelancing if the right project comes along, Feel free to contact me.
          </p>
        </div>
      </div>
      <div className="info--end">
        <div className="myform text-light">
          <span><i className="font fa fa-map-marker fs-2" aria-hidden="true"></i><span className="span full-de">154 street kwara, Nigerian</span></span><br /><br />
          <span><i className="font fa fa-inbox fs-2" aria-hidden="true"></i><span className="span full-de">olaniyisulaimon221@gmail.com</span></span><br /><br />
          <span><i className="font fa fa-phone fs-2" aria-hidden="true"></i><span className="span full-de">+2348080891605</span></span><br />
        </div>
      </div>
     <div className="contact-wrapper">
  <h2 className="contact-title">Say Something</h2>

  <form className="contact-form" onSubmit={handleSubmit}>
    <div className="input-group">
      <input
        type="text"
        name="fullname"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        required
      />
      <label>Full Name</label>
    </div>

    <div className="input-group">
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Email Address</label>
    </div>

    <div className="input-group">
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <label>Subject</label>
    </div>

    <div className="input-group textarea-group">
      <textarea
        rows="5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <label>Your Message</label>
    </div>

    <button className="submit-btn" type="submit">
      Send Message 🚀
    </button>
  </form>
</div>
      <div className="full-de bottom text-center">
        <a href="https://www.facebook.com/profile.php?id=100094372373251"><i style={{fontSize:'0.70rem'}} className="fa fa-facebook"></i></a>
        <a href="https://instagram.com/olaniyi8973?igshid=MzNlNGNkZWQ4Mg=="><i style={{fontSize:'0.70rem'}} className="fa fa-instagram"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100094372373251"><i style={{fontSize:'0.70rem'}} className="fa fa-twitter"></i></a>
        <a href="https://WA.me/+2348080891605"><i style={{fontSize:'0.70rem'}} className="fa fa-whatsapp"></i></a>
        <p className="text-light">©opyright 2023 - sulaimon</p>
      </div>
    </div>
  );
}

export default Footer;
