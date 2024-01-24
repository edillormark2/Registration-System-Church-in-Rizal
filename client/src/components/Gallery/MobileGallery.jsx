import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft, FaArrowDown } from "react-icons/fa";
import "./MobileGallery.css";
import g1 from "../../images/g1.jpg";
import g2 from "../../images/g2.jpg";
import g3 from "../../images/g3.jpg";
import g4 from "../../images/g4.JPG";

const images = [g1, g2, g3, g4]; // Assuming these are imported images

const MobileGallery = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

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
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) =>
          <div
            className={`slide ${idx === imageIndex
              ? "activeSlide"
              : "inactiveSlide"}`}
            key={idx}
          >
            <img
              src={img}
              alt={img}
              className="w-full h-auto  rounded-lg drop-shadow-md"
            />
          </div>
        )}
      </Slider>
    </div>
  );
};

export default MobileGallery;
