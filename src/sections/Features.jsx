import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Button from "../components/Button";
import { details, features } from "../constants/index.jsx";

// Variants for parallax scaling
const parallaxVariants = {
  hidden: { scale: 0.8, opacity: 0 }, // Initial small size and invisible
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }, // Full size when visible
};

// Variants for the fade-in of the details div
const detailsVariants = {
  hidden: { opacity: 0, y: 50 }, // Starts with fade from bottom
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Fades in from bottom
};

const Features = () => {
  const [scrollY, setScrollY] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Get the current scroll position
      const element = document.getElementById('features-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        setOffsetY(rect.top); // Get the top offset of the section relative to the viewport
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic scaling and translate based on scroll position
  const scaleValue = Math.max(0.6, Math.min(1 + (scrollY - offsetY) * 0.00009, 1)); // Adjust the scale range here
  const translateY = Math.min((scrollY - offsetY) * 0.13, 0); // Adjust the vertical translation (translateY)

  return (
    <section>
      <Element name="features" id="features-section">
        <motion.div
          className="container"
          style={{ 
            transform: `scale(${scaleValue}) translateY(${translateY}px)` // Apply both scale and translateY
          }}
        >
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb- flex items-center justify-center flex-col">
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={icon}
                      className="size-28 "
                      alt={title}
                    />
                  </div>
                </div>
                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {title}
                </h2>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}
            <motion.ul
              className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden z-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={detailsVariants} // Fade from bottom to top for details section
            >
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px]" />
              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative p-16 px-4 pb-14">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-20" />
                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>
                  <h3 className="relative z-2 max-36 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </Element>
    </section>
  );
};

export default Features;