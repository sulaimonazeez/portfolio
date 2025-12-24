import React from "react"
import "../../App.css";
const GenerateBlog = ({isClick, images, date, title}) => {
  return (
    <div className="container-fluid">
          <div className="" onClick = {isClick}>
            <img src={images} alt="blog" className="rounded w-100" /><br/>
            <span className="mt-3 text-light full-de">{date}</span>
            <h5 className="mt-2 text-light">{title}</h5>
        </div>
      </div>
  )
}

export default GenerateBlog;