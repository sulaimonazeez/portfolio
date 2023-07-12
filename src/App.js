



import Home from './component/home.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import About from './component/about.js';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isClick:false
    }
  }
  render(){
    return (
      <div className="dark">
        <div className="App">
         <Home />
         <div className="container-fluid">
             <button onClick={()=>{
               this.setState({isClick:!this.state.isClick})
             }} className="p-2 btn-nav">{this.state.isClick ? <i className="fa fa-close"></i> : <i className="fa fa-bars"></i>}</button>
             <div id="coner-nav" className={this.state.isClick ? 'showNav' : 'hideNav' }><br/><br/><br/><br/><br/><br/><hr/>
               <a onClick={()=>{
                 this.setState({isClick:false})
               }} style={{color:'orange'}} href="#home"><i className="fa fa-home"></i></a><br/><hr/>
                <a onClick={()=>{
                 this.setState({isClick:false})
               }} href="#about"><i className="fa fa-user"></i></a><br/><hr/>
                 <a onClick={()=>{
                 this.setState({isClick:false})
               }} href="#exp"><i className="fa fa-file"></i></a><br/><hr/>
               <a onClick={()=>{
                 this.setState({isClick:false})
               }} href="#project"><i className="fa fa-briefcase"></i></a><br/><hr/>
               <a onClick={()=>{
                 this.setState({isClick:false})
               }} href="#project"><i className="fa fa-xing"></i></a><br/><br/><hr/>
               <a onClick={()=>{
                 this.setState({isClick:false})
               }} href="#contact"><i className="fa fa-phone"></i></a><br/><hr/>
             </div>
          </div>
          <div className="bonz fixed-top mt-4 d-flex justify-content-between">
             <div className="toper">
                <a href="tel:+2348080891605">+2348080891605</a>
                <a href="mailto:olaniyisulaimon221@gmail.com">olaniyisulaimon221@gmail.com</a>
             </div>
             <div className="ext toper">
               <a className="linker" href="#en">EN</a>
               <a href="#fr">FR</a>
             </div>
            </div>
          <About />
      </div>
      </div>
    );
  }
}

export default App;
