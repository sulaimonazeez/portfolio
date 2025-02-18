import React, {useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import planet from './evrerf.png';
import Home from './component/home.js';
import Footer from './component/footer.js';
import About from './component/about.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import BlogCaption from "./component/blogcaption.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import OpenNav from "./component/nav.jsx";

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
          <section>
             <About />
          </section>
          <section className="blog--end">
            <div id="exps" className="container-fluid">
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
