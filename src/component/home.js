





import React from 'react';
import resume from './resumes.png';
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      dev:'FullStack Developer'
    }
    let list = ["App Developer", "UI/UX Developer", "FullStack Developer"]
    let num = -1;
    setInterval(()=>{
      if (num <= 2){
        let xtra = list.shift()
        list.push(xtra);
        this.setState({dev: list[0]})
      }
    }, 3000)
  }
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <div id="home" className="container-fluid home"><br/><br/><br/><br/><br/><br/><br/><br/>
         <div id="home-section" className="container-fluid">
         <div className="container">
         <p data-aos="fade-right" className="fw-bold">Hello, My name is</p>
         <h1 data-aos="fade-left" className="owner-name">Sulaimon Azeez</h1>
         <p data-aos="fade-up" className="dev"><strong>{this.state.dev}</strong></p>
         <div className="main-content content">
           <div data-aos="fade-up" className="cont">
            <p className="full-des" id="p">I design develop services for customers of all sizes, specializing in creating stylish, modern website, web services and online stores.</p>
            </div>
            </div>
         </div>
         <div data-aos="fade-up" className="container">
            <a className="fw-bold text-dark btn btn-light p-2" href={resume} download="">Download CV</a>
         </div>
         </div>
      </div>
    );
  }
}
export default Home;