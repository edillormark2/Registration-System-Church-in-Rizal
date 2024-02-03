import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import { useStateContext } from "../context/ContextProvider";
import success from "../images/popup-success.mp4";

const SuccessPopup = props => {
  const { openPopup, setOpenPopup, title } = props;
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

  return (
    <Modal
      open={openPopup}
      onClose={handleClose}
      aria-labelledby="success-popup-title"
      aria-describedby="success-popup-description"
    >
      <animated.div style={fade}>
        <Box
          className={`rounded-md drop-shadow-xl p-6 ${currentMode === "Dark"
            ? "bg-secondary-dark-bg"
            : "bg-white"}`}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%", // Adjust the width for mobile screens
            maxWidth: "400px", // Set a maximum width to avoid excessive width on larger screens
            textAlign: "center" // Center the text and button
          }}
        >
          <div>
            {/* Add your video here */}
            <video
              ref={videoRef}
              src={success}
              alt="Animated Video"
              className="mb-4"
              style={{
                width: "100%",
                maxWidth: "90%",
                height: "auto",
                display: "block",
                margin: "0 auto",
                objectFit: "contain" // Preserve aspect ratio and avoid stretching
              }}
              autoPlay
              muted
              onEnded={handleVideoEnded}
            />

            <p
              className={`mb-8 text-sm sm:text-base ${currentMode === "Dark"
                ? "text-gray-200"
                : "text-black"}`}
            >
              Amen. Praise the Lord, your registration in {title} has been
              successfully submitted.
            </p>
            <div>
              <button
                className="p-2 bg-primary text-white rounded-md px-4 hover:opacity-70"
                onClick={handleClose}
              >
                Amen
              </button>
            </div>
          </div>
        </Box>
      </animated.div>
    </Modal>
  );
};

export default SuccessPopup;
