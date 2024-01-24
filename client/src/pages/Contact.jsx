import React from "react";
import contact from "../images/contact.png";
import contact1 from "../images/contact-simple.png";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { useStateContext } from "../context/ContextProvider";

const Contact = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row  gap-20 md:gap-24 lg:gap-32 xl:gap-48 max-w-7xl mx-8 lg:mx-16 my-8 p-2 md:p-4">
        {/* Left side of the screen */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl dark:text-gray-200 font-semibold text-primary">
            Get in touch
          </h1>
          <p className="dark:text-gray-200 py-2 mb-8">
            We are here for you! How can we help?
          </p>
          <h1 className="mb-2 dark:text-gray-200">Name</h1>
          <div className="">
            <input
              type="text"
              id="name"
              className="form-control-1 w-full bg-slate-100 p-3 rounded-lg border border-primary text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-4"
            />
            <h1 className="mb-2 dark:text-gray-200">Email</h1>
            <input
              type="email"
              id="email"
              className="form-control-1 w-full bg-slate-100 p-3 rounded-lg border border-primary text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-4"
            />
            <h1 className="mb-2 dark:text-gray-200">Message</h1>
            <textarea
              id="message"
              className="form-control-1 w-full bg-slate-100 p-3 rounded-lg border border-primary text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-4"
              rows="5"
            />
            <div className="bg-primary text-white text-center p-2 rounded-md hover:opacity-85 disabled:opacity-80 text-sm sm:text-base cursor-pointer w-full mt-8 md:mt-12 lg:mt-24">
              Submit
            </div>
          </div>
        </div>

        {/* Right side of the screen */}
        <div className="w-full md:w-5/12 lg:w-1/2">
          {currentMode === "Dark"
            ? <img
                src={contact1}
                alt="Contact1"
                className="object-cover h-3/4 w-11/12 md:h-3/5 lg:h-3/4"
              />
            : <img
                src={contact}
                alt="Contact"
                className="object-cover h-3/4 w-11/12 md:h-3/5 lg:h-3/4"
              />}
          <div className="flex flex-col gap-2 mt-8">
            <div className="flex flex-row gap-4">
              <div className="bg-white dark:bg-secondary-dark-bg rounded-full drop-shadow-md p-2">
                <MdOutlineMail size={22} className="text-primary" />
              </div>
              <p className="text-slate-500 text-md dark:text-gray-200">
                rizalchurches@gmail.com
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-white dark:bg-secondary-dark-bg rounded-full drop-shadow-md p-2">
                <FiFacebook size={22} className="text-primary" />
              </div>
              <p className="text-slate-500 text-md dark:text-gray-200">
                Rizal Churches
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-white dark:bg-secondary-dark-bg rounded-full drop-shadow-md p-2">
                <FiPhone size={22} className="text-primary" />
              </div>
              <p className="text-slate-500 text-md dark:text-gray-200">
                09123456789
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
