import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import { useStateContext } from "../context/ContextProvider";
import success from "../images/popup-success.mp4";

const SuccessPopup = props => {
  const { openPopup, setOpenPopup, title, clearForm } = props;
  const { currentMode } = useStateContext();
  const videoRef = useRef(null);

  const handleClose = () => {
    setOpenPopup(false);
  };

  const handleVideoEnded = () => {
    // Pause the video when it ends
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: openPopup ? 1 : 0 }
  });

  const handleAnotherResponse = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    clearForm();
    setOpenPopup(false);
  };

  return (
    <Modal
      open={openPopup}
      onClose={handleClose}
      aria-labelledby="success-popup-title"
      aria-describedby="success-popup-description"
    >
      <animated.div style={fade}>
        <Box
          className={`rounded-md drop-shadow-xl p-6 mx-auto w-80 lg:w-96 ${currentMode ===
          "Dark"
            ? "bg-secondary-dark-bg"
            : "bg-white"}`}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center" // Center the text and button
          }}
        >
          <div>
            {/* Add your video here */}
            <video
              ref={videoRef}
              src={success}
              alt="Animated Video"
              className="rounded-3xl"
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                display: openPopup ? "block" : "none",
                margin: "0 auto",
                objectFit: "contain" // Preserve aspect ratio and avoid stretching
              }}
              autoPlay
              muted
              onEnded={handleVideoEnded}
              preload="auto" // Preload the video
            />

            <p
              className={`mb-8 mt-4 text-sm sm:text-base ${currentMode ===
              "Dark"
                ? "text-gray-200"
                : "text-black"}`}
            >
              Amen. Praise the Lord! Your registration for {title} has been
              successfully submitted.
            </p>
            <div className="flex flex-col gap-2 justify-center text-sm">
              <button
                className={`flex-grow p-2 bg-none border border-primary text-black rounded-md px-4 w-full ${currentMode ===
                "Dark"
                  ? "text-gray-200"
                  : "text-black"}`}
                onClick={handleAnotherResponse}
              >
                Submit another response
              </button>
              <button
                className="flex-grow p-2 bg-primary text-white rounded-md px-4 hover:opacity-70 w-full"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </Box>
      </animated.div>
    </Modal>
  );
};

export default SuccessPopup;
