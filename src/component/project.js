



import React from 'react';

class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  //this comment is nothing just a notice
  //you can never understand my code except if you are genuine
  //this portfolio is developed by azeez
  render(){
    return (
      <div className="container-fluid">
         <div className="m-2 row">
            <div data-aos="fade-left" className="mt-4 bg-dark rounded col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <img className="img-p w-100" src={this.props.image1} alt='profile' />
                <a className="text-light rounded btn" style={{backgroundColor:'orange'}} href="https://buzzs.vercel.app">Visit</a>
            </div>
            <div data-aos="fade-right" className="mt-4 bg-dark rounded p-3 rounded col-sm-12 col-md-6 col-lg-6 col-xl-6">
               <img src={this.props.image2} alt="profile" className='w-100 img-p'/>
               <a style={{backgroundColor:'orange'}} className="text-light rounded btn" href="https://naijabeats.com.ng">Visit</a>
            </div>
         </div>
      </div>
    )
  }
}
export default Project;