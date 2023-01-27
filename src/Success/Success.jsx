import "./style.css";
import { motion } from "framer-motion";

const successVariants = {
  initial: {
    x: "100vw",
  },
  final: {
    x: 0,
    transition: {
      delay: 1,
      duration: 1,
      staggerChildren: 1,
    },
  },
};
const svgVariants = {
  initial: {
    rotate: -180,
  },
  final: {
    rotate: 0,
    transition: {
      delay: 2,
      duration: 1,
    },
  },
};
const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  final: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 2,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Success = () => {
  return (
    <motion.div
      className="success"
      variants={successVariants}
      initial="initial"
      animate="final"
    >
      <motion.svg
        width="80"
        height="80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="initial"
        animate="final"
      >
        <circle cx="40" cy="40" r="40" fill="url(#a)" />
        <motion.path
          variants={pathVariants}
          initial="initial"
          animate="final"
          d="M28 39.92 36.08 48l16-16"
          stroke="#fff"
          strokeWidth="3"
        />
        <defs>
          <linearGradient
            id="a"
            x1="-23.014"
            y1="11.507"
            x2="0"
            y2="91.507"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6348FE" />
            <stop offset="1" stopColor="#610595" />
          </linearGradient>
        </defs>
      </motion.svg>
      <h2 className="mt-2">THANK YOU!</h2>
      <p className="mt-3">We've added your card details</p>
      <div className="btn-s mt-2">
        <button>Continue</button>
      </div>
    </motion.div>
  );
};

export default Success;
