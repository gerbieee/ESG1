import { motion } from "framer-motion";
import PropTypes from "prop-types";

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default function Backdrop({ onClick, children }) {
  return (
    <motion.div
      className="absolute left-0 top-0 z-30 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
