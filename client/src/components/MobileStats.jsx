import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";

const MobileStats = () => {
  return (
    <div className="m-8">
      <div className="flex flex-row gap-2 ">
        <div className="flex bg-white rounded-md drop-shadow-md p-4 w-1/2 items-center sm:mb-0 mx-auto justify-center dark:bg-secondary-dark-bg dark:text-gray-200 transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center">
            <IoLocationOutline size={25} className="text-primary  mx-auto mb-2" />
            <h1 className="text-xl sm:text-3xl font-semibold">12</h1>
            <p className="text-sm sm:text-md text-slate-500 dark:text-gray-200">
              Localities
            </p>
          </div>
        </div>
        <div className="flex bg-white rounded-md drop-shadow-md p-4 w-1/2 items-center sm:mb-0 mx-auto justify-center dark:bg-secondary-dark-bg dark:text-gray-200 transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center">
            <SlPeople size={25} className="text-primary mr-4 mb-2" />
            <h1 className="text-3xl font-semibold">100 +</h1>
            <p className="text-sm sm:text-md text-slate-500 dark:text-gray-200">
              Serving One's
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 mt-2">
        <div className="flex bg-white rounded-md drop-shadow-md p-4 w-1/2 items-center sm:mb-0 mx-auto justify-center dark:bg-secondary-dark-bg dark:text-gray-200 transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center">
            <SlPeople size={25} className="text-primary mr-4 mb-2" />
            <h1 className="text-3xl font-semibold">100 +</h1>
            <p className="text-sm sm:text-md text-slate-500 dark:text-gray-200">
              Young People's
            </p>
          </div>
        </div>
        <div className="flex bg-white rounded-md drop-shadow-md p-4 w-1/2 items-center sm:mb-0 mx-auto justify-center dark:bg-secondary-dark-bg dark:text-gray-200 transform transition-transform hover:scale-105">
          <div className="flex flex-col items-center">
            <SlPeople size={25} className="text-primary mr-4 mb-2" />
            <h1 className="text-3xl font-semibold">100 +</h1>
            <p className="text-sm sm:text-md text-slate-500 dark:text-gray-200">
              Children's
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileStats;
