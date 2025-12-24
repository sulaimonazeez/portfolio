import React from "react";
import Team1 from '../../assets/team-1.jpg';
import { Carousel } from 'react-responsive-carousel';
import Team2 from '../../assets/team-4.jpg';
import '../../App.css';
class Testimony extends React.Component {
  render(){
    return (
      <div className="">
      <Carousel showThumbs={false}>
       <div className="carousel-content">
       <div className="d-flex bg-dark rounded p-3"><div className="reduce text-start"><img className="team1" src={Team2} alt="Team 1"/></div><div className="text-start l"><p className="full-w text-light full-de">Azeez is honest and communicates clearly. A very warm and joyful dev in the tech world to look out for. I definitely enjoyed working with him on my project. I can't wait to work with her on my next project.</p><h6 className="text-light">Janaiya kiaram</h6><p className="text-light full-de">Visual design</p></div></div>
         </div>
         
        <div className="carousel-content">
        <div className="contents d-flex bg-dark rounded p-3"><div className="reduce text-start"><img className="team1" src={Team1} alt="Team 1"/></div><div className="text-start l"><p className="full-w text-light full-de">Azeez worked together on a full-stack project, 
       He managed and improved the project to what is it now, his frontend skill is topnotch. I have learnt a lot from just working with him, I look forward to keep working with him in the near future.</p><h6 className="text-light">Wasiu O.</h6><p className="text-light full-de">CEO at Wasper Solution</p></div></div>
       </div>
      </Carousel>
    </div>
    );
  }
}
export default Testimony;