import "./App.css";
import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";
function App() {
  
  return (
    <div className="flex flex-col w-[100vw] min-h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1> 
        <div className="bg-violet-400 sm:w-1/5 w-4/5 mx-auto "></div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>

    </div>
  ); 
}

export default App;
