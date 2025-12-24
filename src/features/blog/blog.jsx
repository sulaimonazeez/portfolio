import React, {useState} from "react";
import "../../App.css";
import GenerateBlog from "../../features/projects/showdata.jsx";
import Modals from "../../features/modal/modalblog.jsx";
const Blog = ({images, date, title, imaged, contentTitle, content1, content2}) =>{
  const [trigger, setTriger] = useState(false);
  const showData = () =>{
    setTriger(!trigger);
  }
  if (trigger){
    return (
      <Modals isClick={showData} imaged={imaged} contentTitle={contentTitle} content1={content1} content2={content2} />
    );
  } else {
    return (
      <GenerateBlog isClick={showData} images={images} date={date} title={title}/>
    );
  }
  
}
export default Blog;