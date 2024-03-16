import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import planet from './evrerf.png';
import Blogs from './blog-1.jpg';
import Blogss from './blog-2.jpg';
import Blogsss from './blog-3.jpg';
import Blogssss from './blog-4.jpg';
import { Helmet } from 'react-helmet';
import Blog from './component/blog.js';
import Home from './component/home.js';
import Footer from './component/footer.js';
import About from './component/about.js';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Store extends Component {
  constructor() {
    super();
    this.state = {
      isClick: false
    };
  }

  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className="dark">
      <Helmet>
        <title>Sulaimon Azeez Portfolio</title>
        <meta name="description" content="Experienced Full-Stack Developer | Crafting Web and Mobile Solutions | Expert in JavaScript, React, Django | Delivering Seamless User Experiences | Let's Transform Your Digital Vision into Reality." />
         <meta name="keywords" content="Full-Stack Developer, Web Developer,Front-End Developer, Back-End Developer, Software Engineer, JavaScript Developer, HTML/CSS Developer, Database Developer, Responsive Web Design, API Integration, Web Application Development, Cross-Platform Development, User Interface (UI) Design, User Experience (UX) Design, Agile Development, Version Control (e.g., Git), Problem-Solving, Application Security, Code Optimization, Testing and Debugging, Frameworks (e.g., React, Angular, Node.js), Programming Languages (e.g., JavaScript, Python), DevOps Practices, Server Management, SEO Optimization, Mobile App Development, Databases (e.g., SQL, NoSQL), Continuous Integration/Continuous Deployment (CI/CD)" />
         <meta name="robots" content="index, follow" />
         <meta property="og:title" content="Sulaimon Azeez Portfolio" />
         <meta property="og:description" content="Experienced Full-Stack Developer | Crafting Web and Mobile Solutions | Expert in JavaScript, React, Node.js | Delivering Seamless User Experiences | Let's Transform Your Digital Vision into Reality." /> 
      </Helmet>
        <div className="App">
          <Home />
          <div className="container-fluid">
            <button
              onClick={() => {
                this.setState({ isClick: !this.state.isClick });
              }}
              className="p-2 btn-nav"
            >
              {this.state.isClick ? (
                <i className="fa fa-close"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
            <div
              id="coner-nav"
              className={this.state.isClick ? 'showNav' : 'hideNav'}
            >
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <hr />
              <a
                onClick={() => {
                  this.setState({ isClick: false });
                }}
                style={{ color: 'orange' }}
                href="#home"
              >
                <i className="fa fa-home"></i>
              </a>
              <br />
              <hr />
              <a
                onClick={() => {
                  this.setState({ isClick: false });
                }}
                href="#about"
              >
                <i className="fa fa-user"></i>
              </a>
              <br />
              <hr />
              <a
                onClick={() => {
                  this.setState({ isClick: false });
                }}
                href="#exp"
              >
                <i className="fa fa-file"></i>
              </a>
              <br />
              <hr />
              <a
                onClick={() => {
                  this.setState({ isClick: false });
                }}
                href="#project"
              >
                <i className="fa fa-briefcase"></i>
              </a>
              <br />
              <hr />
              <a
                onClick={() => {
                  this.setState({ isClick: false });
                }}
                href="#project"
              >
                <i className="fa fa-xing"></i>
              </a>
              <br />
              <br />
              <hr />
              <a
                onClick={() => {
                  this.setState({ isClick: false });
                }}
                href="#contact"
              >
                <i className="fa fa-phone"></i>
              </a>
              <br />
              <hr />
            </div>
          </div>
          <div className="bonz fixed-top mt-4 d-flex justify-content-between">
            <div className="toper">
              <a href="tel:+2348080891605">+2348080891605</a>
              <a href="mailto:olaniyisulaimon221@gmail.com">
                olaniyisulaimon221@gmail.com
              </a>
            </div>
            <div className="ext toper">
              <a className="linker" href="/">EN</a>
              <a href="#home">FR</a>
            </div>
          </div>
          <About />
          <div id="exps" className="mt-3 container-fluid">
            <img src={planet} alt="planet" className="planet" />
            <h2 className="text-light">Blogs</h2>
          </div>
          <div className="bloging">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-lg-6 col-xlg-6 mt-4 container-fluid">
                <Blog
                  contentTitle={
                    'They Now Bade Farewell To The Kind But Unseen People'
                  }
                  content1={
                    'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.'
                  }
                  imaged={Blogs}
                  images={Blogs}
                  date={'20/july, 2023 - by alex'}
                  title={
                    'Five Solid Evidences Attending Design is good for your career Development'
                  }
                  content2={
                    'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.'
                  }
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-6 col-xlg-6 mt-5 container-fluid">
                <Blog
                  contentTitle={
                    'They Now Bade Farewell To The Kind But Unseen People'
                  }
                  content1={
                    'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.'
                  }
                  imaged={Blogss}
                  images={Blogss}
                  date={'20/july, 2023 - by alex'}
                  title={
                    'Five Solid Evidences Attending Design is good for your career Development'
                  }
                  content2={
                    'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.'
                  }
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-6 col-xlg-6 mt-5 container-fluid">
                <Blog
                  contentTitle={
                    'They Now Bade Farewell To The Kind But Unseen People'
                  }
                  content1={
                    'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.'
                  }
                  imaged={Blogsss}
                  images={Blogsss}
                  date={'20/july, 2023 - by alex'}
                  title={
                    'Five Solid Evidences Attending Design is good for your career Development'
                  }
                  content2={
                    'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.'
                  }
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-6 col-xlg-6 mt-5 container-fluid">
                <Blog
                  contentTitle={
                    'They Now Bade Farewell To The Kind But Unseen People'
                  }
                  content1={
                    'Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.'
                  }
                  imaged={Blogssss}
                  images={Blogssss}
                  date={'20/july, 2023 - by alex'}
                  title={
                    'Five Solid Evidences Attending Design is good for your career Development'
                  }
                  content2={
                    'Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.'
                  }
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <span style={{ display: 'none' }}>learn react</span>
      </div>
    );
  }
}

export default Store;
