import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
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
  { image: tolt, hoverText: "Church in Rodriguez" },
  { image: taguig, hoverText: "Church in San Mateo" },
  { image: portrait, hoverText: "Church in Cainta" },
  { image: g1, hoverText: "Church in Taytay" },
  { image: g2, hoverText: "Church in Angono" },
  { image: g3, hoverText: "Church in Binangonan" },
  { image: g4, hoverText: "Church in Antipolo" },
  { image: g5, hoverText: "Church in Teresa" },
  { image: g6, hoverText: "Church in Morong" },
  { image: g7, hoverText: "Church in Baras" },
  { image: g3, hoverText: "Church in Tanay" },
  { image: g4, hoverText: "Church in Pililia" }
];

const MobileGallery = () => {
  const NextArrow = ({ onClick }) =>
    <div
      className="arrow next p-2 md:p-3 hover:bg-primary hover:text-white rounded-full dark:bg-secondary-dark-bg dark:text-gray-200 dark:hover:bg-primary drop-shadow-lg"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>;

  const PrevArrow = ({ onClick }) =>
    <div
      className="arrow prev p-2 md:p-3 hover:bg-primary hover:text-white rounded-full dark:bg-secondary-dark-bg dark:text-gray-200 dark:hover:bg-primary drop-shadow-lg"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>;

  const [imageIndex, setImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bodyOverflow, setBodyOverflow] = useState("auto");
  const [isAutoSlideEnabled, setIsAutoSlideEnabled] = useState(true);

  const sliderRef = useRef(null);

  useEffect(
    () => {
      const interval = setInterval(() => {
        // Check if the modal is not open before advancing the slider
        if (!isModalOpen && isAutoSlideEnabled) {
          sliderRef.current.slickNext();
        }
      }, 5000);

      return () => clearInterval(interval); // Cleanup the interval on component unmount
    },
    [isModalOpen, isAutoSlideEnabled]
  ); // Update the dependencies to include isAutoSlideEnabled

  const openModal = () => {
    setIsModalOpen(true);
    setBodyOverflow("hidden");
    setIsAutoSlideEnabled(false); // Disable automatic sliding when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setBodyOverflow("auto");
    setIsAutoSlideEnabled(true); // Enable automatic sliding when modal is closed
  };

  const goToNextImage = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevImage = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(
    () => {
      if (isModalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }

      return () => {
        document.body.style.overflow = "auto";
      };
    },
    [isModalOpen]
  );

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
        <h1 className="text-2xl md:text-4xl font-semibold">
          Visit our gallery
        </h1>
        <div className="flex justify-center m-2">
          <div className="bg-gray-300 h-px w-64 sm:w-80" />
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
            onClick={idx === imageIndex ? openModal : undefined}
          >
            <div className="image-container">
              <img
                src={item.image}
                alt={item.image}
                className="w-96 h-52 lg:h-56 rounded-lg drop-shadow-md "
              />
              <div className="hover-overlay">
                <p className="hover-text text-sm md:text-base font-semibold rounded-lg">
                  {item.hoverText}
                </p>
              </div>
            </div>
          </div>
        )}
      </Slider>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal-content fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-white p-1 shadow-lg rounded-md w-11/12 md:w-1/2 z-50"
        overlayClassName="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50"
      >
        <div
          className="modal-close absolute top-4 right-4 bg-black rounded-full text-white p-1 opacity-50 hover:opacity-80 cursor-pointer"
          onClick={closeModal}
        >
          <IoClose />
        </div>
        <div className="flex items-center">
          <div
            className="fixed bottom-6 left-6 p-2 bg-black text-white opacity-60 hover:opacity-90 rounded-full cursor-pointer"
            onClick={goToPrevImage}
          >
            <FaArrowLeft />
          </div>
          <div
            className="fixed bottom-6 right-6 p-2 bg-black text-white opacity-60 hover:opacity-90 rounded-full cursor-pointer"
            onClick={goToNextImage}
          >
            <FaArrowRight />
          </div>
        </div>
        <img
          src={imagesWithHoverText[imageIndex].image}
          alt={imagesWithHoverText[imageIndex].hoverText}
          className=" w-full h-full min-h-96"
        />
      </Modal>
    </div>
  );
};

export default MobileGallery;
