import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, direction = "down" }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const variants = {
    down: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    up: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants[direction]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
