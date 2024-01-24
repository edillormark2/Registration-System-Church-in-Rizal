import React from "react";
import tolt from "../images/tolt.jpg";

const Gallery = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-2xl font-semibold my-4">Visit our gallery</h1>

      <div className="flex flex-row">
        <div>
          <img
            src={tolt}
            alt="Tolt"
            className="rounded-lg object-cover w-2/5 h-4/5"
          />
        </div>
        <div>
          <img
            src={tolt}
            alt="Tolt"
            className="rounded-lg object-cover w-full h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
