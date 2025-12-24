import "../../App.css";
import React, {useState} from "react";

function OpenNav(){
  const [isClick, setClick] = useState(false);
  
  const toggleClick = () =>{
    setClick(!isClick);
  }
  return (
    <div className="container-fluid">
            <button onClick={toggleClick} className="p-2 btn-nav">
              {isClick ? (
                <i className="fa fa-close"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )} </button>
            <div
              id="coner-nav"
              className={isClick ? 'showNav' : 'hideNav'}
            >
              <hr />
              <a onClick={() => {
                  setClick(false);
                 }}
                style={{ color: 'orange' }}
                href="#home"
              >
                <i className="fa fa-home"></i>
              </a>
              <br />
              <hr />
              <a
                onClick={() => {
                  setClick(false);
                }}
                href="#about"
              >
                <i className="fa fa-user"></i>
              </a>
              <br />
              <hr />
              <a
                onClick={() => {
                  setClick(false);
                }}
                href="#exp"
              >
                <i className="fa fa-file"></i>
              </a>
              <br />
              <hr />
              <a
                onClick={() => {
                  setClick(false);
                }}
                href="#project"
              >
                <i className="fa fa-briefcase"></i>
              </a>
              <br />
              <hr />
              <a
                onClick={() => {
                  setClick(false);
                }}
                href="#project"
              >
                <i className="fa fa-xing"></i>
              </a>
              <br />
              <br />
              <hr />
              <a
                onClick={() => {
                  setClick(false);
                }}
                href="#contact"
              >
                <i className="fa fa-phone"></i>
              </a>
              <br />
              <hr />
            </div>
          </div>
  )
}

export default OpenNav;
