import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Divider from "@mui/material/Divider";

const AnnouncementContent = ({ title, description, date_time_created }) => {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div className="bg-white dark:bg-secondary-dark-bg rounded-md drop-shadow-md p-4">
      <div className="flex items-center mb-4 gap-5 dark:text-gray-200">
        <FaUserCircle size={40} className="text-gray-500 dark:text-gray-200" />
        <div>
          <p className="font-semibold text-lg">Admin</p>

          <p className="text-gray-500 text-sm dark:text-gray-200">
            {date_time_created}
          </p>
        </div>
      </div>
      <Divider
        sx={{
          backgroundColor: isDarkMode ? "#F2F4F4" : "#F2F4F4"
        }}
      />
      <h2 className="text-xl font-bold  ml-4 mt-4 dark:text-gray-200">
        {title}
      </h2>
      <div>
        <p className="text-gray-600  text-sm mb-4 ml-4 mt-2 dark:text-gray-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementContent;
