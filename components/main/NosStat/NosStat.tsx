'use client'
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
      <div className='relative w-full h-[100px] flex items-center justify-center p-4'>
        <div className="absolute -top-20 min-h-[100px] border border-primaryCol rounded-lg bg-white my-2 "  data-aos="fade-up" data-aos-delay="400">
          <div className="flex items-center justify-around flex-col md:flex-row text-4xl ">
            {/* <div className="text-center m-8 bg-red-600" data-aos="fade-up" data-aos-delay="400"> */}
            <div className="text-center m-4 bg-red-600">
                <div className="">
                  +<PureIncrement start={0} end={254} duration={10} className="purecounter" />
                </div>
                <div className="">Client <br /> Satisfait</div>
              </div>
            {/* <div className="text-center m-8 bg-blue-600" data-aos="fade-up"> */}
            <div className="text-center m-4 bg-blue-600">
              <div className="">
                +<PureIncrement start={0} end={1004} duration={10} className="purecounter" />
              </div>
              <div className="">Projet <br /> Réaliser</div>
            </div>
            {/* <div className="text-center m-8 bg-green-600" data-aos="fade-up" data-aos-delay="200"> */}
            <div className="text-center m-4 bg-green-600">
              <div className="">
                +<PureIncrement start={0} end={2} duration={10} className="purecounter" />
              </div>
              <div className="">Ans <br /> Expérience</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NosStat;
