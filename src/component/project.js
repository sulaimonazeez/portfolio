



import React from 'react';

class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className="container-fluid">
         <div className="m-2 row">
            <div className="mt-4 bg-dark rounded col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <img className="img-p w-100" src={this.props.image1} alt='profile' />
                <a className="text-light rounded btn" style={{backgroundColor:'orange'}} href="https://buzzs.vercel.app">Visit</a>
            </div>
            <div className="mt-4 bg-dark rounded p-3 rounded col-sm-12 col-md-6 col-lg-6 col-xl-6">
               <img src={this.props.image2} alt="profile" className='w-100 img-p'/>
               <a style={{backgroundColor:'orange'}} className="text-light rounded btn" href="https://naijabeats.com.ng">Visit</a>
            </div>
         </div>
      </div>
    )
  }
}
export default Project;