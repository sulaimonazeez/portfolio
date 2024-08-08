import React, {useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import planet from './evrerf.png';
import Home from './component/home.js';
import Footer from './component/footer.js';
import About from './component/about.js';
import OpenNav from "./component/nav.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import BlogCaption from "./component/blogcaption.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Store = () =>{
  //const [isClick, setClick] = useState(false);
  useEffect(() =>{
    AOS.init();
  }, [])
  return (
    <div className="dark">
        <div className="App">
          <section>
            <Home />
          </section>
          <OpenNav />
          <div className="bonz fixed-top mt-4 d-flex justify-content-between">
            <div className="toper">
              <a id="hideLink" href="tel:+2348080891605">+2348080891605</a>
              <a id="hideLink" href="mailto:olaniyisulaimon221@gmail.com">
                olaniyisulaimon221@gmail.com
              </a>
            </div>
            <div className="ext toper">
              <button className="linker">EN</button>
              <button>FR</button>
            </div>
          </div>
          <section>
             <About />
          </section>
          <section>
            <div id="exps" className="mt-3 container-fluid">
              <LazyLoadImage
               alt="Planet"
               src={planet}
               className="planet"
              />
              <h2 className="text-light">Blogs</h2>
           </div>
           <BlogCaption />
          </section>
          <section>
            <Footer />
          </section>
        </div>
        <span style={{ display: 'none' }}>learn react</span>
      </div>
  );
}

export default Store;
