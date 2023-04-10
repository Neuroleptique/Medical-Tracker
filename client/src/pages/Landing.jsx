import React from "react";
import Hero from "../components/Hero";
import Couple from "../assets/images/old-couple.jpg";
import Doctor from "../assets/images/doctor.jpg";

const Landing = () => {
  return (
    <>
      <div>
        <Hero />
        <div className="max-w-4xl mx-auto py-8 px-4 flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2">
            <img
              src={Doctor}
              alt="Doctor holding up a heart"
              className="w-full rounded-md shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4 mt-4">Why Medimate?</h2>
            <p className="text-lg leading-relaxed">
              Track medical appointments, manage medications, record and monitor
              vital signs and symptoms, and securely share health data with
              healthcare providers - all in one place.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto py-8 px-4 flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="mb-8 text-lg leading-relaxed">
              Our comprehensive platform is designed to encourage patients to
              take control of their health and work collaboratively with their
              healthcare providers.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Couple}
              alt="Older couple using tablet"
              className="w-full rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
