import React, { useEffect, useState } from "react";
import tolt from "../images/tolt.jpg";
import taguig from "../images/taguig.jpg";
import portrait from "../images/portrait.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import Registration from "./registration/Registration";
import Divider from "@mui/material/Divider";
import MobileStats from "../components/MobileStats";
import Contact from "./Contact";
import Gallery from "./Gallery";

const Home = () => {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // State to track if the screen is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Function to update screen width state
  const updateScreenWidth = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col xl:flex-row mx-auto w-5/6 lg:w-11/12 lg:mx-18 2xl:mx-24 xl:max-w-6xl 2xl:max-w-7xl mb-16">
        {/* Text content on the left side */}
        <div className="w-full xl:w-1/2 2xl:w-2/3">
          <div className="mt-6 md:mt-16 lg:mt-16 xl:mt-48">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:text-gray-100 mb-4 sm:mb-4 md:mb-6 font-semibold text-center xl:text-left">
              Website for church in Rizal, Amen Praise the Lord!
            </div>
            <p className="text-md dark:text-gray-100 leading-normal md:leading-loose text-center xl:text-left">
              Explore our fully customized website designed exclusively for
              Rizal churches. From event registrations to announcements, about,
              contact, home, and gallery pages, we've tailored every section to
              meet the specific needs.
            </p>
          </div>
        </div>

        {/* Images on the right side */}
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:mt-28 mt-6 md:mt-0 gap-4 lg:gap-0 md:ml-2 lg:ml-12 xl:ml-36 justify-center">
          <img
            src={tolt}
            alt="Tolt"
            className="w-full md:w-1/3 md:mt-16 lg:mt-16 xl:mt-8 lg:mr-4 lg:w-80 xl:w-48 h-72 object-cover rounded-md border border-primary drop-shadow-2xl transform transition-transform hover:scale-110"
          />
          <img
            src={taguig}
            alt="Taguig"
            className="hidden md:block w-full md:w-1/3 md:mt-16 lg:mt-16 xl:mt-16 lg:mr-4 lg:w-80 xl:w-48 h-72 object-cover rounded-md border border-primary drop-shadow-2xl transform transition-transform hover:scale-110"
          />
          <img
            src={portrait}
            alt="Portrait"
            className="hidden md:block w-full md:w-1/3 md:mt-16 lg:mt-16 xl:mt-24 lg:mr-4 lg:w-80 xl:w-48 h-72 object-cover rounded-md border border-primary drop-shadow-2xl transform transition-transform hover:scale-110"
          />
        </div>
      </div>

      {isMobile
        ? <MobileStats />
        : <div className="w-11/12  md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto 2xl:ml-20 bg-white dark:bg-secondary-dark-bg dark:text-gray-200 drop-shadow-xl rounded-xl p-6 gap-8 md:gap-10 lg:gap-12 xl:gap-16 flex flex-col md:flex-row justify-center">
            {/* First set of stats */}
            <div className="flex items-center sm:mb-0 mx-auto">
              <IoLocationOutline size={22} className="text-primary mr-4" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold">12</h1>
                <p className="text-md text-current">Localities</p>
              </div>
            </div>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                width: 2,
                backgroundColor: isDarkMode ? "#D6DBDF " : "rgba(0, 0, 0, 0.12)"
              }}
            />

            {/* Second set of stats */}
            <div className="flex items-center mb-4 sm:mb-0 mx-auto">
              <SlPeople size={22} className="text-primary mr-4" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold">100 +</h1>
                <p className="text-md  text-current">Serving One's</p>
              </div>
            </div>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                width: 2,
                backgroundColor: isDarkMode ? "#D6DBDF " : "rgba(0, 0, 0, 0.12)"
              }}
            />

            {/* Third set of stats */}
            <div className="flex items-center mb-4 sm:mb-0 mx-auto">
              <SlPeople size={22} className="text-primary mr-4" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold">100 +</h1>
                <p className="text-md text-current">Young People's</p>
              </div>
            </div>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                width: 2,
                backgroundColor: isDarkMode ? "#D6DBDF " : "rgba(0, 0, 0, 0.12)"
              }}
            />

            {/* Fourth set of stats */}
            <div className="flex items-center mx-auto">
              <SlPeople size={22} className="text-primary mr-4" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold">100 +</h1>
                <p className="text-md text-current">Children's</p>
              </div>
            </div>
          </div>}

      <div className="mt-18 md:mt-20 lg:mt-52">
        <Registration />
      </div>
      <div className="mt-12 md:mt-16 lg:mt-16">
        <Gallery />
      </div>
      <div className="mt-12 md:mt-16 lg:mt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
