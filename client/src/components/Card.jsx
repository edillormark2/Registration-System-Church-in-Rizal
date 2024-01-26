import React from "react";
import { MdLocationOn } from "react-icons/md";
import { TbCurrencyPeso } from "react-icons/tb";
import { Link } from "react-router-dom";

const Card = ({ image, location, price, title, buttonLink, status }) => {
  const handleRegisterClick = () => {
    // Scroll to the top of the page when the "Register Now" button is clicked
    window.scrollTo({
      top: 0
    });
  };

  return (
    <div className="relative bg-white rounded-md drop-shadow-xl dark:bg-secondary-dark-bg mb-6 overflow-hidden transform transition-transform hover:scale-105">
      <img
        className="h-52 w-full object-cover rounded-t-lg"
        src={image}
        alt=""
      />
      {status &&
        <div className="absolute top-2 right-2 bg-primary text-white py-1 px-2 rounded-md text-xs opacity-75">
          {status}
        </div>}
      <div className="flex flex-col m-2 dark:text-gray-200">
        <div className="flex justify-between">
          <p className="flex items-center text-sm">
            <MdLocationOn className="mr-1" />
            {location}
          </p>
          <p className="flex items-center text-sm">
            <TbCurrencyPeso className="mr-1" />
            {price}
          </p>
        </div>
        <h1 className="text-md font-semibold mt-2 dark:text-gray-200 mb-4">
          {title}
        </h1>
        <Link to={buttonLink}>
          <div
            className="bg-primary text-white text-center p-2 rounded-md hover:opacity-85 disabled:opacity-80 text-sm sm:text-base cursor-pointer m-2"
            onClick={handleRegisterClick}
          >
            Register Now
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
