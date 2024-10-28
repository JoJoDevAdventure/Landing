import { motion } from "framer-motion";
import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";
import VideoPlayer from "../components/VideoPlayer";
import { openPopup } from "../stores/popupStore";

const Hero = () => {
  // Motion variants for different elements
  const sectionVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const h1Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const pButtonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  const videoVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
  };

  return (
    <section className="relative pt-52 pb-40 max-lg:pt-48 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <motion.div
          className="container flex flex-col lg:flex-row items-center lg:items-center lg:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          {/* Text Section */}
          <div className="relative z-2 max-lg:w-[90%] lg:w-[55%] text-center lg:text-left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={h1Variants}
            >
              <div className="caption small-2 uppercase text-p4">
                Super hum<span className="text-p5">ai</span>n assistant
              </div>
              <h1 className="h1 mb-6 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                Transform Your Business with AI-AGENTS
              </h1>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={pButtonVariants}
            >
              <p className="max-w-460 mb-14 body-1 max-md:mb-10 line-clamp-3 mx-auto lg:mx-0">
                We help agencies and businesses automate customer interactions,
                cut costs, and convert more leads with our human-like AI voice
                assistants.
              </p>
              <div className="flex flex-row space-x-8"> 
              <LinkScroll to="features" offset={-100} spy smooth>
                <Button icon={"/images/zap.svg"} onClick={() => {}}>
                  Learn More
                </Button>
              </LinkScroll>
              <Button icon={"/images/zap.svg"} onClick={() => openPopup()}>
                  Try It Now
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Video Section */}
          <motion.div
            className="lg:w-[40%] mt-10 lg:mt-0 lg:ml-10 flex justify-center lg:justify-end z-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={videoVariants}
          >
            <VideoPlayer
              src="/images/demo.mp4"
              thumbnailSrc="/images/thumbnail.jpg"
              fullScreenAllowed={true}
            />
          </motion.div>
        </motion.div>

        {/* Background GIF */}
        <div className="absolute -top-0 right-0 w-[100vw] pointer-events-none opacity-70 -z-1">
          <img
            src="/images/hero.gif"
            alt="Background GIF"
            className="max-lg:h-auto"
          />
        </div>
      </Element>
    </section>
  );
};

export default Hero;