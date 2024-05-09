import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>
      <div className='textstructure mt-32 px-20'>
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hideen ">
                {index === 1 && (
                  <motion.div 
                    initial={{ width: 0}} 
                    animate={{ width: "9vw"}} 
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} 
                    className="mr-[1vw] w-[9vw] h-[5vw] -top-[2.5vw] relative bg-red-500"
                  ></motion.div>                  
                )}
                <h1 className="uppercase text-[8vw] leading-[7vw] font-['Founders_Grotesk_X-Condensed'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-10 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
           "From the first pitch to IPO"
        ].map((item,index) => (
        <p className="text-md font-light tracking-tight leading-none">{item}</p>
      ))}
      <div className="start flex items-center gap-5">
        <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full">start the project</div>
        <div className="w-9 h-9 flex items-center justify-center border-[1px] border-zinc-500 rounded-full">
          <span className="rotate-[45deg]">
            <FaArrowUpLong />
          </span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LandingPage