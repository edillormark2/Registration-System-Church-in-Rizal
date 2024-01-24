import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg w-full flex md:flex-row flex-col justify-between items-start p-8  lg:p-16 ">
      <div className="w-full md:w-1/2 md:justify-center">
        <ul>
          <p className="text-gray-800 dark:text-gray-200 font-bold text-xl md:text-3xl mb-4">
            Logo
          </p>
          <p className="text-gray-500 pb-6 w-full sm:w-4/6 dark:text-gray-300 md:text-md text-sm">
            © 2024 Church in Rizal. All rights reserved. Website developed by
            Mark Daniel Edillor. For inquiries or questions about this site,
            feel free to contact me.
          </p>

          <div className="flex gap-6 pb-5">
            <div className="bg-white dark:bg-main-dark-bg p-2 drop-shadow-lg rounded-full dark:text-gray-200 hover:bg-primary dark:hover:bg-primary hover:text-white cursor-pointer">
              <FaFacebook className="text-2xl" />
            </div>
            <div className="bg-white dark:bg-main-dark-bg  p-2 drop-shadow-lg rounded-full dark:text-gray-200 hover:bg-primary dark:hover:bg-primary hover:text-white cursor-pointer">
              <FaGithub className="text-2xl" />
            </div>
            <div className="bg-white dark:bg-main-dark-bg  p-2 drop-shadow-lg rounded-full dark:text-gray-200 hover:bg-primary dark:hover:bg-primary hover:text-white cursor-pointer">
              <MdEmail className="text-2xl" />
            </div>
            <div className="bg-white dark:bg-main-dark-bg  p-2 drop-shadow-lg rounded-full dark:text-gray-200 hover:bg-primary dark:hover:bg-primary hover:text-white cursor-pointer">
              <FaYoutube className="text-2xl" />
            </div>
          </div>
        </ul>
      </div>
      <div>
        <ul className="p-4">
          <p className="text-gray-800 dark:text-gray-200 font-bold text-md  md:text-xl pb-4">
            Quick Links
          </p>
          <li className="text-gray-500 dark:text-gray-300 pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer sm:text-sm  text-md">
            Registration
          </li>
          <li className="text-gray-500 dark:text-gray-300  text-md pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer">
            Annoucement
          </li>
          <li className="text-gray-500  dark:text-gray-300 text-md pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer">
            About Us
          </li>
          <li className="text-gray-500 dark:text-gray-300  text-md pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer">
            Contact Us
          </li>
        </ul>
      </div>
      <div>
        <ul className="p-4">
          <p className="text-gray-800 dark:text-gray-200 font-bold text-xl pb-4">
            Information
          </p>
          <li className="text-gray-500 dark:text-gray-300  text-md pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer">
            Features
          </li>
          <li className="text-gray-500 dark:text-gray-300  text-md pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer">
            FAQ
          </li>
          <li className="text-gray-500  dark:text-gray-300 text-md pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer">
            Privacy policy
          </li>
          <li className="text-gray-500 dark:text-gray-300 text-md pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer">
            Terms and condition
          </li>
          <li className="text-gray-500 dark:text-gray-300 text-md pb-2 font-semibold hover:text-primary dark:hover:text-primary cursor-pointer">
            Developer
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
