import React from "react";
import tolt from "../images/tolt.jpg";
import taguig from "../images/taguig.jpg";
import portrait from "../images/portrait.jpg";
import g1 from "../images/g1.jpg";
import g2 from "../images/g2.jpg";
import g3 from "../images/g3.jpg";
import g4 from "../images/g4.JPG";
import g5 from "../images/g5.jpg";
import g6 from "../images/g6.jpg";
import g7 from "../images/g7.jpg";

const Gallery = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-2xl font-semibold my-4 dark:text-gray-200">
        Visit our gallery
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        {/*First Row */}
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img
              src={tolt}
              alt="Tolt"
              className="rounded-lg object-cover w-96 h-60 transform transition-transform hover:scale-105 drop-shadow-sm hover:border border-primary"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black hover:bg-opacity-50 text-white rounded-lg">
              <span className="text-xl font-semibold">Rodriguez</span>
            </div>
          </div>
          <div className="relative">
            <img
              src={portrait}
              alt="portrait"
              className="rounded-lg object-cover w-96 h-96 transform transition-transform hover:scale-105 drop-shadow-lg hover:border border-primary"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black hover:bg-opacity-50 text-white rounded-lg">
              <span className="text-xl font-semibold">San Mateo</span>
            </div>
          </div>
        </div>

        {/*Second Row */}
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img
              src={g2}
              alt="g2"
              className="rounded-lg object-cover w-96 h-96 transform transition-transform hover:scale-105 drop-shadow-lg hover:border border-primary"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black hover:bg-opacity-50 text-white rounded-lg">
              <span className="text-xl font-semibold">Cainta</span>
            </div>
          </div>
          <div className="relative">
            <img
              src={g1}
              alt="g1"
              className="rounded-lg object-cover w-96 h-60 transform transition-transform hover:scale-105 drop-shadow-lg hover:border border-primary"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black hover:bg-opacity-50 text-white rounded-lg">
              <span className="text-xl font-semibold">Taytay</span>
            </div>
          </div>
        </div>

        {/*Third Row */}
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img
              src={taguig}
              alt="taguig"
              className="rounded-lg object-cover w-96 h-60 transform transition-transform hover:scale-105 drop-shadow-lg hover:border border-primary"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black hover:bg-opacity-50 text-white rounded-lg">
              <span className="text-xl font-semibold">Angono</span>
            </div>
          </div>
          <div className="relative">
            <img
              src={g3}
              alt="g3"
              className="rounded-lg object-cover w-96 h-96 transform transition-transform hover:scale-105 drop-shadow-lg hover:border border-primary"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black hover:bg-opacity-50 text-white rounded-lg">
              <span className="text-xl font-semibold">Binangonan</span>
            </div>
          </div>
        </div>

        {/*Fourth Row */}
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img
              src={g5}
              alt="g5"
              className="rounded-lg object-cover w-96 h-96 transform transition-transform hover:scale-105 drop-shadow-lg hover:border border-primary"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black hover:bg-opacity-50 text-white rounded-lg">
              <span className="text-xl font-semibold">Antipolo</span>
            </div>
          </div>
          <div className="relative">
            <img
              src={g4}
              alt="g4"
              className="rounded-lg object-cover w-96 h-60 transform transition-transform hover:scale-105 drop-shadow-lg hover:border border-primary"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black hover:bg-opacity-50 text-white rounded-lg">
              <span className="text-xl font-semibold">Teresa</span>
            </div>
          </div>
        </div>

        {/*Fifth Row */}
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img
              src={g6}
              alt="g6"
              style={{
                height: "240px"
              }}
              className="rounded-lg object-cover w-96 transform transition-transform hover:scale-105 drop-shadow-lg hover:border border-primary"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black hover:bg-opacity-50 text-white rounded-lg">
              <span className="text-xl font-semibold">Morong</span>
            </div>
          </div>

          <div className="relative">
            <img
              src={g7}
              alt="g7"
              className="rounded-lg object-cover w-96 h-96 transform transition-transform hover:scale-105 drop-shadow-lg hover:border border-primary"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black hover:bg-opacity-50 text-white rounded-lg">
              <span className="text-xl font-semibold">Baras</span>
            </div>
          </div>
        </div>

        {/*Sixth Row */}
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img
              src={g5}
              alt="g5"
              className="rounded-lg object-cover w-96 h-96 transform transition-transform hover:scale-105 drop-shadow-lg hover:border border-primary"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black hover:bg-opacity-50 text-white rounded-lg">
              <span className="text-xl font-semibold">Tanay</span>
            </div>
          </div>
          <div className="relative">
            <img
              src={g4}
              alt="g4"
              className="rounded-lg object-cover w-96 h-60 transform transition-transform hover:scale-105 drop-shadow-lg hover:border border-primary"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black hover:bg-opacity-50 text-white rounded-lg">
              <span className="text-xl font-semibold">Pililia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
