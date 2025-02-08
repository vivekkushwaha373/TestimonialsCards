import React from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState } from 'react';

const Testimonial = (props) => {
    let reviews = props.reviews;
    let length = reviews.length-1;
    const [len, setlength] = useState(0);

    function leftShiftHandler() {
        if (len > 0)
        {
            setlength((prev) => prev - 1);
        }
        else {
            setlength(length)
        }
        
    }
    function rightShiftHandler() {
        if (len < length) {
            setlength((prev) => prev + 1);
        }
        else {
            setlength(0)
        }
    }
    function surpriseHandler() {
        setlength(Math.floor(Math.random() * (length+1)));
    }
    
    
    return (
        <div className="w-[35vw] md:w-[700px] bg-white flex flex-col justify-center items-center
        mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">  
      <Card review={reviews[len]}></Card>
          
          <div className="flex text-3xl mt-9 gap-3 text-violet-400 font-bold ">
              <button onClick={leftShiftHandler} className=" cursor-pointer hover: text-violet-500">
                  <FiChevronLeft></FiChevronLeft>
              </button>
              <button onClick={rightShiftHandler} className=" cursor-pointer hover: text-violet-500">
                  <FiChevronRight></FiChevronRight>
              </button>
          </div>
          <div className="mt-6">
              <button onClick={surpriseHandler}  className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
                  Suprise Me
              </button>
          </div>
    </div>
  )
}

export default Testimonial
