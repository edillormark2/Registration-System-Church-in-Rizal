import React from "react";
import tolt from "../images/tolt.jpg";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8 relative">
      <div className="relative">
        <img
          src={tolt}
          alt="Tolt"
          className="w-full h-64 object-cover rounded-md drop-shadow-lg"
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md" />
        {/* Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-semibold">
          About Us
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-24 mx-4">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold mb-4 dark:text-gray-200">
            Get to know us
          </h1>
          <div className="bg-white dark:bg-secondary-dark-bg rounded-md drop-shadow-lg  p-4 dark:text-gray-200">
            <p>
              Website for church in Rizal, Amen Praise the Lord! Explore our
              fully customized website designed exclusively for Rizal churches.
              From event registrations to announcements, about, contact, home,
              and gallery pages, we've tailored every section to meet the
              specific needs.
            </p>
            <p className="mt-4">
              Website for church in Rizal, Amen Praise the Lord! Explore our
              fully customized website designed exclusively for Rizal churches.
              From event registrations to announcements, about, contact, home,
              and gallery pages, we've tailored every section to meet the
              specific needs.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 p-2 mx-8">
          <img
            src={tolt}
            alt="Tolt"
            className="w-full h-96 object-cover rounded-md drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
