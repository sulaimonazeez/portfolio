




import React from 'react';
import profile from './FB_IMG_16888956745792951.jpg';
import Award from './award.js'
import A from './a1.png'
import B from './a2.png'
import C from './a3.png';
import Do from './do.js';
import Exp from './exp.js';
import Project from './project.js';
import first from './Screenshot_20230712-130440_1689163517268.png';
import second from './about-me.jpg';

class About extends React.Component {
  constructor(){
    super();
    this.state = {};
    //about
  }
  render() {
    return (
      <div id="about" className="about"><br/>
       <div className="profile-container">
        <img className="profile-image" src={profile} alt="profile" />
        <div className="text-center social d-flex justify-content-center">
          <a className="facebook" href="https://www.facebook.com/profile.php?id=100094372373251"><i className="fa fa-facebook"></i></a>
           <a className="twitter" href="https://www.facebook.com/profile.php?id=100094372373251"><i className="fa fa-twitter"></i></a>
           <a className="instagram" href="https://instagram.com/olaniyi8973?igshid=MzNlNGNkZWQ4Mg=="><i className="fa fa-instagram"></i></a>
           <a className="linked" href="https://www.linkedin.com/in/sulaimon-olaniyi-73226223a?trk=contact-info"><i className="fa fa-linkedin"></i></a>
           <a className="whatsapp" href="https://WA.me/+2348080891605"><i className="fa fa-whatsapp"></i></a>
        </div>
        <div className="text-center container-fluid">
           <p style={{color:'lightgrey'}}>FullStack Developer</p>
           <h1 id="name" className="text-light">Sulaimon Azeez</h1>
        </div>
        <div className="biography container-fluid">
        </div>
       </div>
       <div className="container-fluid"><br/><br/>
           <h1 className="text-light">Biography</h1>
       <div className="mt-3 biography-content">
           <p style={{color:'lightgrey'}}>
             Experienced full-stack developer with three years of experience in the industry. Seeking to leverage high proficiency in SQL, Python, JavaScript and CSS in a full-time career as a full-stack developer.
           </p>
          </div>
          </div>
          <div className="mt-4 container-fluid contact-info">
             <strong className="text-light">Name: </strong><span>     Sulaimon Azeez</span><br/>
            <strong className="text-light">Birthday: </strong><span>     6th July 2001</span><br/>
            <strong className="text-light">Age:</strong><span>    22</span><br/>
            <strong className="text-light">Address: </strong><span>     Lagos Nigeria</span><br/>
            <strong className="text-light">Phone: </strong><span>       +2348080891605</span><br/>
            <strong className="text-light">Freelance: </strong><span>     Available</span>
          </div>
          <div className="container-fluid mt-5">
            <h2 className="text-light">What i do?</h2>
          </div>
          <div className="row container-fluid mt-5">
            <div className="col-sm-12 col-lg-6 col-md-6 col-lg-6 col-xl-6">
             <Do title="UI/UX management" content="A full-stack developer may work as a programmer who may develop and update both the client and server side of a program. They may also optimize a program's user interface (UI) to best suit customer needs." icon='fa fa-mobile'/><br/>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6 col-lg-6 col-xl-6">
              <Do icon="fa fa-desktop" title="Database development" content="Full-stack developers may help create servers and databases to support the back-end of the software. You may be part of the team that ensures the database's maintenance, security and scalability"/><br/>
              </div>
              <div className="col-sm-12 col-lg-6 col-md-6 col-lg-6 col-xl-6">
               <Do icon='fa fa-check-circle' title="Graphic design" content="A full-stack developer may work with graphic designers to develop test application features and appearance. You may also use various models and textures to get various design effects for your platform."/>
               </div>
          </div>
          <div className="mt-5 container-fluid">
            <h2 className="text-light mt-3">Awards</h2>
          </div>
          <div className="mt-4">
             <Award image={A} head="Creative Designer" word="Site of the day"/>
          </div>
          <div className="">
             <Award image={B} head="Yearly Best Performer" word="Site of the day"/>
          </div>
          <div className="">
             <Award image={C} head="Best Learner Award" word="Site of the day"/>
          </div>
          <div id="exp" className="mt-5 container-fluid">
             <h2 className="text-light">Experience</h2>
          </div>
          <div className="mt-4 container-fluid">
            <Exp job="FullStack Developer" part="FullTime" des="Google|remote" date="Feb 2001" company="Google LLC" content="Developed and implemented a new reusable component library, resulting in a 20% reduction in development time and increased consistency across projects.Collaborated with the database team to optimize database queries, resulting in a 30% reduction in query times and improved website performance."/>
          </div>
          <div className="mt-5 container-fluid">
            <Exp job="Visual Designer" part="Part Time" des="Redian IT|remote" date="Feb 2020" company="Redian IT" content="Wrote automated tests for front-end components, resulting in a 50% reduction in bug-related delays and improved overall code quality."/>
          </div>
          <div className="mt-5 container-fluid">
            <Exp job="Junior Developer" part="FullTime" des="IB Themes|remote" date="Feb 2001" company="IB Themes" content="Collaborated with the security team to implement data protection solutions, resulting in a 30% reduction in security vulnerabilities.Optimized website performance by implementing lazy loading and reducing page load times by 40%."/>
          </div>
          <div className="text-light mt-5 container-fluid">
          <h2>Skills</h2>
          <div className="container-fluid bg-dark rounded">
             <ol className="text-light">
               <li>HTML5 </li>
               <li> CSS3 </li>
               <li>Boostrap</li>
               <li>JavaScript</li>
               <li>ReactJs</li>
               <li>jQuery</li>
               <li>Python</li>
               <li>Django</li>
             </ol>
          </div>
        </div>
        <div id="project" className="mt-5 container-fluid">
          <h2 className="text-light">Projects</h2>
        </div>
        <div className="container-fluid">
           <Project image1={first} image2={second}/>
        </div>
        <div id="contact" className="mt-5 container-fluid">
          <h2 className="text-light">Let's Get in touch</h2>
          <div className="">
             <p style={{color:'lightgrey'}}>
                Always available for freelancing if the right project comes along, Feel free to contact me.
             </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="text-light">
              <span><i id="font" class="fa fa-map-marker fs-2" aria-hidden="true"></i><span className="span">154 street kwara, Nigerian</span></span><br/><br/>
              <span><i id="font" class="fa fa-inbox fs-2" aria-hidden="true"></i><span className="span">olaniyisulaimon221@gmail.com</span></span><br/><br/>
              <span><i id="font" class="fa fa-phone fs-2" aria-hidden="true"></i><span className="span">+2348080891605</span></span><br/>
          </div>
        </div>
        <div className="mt-5 container-fluid">
        <h2 className="text-light">Say Something</h2>
           <form className="mt-3" method="post" action="mailto:olaniyisulaimon221@gmail.com">
             <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-12">
               <input style={{color:'lightgrey', backgroundColor:'black'}} className="form-control" type="text" name="fullname" placeholder="fullname"/><br/>
              </div>
               <div className="col-sm-12 col-md-6 col-lg-6 col-xl-12">
               <input style={{color:'lightgrey', backgroundColor:'black'}} className="form-control" type="email" name="email" placeholder="Email address"/><br/>
              </div>
             </div>
               <input style={{color:'lightgrey', backgroundColor:'black'}} className="form-control" type="text" name="subject" placeholder="Subject"/><br/>
                <textarea style={{color:'lightgrey', backgroundColor:'black'}} className="form-control" placeholder="Type comment"></textarea><br/>
               <input type="submit" value="send Message" className="btn btn-light p-2"/><br/><br/>
           </form>
        </div>
        <div className="bottom text-center">
           <a href="https://www.facebook.com/profile.php?id=100094372373251"><i className="fa fa-facebook"></i></a>
          <a href="https://instagram.com/olaniyi8973?igshid=MzNlNGNkZWQ4Mg=="><i className="fa fa-instagram"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100094372373251"><i className="fa fa-twitter"></i></a>
          <a href="https://WA.me/+2348080891605"><i className="fa fa-whatsapp"></i></a>
          <p className="text-light">©opyright 2023 - sulaimon</p>
        </div>
        </div>
     );
  }
}
export default About;