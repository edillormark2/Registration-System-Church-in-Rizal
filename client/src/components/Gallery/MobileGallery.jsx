import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./MobileGallery.css";
import tolt from "../../images/tolt.jpg";
import taguig from "../../images/taguig.jpg";
import portrait from "../../images/portrait.jpg";
import g1 from "../../images/g1.jpg";
import g2 from "../../images/g2.jpg";
import g3 from "../../images/g3.jpg";
import g4 from "../../images/g4.JPG";
import g5 from "../../images/g5.jpg";
import g6 from "../../images/g6.jpg";
import g7 from "../../images/g7.jpg";

const imagesWithHoverText = [
  { image: tolt, hoverText: "Rodriguez" },
  { image: taguig, hoverText: "San Mateo" },
  { image: portrait, hoverText: "Cainta" },
  { image: g1, hoverText: "Taytay" },
  { image: g2, hoverText: "Angono" },
  { image: g3, hoverText: "Binangonan" },
  { image: g4, hoverText: "Antipolo" },
  { image: g5, hoverText: "Teresa" },
  { image: g6, hoverText: "Morong" },
  { image: g7, hoverText: "Baras" },
  { image: g3, hoverText: "Tanay" },
  { image: g4, hoverText: "Pililia" }
];

const MobileGallery = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow next p-2 md:p-3 hover:bg-primary hover:text-white rounded-full drop-shadow-lg"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow prev p-2 md:p-3 hover:bg-primary hover:text-white rounded-full drop-shadow-lg"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Programmatically click the next button
      sliderRef.current.slickNext();
    }, 4000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []); // Empty dependency array ensures that the effect runs only once

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next)
  };

  return (
    <div className="App m-0 md:m-4">
      <div className="dark:text-gray-200 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Visit our gallery
        </h1>
        <div className="flex justify-center m-2">
          <div className="bg-gray-300 h-px w-80" />
        </div>
        <p className="text-slate-700 dark:text-gray-200 font-semibold mb-4 md:mb-16">
          Church in Rizal
        </p>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {imagesWithHoverText.map((item, idx) =>
          <div
            className={`slide ${idx === imageIndex
              ? "activeSlide"
              : "inactiveSlide"}`}
            key={idx}
          >
            <div className="image-container">
              <img
                src={item.image}
                alt={item.image}
                className="w-96 h-52  lg:h-56  rounded-lg drop-shadow-md "
              />
              <div className="hover-overlay">
                <p className="hover-text text-sm md:text-base font-semibold">
                  {item.hoverText}
                </p>
              </div>
            </div>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default MobileGallery;
