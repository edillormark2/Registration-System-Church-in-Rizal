import React from "react";
import about from "../images/about.png";
import aboutsimple from "../images/about-simple.png";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const AboutComponent = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="max-w-9xl mx-4 md:mx-20 lg:mx-8 xl:mx-20 ">
      <div className="mb-4 dark:text-gray-200 text-center">
        <h1 className="text-4xl font-semibold md:mt-16">Get to know us</h1>
        <div className="flex justify-center m-2">
          <div className="bg-gray-300 h-px w-80" />
        </div>
        <p className="text-slate-700 dark:text-gray-200 font-semibold mb-0 md:mb-16">
          Church in Rizal
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mx-4">
        <div className="w-full lg:w-1/2">
          {currentMode === "Dark"
            ? <img
                src={aboutsimple}
                alt="about"
                className="object-cover h-96 w-11/12"
              />
            : <img
                src={about}
                alt="about"
                className="object-cover h-96 w-11/12"
              />}
        </div>
        <div className="w-full lg:w-1/2 my-0 md:my-16">
          <div className="bg-white dark:bg-secondary-dark-bg rounded-md drop-shadow-lg  p-4 dark:text-gray-200 text-sm xl:text-base ">
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
          <Link to="/about">
            <button className="bg-primary w-36 p-4 text-white rounded-md drop-shadow-lg mt-8 hover:bg-transparent hover:text-primary hover:border border-primary cursor-pointer dark:hover:bg-transparent">
              KNOW MORE!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
