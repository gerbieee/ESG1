import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Lottie from "lottie-react";

import checkMarkAnimation from "../assets/checkmark.json";
import Backdrop from "./Backdrop.jsx";

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  modalIcon: PropTypes.string.isRequired,
};

const popIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.05,
      type: "spring",
      damping: 50,
      stiffness: 300,
    },
  },
  exit: { scale: 0.9, opacity: 0 },
};

export default function Modal({ handleClose, message, modalIcon }) {
  const [animateLottie, setAnimateLottie] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateLottie(true);
    }, 250);

    return () => clearTimeout(timeout);
  });

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="m-auto flex h-fit w-[90%] max-w-fit flex-col items-center justify-center gap-12 bg-primary p-12 font-bold text-tertiary q-rounded-xl md:h-80"
        onClick={(e) => e.stopPropagation}
        variants={popIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="h-20 w-20 rounded-full bg-highlight">
          {animateLottie && modalIcon === "Checkmark" && <Checkmark />}
        </div>
        <div className="flex items-center justify-center text-center q-text-lg">
          {message}
        </div>
      </motion.div>
    </Backdrop>
  );
}

function Checkmark() {
  return (
    <Lottie
      animationData={checkMarkAnimation}
      loop={false}
      style={{ width: 80, height: 80 }}
    />
  );
}
