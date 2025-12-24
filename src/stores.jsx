import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import planet from './assets/evrerf.png';
import Home from './features/home/home.jsx';
import Footer from './component/layout/footer.jsx';
import About from './features/about/about.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import BlogCaption from "./component/ui/blogcaption.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import OpenNav from "./component/nav.jsx";

const Store = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init(); // Initialize animations

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Loading your experience...</p>
        </div>
      ) : (
        <div className="dark">
          <div className="App">
            <section>
              <Home />
            </section>
            <section>
              <About />
            </section>
            <section className="blog--end">
              <div id="exps" className="container-fluid">
                <LazyLoadImage alt="Planet" src={planet} className="planet" />
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
      )}
    </div>
  );
}

export default Store;
