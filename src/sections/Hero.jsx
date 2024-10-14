import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  // Use IntersectionObserver to pause the video when out of view
  useEffect(() => {
    const handleVideoPausePlay = (entries) => {
      if (entries[0].isIntersecting) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    };

    const observer = new IntersectionObserver(handleVideoPausePlay, {
      threshold: 0.5, // Play/pause the video when 50% of the video is visible
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  // Function to toggle play/pause
  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  // Handle play/pause button display
  const handleVideoPlayPause = () => {
    setIsPaused(videoRef.current.paused);
  };

  // Attach event listeners to play and pause events
  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener("play", handleVideoPlayPause);
    videoElement.addEventListener("pause", handleVideoPlayPause);

    return () => {
      videoElement.removeEventListener("play", handleVideoPlayPause);
      videoElement.removeEventListener("pause", handleVideoPlayPause);
    };
  }, []);

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
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the section is in view
          variants={sectionVariants} // Section animation (fade from up)
        >
          {/* Text Section */}
          <div className="relative z-2 max-lg:w-[90%] lg:w-[55%] text-center lg:text-left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={h1Variants} // h1 fade from left
            >
              <div className="caption small-2 uppercase text-p4">
                Super hum<span className="text-p3">ai</span>n assistant
              </div>
              <h1 className="h1 mb-6 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                Transform Your Business with AI-AGENTS
              </h1>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={pButtonVariants} // p and button fade from bottom to up
            >
              <p className="max-w-460 mb-14 body-1 max-md:mb-10 line-clamp-3 mx-auto lg:mx-0">
                We help agencies and businesses automate customer interactions,
                cut costs, and convert more leads with our human-like AI voice
                assistants.
              </p>
              <LinkScroll to="features" offset={-100} spy smooth>
                <Button icon={"/images/zap.svg"} onClick={() => {}}>
                  Try It Now
                </Button>
              </LinkScroll>
            </motion.div>
          </div>

          {/* Video Section */}
          <motion.div
            className="lg:w-[40%] mt-10 lg:mt-0 lg:ml-10 flex justify-center lg:justify-end z-2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={videoVariants} // Video fades in from the right
          >
            <video
              ref={videoRef}
              src="/images/demo.mp4"
              className="w-full max-w-[500px] lg:max-w-full h-auto border-[0.1px] border-p2/30 rounded-lg overflow-hidden shadow-500"
              controls
              autoPlay
            />
            {/* Custom Play Button */}
            {isPaused && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg cursor-pointer"
                onClick={togglePlay}
              >
                <div className="w-16 h-16 bg-s2 rounded-full flex items-center justify-center shadow-300 hover:shadow-500">
                  <img src="/images/triangle.svg" className="flex rotate-90"/>
                </div>
              </div>
            )}
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