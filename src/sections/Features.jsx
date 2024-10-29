import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Button from "../components/Button";
import VideoPlayer from "../components/VideoPlayer.jsx";
import { details, features } from "../constants/index.jsx";
import { openPopup } from "../stores/popupStore";

// Variants for parallax scaling
const parallaxVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

// Variants for the fade-in of the details div
const detailsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Variants for the card flip animation
const flipVariants = {
  hidden: { rotateY: 180, opacity: 0 },
  visible: { rotateY: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { rotateY: -180, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
};

const Features = () => {
  const [scrollY, setScrollY] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isOnDemo, setIsOnDemo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const element = document.getElementById("features-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        setOffsetY(rect.top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scaleValue = Math.max(0.6, Math.min(1 + (scrollY - offsetY) * 0.00009, 1));
  const translateY = Math.min((scrollY - offsetY) * 0.13, 0);

  return (
    <section>
      <Element name="features" id="features-section">
        <motion.div
          className="container"
          style={{
            transform: `scale(${scaleValue}) translateY(${translateY}px)`,
          }}
        >
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {/* Feature 0 - Conditional Rendering with Card Flip Animation */}
            <div
              className={clsx(
                "relative z-2 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320 overflow-hidden",
                !isOnDemo && "md:px-10 px-5 md:pb-10 pb-5"
              )}
            >
              <AnimatePresence mode="wait">
                {isOnDemo ? (
                  <motion.div
                    key="demo"
                    className="h-full w-full flex justify-center items-center"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={flipVariants}
                  >
                    <VideoPlayer
                      src="/images/Demo2.mp4"
                      thumbnailSrc="/images/thumbnail2.jpg"
                      pressedClose={() => setIsOnDemo(false)}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="content"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={flipVariants}
                  >
                    <div className="w-full flex justify-start items-start">
                      <div className="-ml-3 mb-4 flex items-center justify-center flex-col">
                        <div className="w-0.5 h-16 bg-s3" />
                        <img
                          src={features[0].icon}
                          className="size-28"
                          alt={features[0].title}
                        />
                      </div>
                    </div>
                    <p className="caption mb-5 max-md:mb-6">{features[0].caption}</p>
                    <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                      {features[0].title}
                    </h2>
                    <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">
                      {features[0].text}
                    </p>
                    <Button
                      icon={features[0].button.icon}
                      onClick={() => setIsOnDemo(true)}
                    >
                      {features[0].button.title}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Feature 1 */}
            <div className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320">
              <div className="w-full flex justify-start items-start">
                <div className="-ml-3 mb-4 flex items-center justify-center flex-col">
                  <div className="w-0.5 h-16 bg-s3" />
                  <img
                    src={features[1].icon}
                    className="size-28"
                    alt={features[1].title}
                  />
                </div>
              </div>
              <p className="caption mb-5 max-md:mb-6">{features[1].caption}</p>
              <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                {features[1].title}
              </h2>
              <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">
                {features[1].text}
              </p>
              <Button icon={features[1].button.icon} onClick={() => openPopup()}>
                {features[1].button.title}
              </Button>
            </div>

            {/* Details Section */}
            <motion.ul
              className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden z-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={detailsVariants}
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