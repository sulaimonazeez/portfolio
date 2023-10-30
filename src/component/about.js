import Skill from "./skills.js";
import Education from "./education.js";
import Testimony from "./testmony.js";
import React from 'react';
import profile from './FB_IMG_16888956745792951.jpg';
import Award from './award.js';
import A from './a1.png';
import B from './a2.png';
import C from './a3.png';
import Do from './do.js';
import Exp from './exp.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import planet from '../evrerf.png';
class About extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
 componentDidMount() {
   AOS.init();
 }
 //for real account
  render() {
    return (
      <div data-aos="fade-up" id="about" className="about"><br/>
       <div data-aos="fade-up" className="abouts profile-container">
        <img data-aos="fade-up" className="mt-5 box profile-image" src={profile} alt="profile" />
        <div data-aos="fade-up" className="box text-center social d-flex justify-content-center">
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
        <div className="biography container-fluid">
        </div>
       </div>
       <div className="container-fluid"><br/><br/>
          <img src={planet} alt="planet" className="planet" />
           <h1 className="text-light">Biography</h1>
       <div className="box mt-3 biography-content">
           <p className="text-light full-de" style={{color:'lightgrey'}}>
             Experienced full-stack developer with three years of experience in the industry. Seeking to leverage high proficiency in SQL, Python, JavaScript and CSS in a full-time career as a full-stack developer.
           </p>
          </div>
          </div>
          <div className="mt-4 container-fluid contact-info">
            <table>
             <tbody>
               <tr>
                 <td><h6 className="text-light">Name: </h6></td>
                 <td className="cont text-light">Sulaimon Azeez</td>
               </tr>
               <tr>
               <td><h6 className="text-light">Birthday: </h6></td>
                 <td className="cont text-light"> 6th july, 2001</td>
               </tr>
               <tr>
               <td><h6 className="text-light">Age: </h6></td>
                 <td className="cont text-light">22</td>
               </tr>
               <tr>
               <td><h6 className="text-light">Address: </h6></td>
                 <td className="cont text-light">Lagos, Nigeria</td>
               </tr>
               <tr>
               <td><h6 className="text-light">Phone: </h6></td>
                 <td className="cont text-light">+2348080891605</td>
               </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div className="container-fluid mt-5">
             <img src={planet} alt="planet" className="planet" />
            <h2 className="text-light">What i do?</h2>
          </div>
          <div className="row container-fluid mt-5">
            <div data-aos="fade-left" className="box col-sm-12 col-lg-6 col-md-6 col-lg-6 col-xl-6">
             <Do title="Full-Stack Developer" content="A full-stack developer may work as a programmer who may develop and update both the client and server side of a program. They may also optimize a program's user interface (UI) to best suit customer needs." icon='icon fa fa-mobile'/><br/>
            </div>
            <div data-aos="fade-right" className="box col-sm-12 col-lg-6 col-md-6 col-lg-6 col-xl-6">
              <Do icon="icon fa fa-desktop" title="Database development" content="Full-stack developers may help create servers and databases to support the back-end of the software. You may be part of the team that ensures the database's maintenance, security and scalability"/><br/>
              </div>
              <div data-aos="fade-up" className="box col-sm-12 col-lg-6 col-md-6 col-lg-6 col-xl-6">
               <Do icon='icon fa fa-check-circle' title="Graphic design" content="A full-stack developer may work with graphic designers to develop test application features and appearance. You may also use various models and textures to get various design effects for your platform."/>
               </div>
          </div>
          <div className="mt-5 container-fluid">
          <img src={planet} alt="planet" className="planet" />
            <h2 className="text-light">Awards</h2>
          </div>
          <div data-aos="fade-left" className="box mt-4">
             <Award image={A} head="Creative Designer" word="Site of the day"/>
          </div>
          <div data-aos="fade-right" className="box">
             <Award image={B} head="Yearly Best Performer" word="Site of the day"/>
          </div>
          <div data-aos="fade-left" className="box">
             <Award image={C} head="Best Learner Award" word="Site of the day"/>
          </div>
          <div className="mt-5 container-fluid">
          <img src={planet} alt="planet" className="planet" />
            <h2 data-aos="fade-up" className="text-light">Testimonials.</h2>
          </div>
          <div data-aos="fade-left" className="mt-4 container-fluid">
             <Testimony />
          </div>
           <div className="mt-5 container-fluid">
          <img src={planet} alt="planet" className="planet" />
            <h2 data-aos="fade-up" className="text-light">Educations. </h2>
          </div>
          <div data-aos="fade-up" className="mt-4 container-fluid">
            <Education date={"2020-2022"} cert={"HND in Computer Science"} school={"Kwara State Polytechnic"}/>
          </div>
          <div data-aos="fade-up" className="mt-5 container-fluid">
            <Education date={"2020-2021"} cert={"Certificate of complete python"} school={"Udemy"}/>
          </div>
          <div data-aos='fade-left' className="mt-5 container-fluid">
            <Education date={"2020-2022"} cert={"Certificate of web development"} school={"Programming Hero"}/>
          </div>
          <div className="mt-5 container-fluid">
             <Skill rate={"92%"} language={"HTML5"} style={{backgroundColor:"orange", width:"90%"}}/>
          </div>
          <div data-aos="fade-up" className="mt-4 container-fluid">
             <Skill rate={"85%"} language={"ReactJs"} style={{backgroundColor:"orange", width:"85%"}}/>
          </div>
          <div data-aos="fade-left" className="mt-4 container-fluid">
             <Skill rate={"88%"} language={"Python"} style={{backgroundColor:"orange", width:"88%"}}/>
          </div>
          <div data-aos="fade-up" className="mt-4 container-fluid">
             <Skill rate={"80%"} language={"CSS3"} style={{backgroundColor:"orange", width:"80%"}}/>
          </div>
          <div data-aos="fade-up" className="mt-4 container-fluid">
             <Skill rate={"70%"} language={"JQuery"} style={{backgroundColor:"orange", width:"70%"}}/>
          </div>
          <div data-aos="fade-left" className="mt-4 container-fluid">
             <Skill rate={"64%"} language={"Test Driven Development (TDD)"} style={{backgroundColor:"orange", width:"64%"}}/>
          </div>
          <div className="mt-4 container-fluid">
             <Skill rate={"60%"} language={"Jest"} style={{backgroundColor:"orange", width:"60%"}}/>
          </div>
          <div className="mt-3 container-fluid">
             <Skill rate={"90%"} language={"Django"} style={{backgroundColor:"orange", width:"90%"}}/>
          </div>
          <div className="mt-3 container-fluid">
             <Skill rate={"87%"} language={"JavaScript"} style={{backgroundColor:"orange", width:"87%"}}/>
          </div>
          <div id="exp" className="mt-5 container-fluid">
          <img src={planet} alt="planet" className="planet" />
             <h2 className="text-light">Experience</h2>
          </div>
          <div data-aos="fade-up" className="box mt-4 container-fluid">
            <Exp job="FullStack Developer" part="FullTime" des="Google|remote" date="July 2023" company="Google LLC" content="Developed and implemented a new reusable component library, resulting in a 20% reduction in development time and increased consistency across projects.Collaborated with the database team to optimize database queries, resulting in a 30% reduction in query times and improved website performance."/>
          </div>
          <div data-aos="fade-up" className="box mt-5 container-fluid">
            <Exp job="Visual Designer" part="Part Time" des="Redian IT|remote" date="August 2020" company="Redian IT" content="Wrote automated tests for front-end components, resulting in a 50% reduction in bug-related delays and improved overall code quality."/>
          </div>
          <div data-aos="fade-up" className="box mt-5 container-fluid">
            <Exp job="Junior Developer" part="FullTime" des="IB Themes|remote" date="Feb 2019" company="IB Themes" content="Collaborated with the security team to implement data protection solutions, resulting in a 30% reduction in security vulnerabilities.Optimized website performance by implementing lazy loading and reducing page load times by 40%."/>
          </div>
        </div>
     );
  }
}
export default About;