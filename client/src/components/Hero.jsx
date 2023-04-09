import React from "react";
import { Link } from "react-router-dom";
import DoctorGif from "../assets/icons/doctor.gif";

function Hero() {
  return (
    <div className="bg-gray-200 flex flex-col lg:flex-row items-center justify-center p-4">
      <div className="max-w-4xl text-center lg:text-left px-4 lg:pl-20 lg:pr-12">
        <h1 className="text-4xl font-bold mb-4">
          Take control of your health with Medimate.
        </h1>
        <p className="text-lg mb-8">
          At Medimate, we strive to make your healthcare experience as smooth
          and stress-free as possible. 
        </p>
        <Link
          to="/register"
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </Link>
      </div>
      <div className="m-5 lg:m-0">
        <img
          src={DoctorGif}
          className="max-w-sm mb-4 rounded-full mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
}

export default Hero;
