import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Reveal = ({ children, width = "fit-content" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,  
    threshold: 0.1,    
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
