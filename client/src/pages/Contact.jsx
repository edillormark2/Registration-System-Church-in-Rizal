import React from "react";
import contact from "../images/contact-us.png";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row gap-40 max-w-7xl mx-16 my-8 p-8">
        {/* Left side of the screen */}
        <div className="w-5/12">
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
              className="form-control-1 w-full bg-slate-50 p-3 rounded-lg border border-primary text-sm sm:text-base dark:bg-main-dark-bg dark:text-gray-200 mb-4"
            />
            <h1 className="mb-2 dark:text-gray-200">Email</h1>
            <input
              type="email"
              id="email"
              className="form-control-1 w-full bg-slate-50 p-3 rounded-lg border border-primary text-sm sm:text-base dark:bg-main-dark-bg dark:text-gray-200 mb-4"
            />
            <h1 className="mb-2 dark:text-gray-200">Message</h1>
            <textarea
              id="message"
              className="form-control-1 w-full bg-slate-50 p-3 rounded-lg border border-primary text-sm sm:text-base dark:bg-main-dark-bg dark:text-gray-200 mb-4"
              rows="4"
            />
            <div className="bg-primary text-white text-center p-2 rounded-md hover:opacity-85 disabled:opacity-80 text-sm sm:text-base cursor-pointer w-full mt-12">
              Submit
            </div>
          </div>
        </div>
        {/* Right side of the screen */}
        <div className="w-7/12">
          <img
            src={contact}
            alt="Contact"
            className="object-cover h-4/5 w-4/5"
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <FiFacebook size={23} className="text-primary" />
              <p className="font-semibold text-md">Rizal Churces</p>
            </div>
            <div className="flex flex-row gap-4">
              <FiPhone size={23} className="text-primary" />
              <p className="font-semibold text-md">09123456789</p>
            </div>
            <div className="flex flex-row gap-4">
              <MdOutlineMail size={23} className="text-primary" />
              <p className="font-semibold text-md">rizalchurches@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
