import React from "react";
import announcement from "../images/announcement.png";
import empty from "../images/empty.png";
import AnnouncementContent from "../components/AnnouncementContent";

const Announcement = () => {
  const announcementData = [
    /*
    {
      title: "Exciting Announcement: Summer School of Truth!",
      date_time_created: "February 20, 2024",
      description:
        "Dear Saints, We're thrilled to announce the upcoming Summer School of Truth! Mark your calendars for June 20, 2024, as we gather at the Antipolo Meeting Hall for a transformative learning experience.\n\nJoin us for a season of growth, knowledge, and fellowship. Register now to secure your spot and be part of this enriching event. Let's embark on a journey of discovery and wisdom together!\n\nBest regards,\nThe Chuch in Rizal"
    }
    */
  ];

  return (
    <div className="max-w-7xl m-4 xl:mx-auto">
      <div className="flex flex-row bg-white dark:bg-secondary-dark-bg p-4 md:p-8 mt-8 drop-shadow-xl rounded-md border border-primary">
        <img
          src={announcement}
          alt="announcement"
          className="w-20 md:w-24 h-20 md:h-24 "
        />
        <h1 className="dark:text-gray-200 text-2xl md:text-4xl font-semibold my-auto ml-2 md:ml-8">
          Announcements
        </h1>
      </div>
      <div>
        {announcementData.length === 0
          ? <div className="flex flex-col items-center p-0 md:p-4">
              <img src={empty} alt="empty" className="w-96 " />
              <p className="m-4 dark:text-gray-200 text-sm sm:text-lg bg-white dark:bg-secondary-dark-bg drop-shadow-md p-3 rounded-lg">
                No announcements at the moment. Check back later for updates!
              </p>
            </div>
          : announcementData.map((announcementData, index) =>
              <div key={index} className="m-4 md:m-12">
                <AnnouncementContent {...announcementData} />
              </div>
            )}
      </div>
    </div>
  );
};

export default Announcement;
