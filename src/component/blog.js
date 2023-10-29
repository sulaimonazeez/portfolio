import React from "react";
import "../App.css";
class Blog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isShow: false
    }
  }
  showData = () =>{
    this.setState({isShow: !this.state.isShow});
  }
  render(){
    if (this.state.isShow === true) {
        return (
          <div className="fixed-top container-fluid">
            <div className="container-fluid">
              <div className="container bg-light myblog rounded">
               <button onClick={this.showData} className="btn bt-close"><i className="fa fa-close"></i></button>
               <img src={this.props.imaged} alt="profile" className="w-100"/><br/><br/>
               <h2>{this.props.contentTitle}</h2>
               <p className="mt-4">
                 {this.props.content1}
               </p>
               <p>
                 {this.props.content2}
               </p>
              </div>
            </div>
          </div>
        )
    }else{
       return (
         <div className="container-fluid">
          <div className="" onClick = {this.showData}>
            <img src={this.props.images} alt="blog" className="rounded w-100" /><br/>
            <span className="mt-3 text-light full-de">{this.props.date}</span>
            <h5 className="mt-2 text-light">{this.props.title}</h5>
        </div>
      </div>
    );
    }
  }
}
export default Blog;