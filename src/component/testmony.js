import React from "react";
import Team1 from '../team-1.jpg';
import Team2 from '../team-4.jpg';
import '../App.css';
class Testimony extends React.Component {
  constructor(){
    super();
    this.state = {status: false};
    this.myinterval = setInterval(()=>{
      this.setState({status: !this.state.status});
    }, 3000)
  }
  //some component are style manually
  //you will need alot of patience to figure out the code 
  change = (e) =>{
    clearInterval(this.myinterval)
   let x = e.target.value;
   if (x === "first"){
     this.setState({status:false});
   }else {
     this.setState({status:true});
   }
  }
  render(){
    return (
      <div className="">
        {this.state.status ? <div className="d-flex bg-dark rounded p-3"><div className="reduce"><img className="team1" src={Team2} alt="Team 1"/></div><div className=""><p className="full-w text-light full-de">Azeez is honest and communicates clearly. A very warm and joyful dev in the tech world to look out for. I definitely enjoyed working with him on my project. I can't wait to work with her on my next project.</p><h6 className="text-light">Janaiya kiaram</h6><p className="text-light full-de">Visual design</p></div></div> : <div className="contents d-flex bg-dark rounded p-3"><div className="reduce"><img className="team1" src={Team1} alt="Team 1"/></div><div className=""><p className="full-w text-light full-de">Azeez worked together on a full-stack project, 
       He managed and improved the project to what is it now, his frontend skill is topnotch. I have learnt a lot from just working with him, I look forward to keep working with him in the near future.</p><h6 className="text-light">Nancy Byers</h6><p className="text-light full-de">CEO at ib-themes</p></div></div>}
         <div className="d-flex justify-content-center p-2">
            <input id="radio1" checked={this.state.status === false ? true : false} onChange={this.change} value="first" type="radio" name="radio"/>
            <input id="radio2" checked = {this.state.status === true ? true : false} onChange={this.change} value="seconď" type="radio" name="radio"/>
         </div>
      </div>
   );
  }
}
export default Testimony;