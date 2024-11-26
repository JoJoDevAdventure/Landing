import { motion } from "framer-motion";
import React from "react";
import { Element } from "react-scroll";
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
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const pButtonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
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
              <h1 className="h1 mb-6 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-3xl max-md:leading-12">
                Missed calls, hold times & upset clients
              </h1>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={pButtonVariants}
            >
              <p className="max-w-460 mb-14 body-1 max-md:mb-6 mx-auto lg:mx-0">
                Finally a thing of the past! <br /> Fewer human hours spent on
                sales tasks.
                <br />
                Same <span className="italic text-p3"> humanity</span> in the
                sales process.
              </p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={pButtonVariants}
                className="flex flex-row justify-center items-end mb-12 align-middle md:hidden gap-3"
              >
                <p className="">With</p>
                <img className="h-12" src="/images/aide.png" alt="" />
              </motion.div>

              <div className="flex flex-row space-x-8 max-md:flex-col max-md:space-y-6 max-md:w-full">
                <div>
                  <Button icon={"/images/zap.svg"} onClick={() => openPopup()}>
                    Request a Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Video Section */}
          <motion.div
            className="lg:w-[40%] mt-10 lg:mt-0 lg:ml-10 flex flex-col justify-center lg:justify-end z-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={videoVariants}
          >
            <div className="md:hidden">
              <h1 className="h1 mb-6 text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-2 max-md:text-2xl max-md:leading-12 text-center">
                Automated phone systems that have you yelling
              </h1>
              <h1 className="h1 mb-6 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-0 max-md:text-3xl max-md:leading-12 text-center">
                <span className="text-p3"> ‘TAKE ME TO A
                PERSON’</span>
              </h1>
              <h1 className="h1 mb-6 text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-2 max-md:text-2xl max-md:leading-12 text-center">
                ... so 2020
              </h1>
              <p className="max-w-460 mb-14 body-1 max-md:mb-6 mx-auto lg:mx-0 text-center">
                But don’t take our word for it. <br />Give our voice assistant a
                listen.
              </p>
            </div>
            <VideoPlayer
              src="/images/Demo2.mp4"
              thumbnailSrc="/images/thumbnail2.jpg"
              fullScreenAllowed={true}
              noTopBar
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
