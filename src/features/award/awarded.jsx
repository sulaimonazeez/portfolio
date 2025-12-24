import React, { useEffect } from "react";
import Award from '../award//award.jsx';
import A from '../../component/static/a1.png';
import B from '../../component/static/a2.png';
import C from '../../component/static/a3.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Awarded = () =>{
  useEffect(() =>{
    AOS.init()
  }, [])
  return (
    <div>
     <div>
      <h2 className="text-light">Awards</h2>
     </div>
    <div data-aos="fade-left" className="box mt-4">
        <Award image={A} head="Creative Designer" word="Site of the day"/>
      </div>
    <div data-aos="fade-right" className="box">
      <Award image={B} head="Yearly Best Performer" word="Site of the day"/>
      </div>
      <div data-aos="fade-left" className="box">
          <Award image={C} head="Best Learner Award" word="Site of the day"/>
      </div>
    </div>
  );
}

export default Awarded;