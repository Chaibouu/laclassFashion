import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PureIncrement } from 'pure_counter';

const NosStat = () => {
    

    useEffect(() => {
      AOS.init({ duration: 3000 });
    }, [])

  return (
    <>
      <div className="h-[200px]">
        <div className="flex items-center justify-around text-4xl pt-8">
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="">
                +<PureIncrement start={0} end={254} duration={10} className="purecounter" />
              </div>
              <div className="">Client <br /> Satisfait</div>
            </div>
          <div className="text-center" data-aos="fade-up">
            <div className="">
              +<PureIncrement start={0} end={1004} duration={10} className="purecounter" />
            </div>
            <div className="">Projet <br /> Réaliser</div>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="">
              +<PureIncrement start={0} end={2} duration={10} className="purecounter" />
            </div>
            <div className="">Ans <br /> Expérience</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NosStat;
