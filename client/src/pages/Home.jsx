import React from "react";
import tolt from "../images/tolt.jpg";
import taguig from "../images/taguig.jpg";
import portrait from "../images/portrait.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import Registration from "./registration/Registration";
import Divider from "@mui/material/Divider";

const Home = () => {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return (
    <div>
      <div className="flex mx-24">
        {/* Text content on the left side */}
        <div className="w-1/2">
          <div className="mt-48">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:text-gray-100 mb-8 font-semibold">
              Website for church in Rizal, Amen Praise the Lord!
            </div>
            <p className="text-md dark:text-gray-100">
              Explore our fully customized website designed exclusively for
              Rizal churches. From event registrations to announcements, about,
              contact, home, and gallery pages, we've tailored every section to
              meet the specific needs of our community.
            </p>
          </div>
        </div>

        {/* Images on the right side */}
        <div className="flex ml-12 gap-4">
          <img
            src={tolt}
            alt="Tolt"
            className="mt-40 mr-4 w-44 h-72 object-cover rounded-md"
          />
          <img
            src={taguig}
            alt="Taguig"
            className="mt-48 mr-4 w-44 h-72 object-cover rounded-md"
          />
          <img
            src={portrait}
            alt="Portrait"
            className="mt-60 mr-4 w-44 h-72 object-cover rounded-md"
          />
        </div>
      </div>
      {/* Stats at the bottom */}
      <div className="w-full lg:w-7/12 bg-white dark:bg-secondary-dark-bg dark:text-gray-200 drop-shadow-xl mt-16 mx-8 sm:mx-0 md:mx-8 lg:mx-20 rounded-xl p-6 gap-14 flex flex-col sm:flex-row items-center">
        {/* First set of stats */}
        <div className="flex items-center mb-4 sm:mb-0">
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
        <div className="flex items-center mb-4 sm:mb-0">
          <SlPeople size={22} className="text-primary mr-4" />
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">100 +</h1>
            <p className="text-md text-current">Serving One's</p>
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
        <div className="flex items-center mb-4 sm:mb-0">
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
        <div className="flex items-center">
          <SlPeople size={22} className="text-primary mr-4" />
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">100 +</h1>
            <p className="text-md text-current">Children's</p>
          </div>
        </div>
      </div>
      <div className="mt-48">
        <Registration />
      </div>
    </div>
  );
};

export default Home;
