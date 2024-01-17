import React from "react";
import Card from "../../components/Card";
import noimage from "../../images/noimage.jpg";
import tolt from "../../images/tolt.jpg";
import taguig from "../../images/taguig.jpg";
import portrait from "../../images/portrait.jpg";

const Registration = () => {
  const cardData = [
    {
      image: tolt,
      status: "Active",
      location: "Antipolo",
      price: 500,
      title: "Summer School of Truth",
      description: "Summer School of Truth",
      buttonLink: "/registration/summer-school-of-truth"
    },
    {
      image: taguig,
      status: "Closed",
      location: "Antipolo",
      price: 500,
      title: "Coordinators Meeting",
      description: "Coordinators Meeting",
      buttonLink: "/registration/coordinators-meeting"
    },
    {
      image: portrait,
      status: "Closed",
      location: "Antipolo",
      price: 500,
      title: "Bible Reading",
      description: "Bible Reading",
      buttonLink: "/registration/bible-reading"
    },
    {
      image: tolt,
      status: "Closed",
      location: "Taguig City",
      price: 500,
      title: "Tour of a Lifetime",
      description: "Tour of a Lifetime",
      buttonLink: "/registration/tour-of-a-lifetime"
    },
    {
      image: tolt,
      status: "Closed",
      location: "Antipolo",
      price: 0,
      title: "Combine Young People's Meeting",
      description: "Combine Young People's Meeting",
      buttonLink: "/registration/combined-young-peoples-meeting"
    },
    {
      image: tolt,
      status: "Closed",
      location: "Antipolo",
      price: 0,
      title: "Combined Lord's Table Meeting",
      description: "Combined Lord's Table Meeting",
      buttonLink: "/registration/combined-Lords-table-meeting"
    },
    {
      image: tolt,
      status: "Closed",
      location: "Antipolo",
      price: 500,
      title: "Fellowship Among the Churches",
      description: "Fellowship Among the Churches",
      buttonLink: "/registration/fellowship-among-the-churches"
    },
    {
      image: tolt,
      status: "Closed",
      location: "Antipolo",
      price: 500,
      title: "Family Day",
      description: "Family Day",
      buttonLink: "/registration/family-day"
    }
  ];

  return (
    <div className="w-full">
      <div className="text-lg sm:text-2xl font-bold mb-2 p-2 dark:text-gray-200 m-6 mt-2">
        Register Now
      </div>

      <div className="flex flex-wrap gap-4 justify-center  ">
        {cardData.map((card, index) =>
          <div
            key={index}
            className="w-10/12 sm:w-5/12 md:w-5/12 lg:w-1/4 xl:w-1/4 2xl:w-1/5  "
          >
            <Card {...card} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
