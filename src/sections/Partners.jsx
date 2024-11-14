import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const Partners = () => {
  const { scrollYProgress } = useScroll();

  // Parallax effect for logos
  const x = useTransform(scrollYProgress, [0, 1], ["-60%", "60%"]);

  const logos = [
    "/images/partners/Microsoft.png",
    // More logos
  ];


const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 }, // Comes from bottom
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};


  return (
    <section className="container">
      <div className="max-w-960 relative mx-auto border-l border-r border-b border-s2 bg-s1/50 pb-10 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
        {/* Caption with fade-up effect */}
        <motion.p
          className="caption mb-2 text-s3 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants} // Apply fade from left to right for title
        >
          Our Partners
        </motion.p>

        {/* Heading with fade-up effect */}
        <motion.h1
          className="h3 mb-0 text-p4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUpVariants} // Apply fade from left to right for title
        >
          Proud to be partnered with
        </motion.h1>

        {/* Logo Row with parallax effect */}
        <div className="flex justify-center items-center space-x-8 max-md:space-x-4">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="size-72 flex items-center justify-center max-md:size-48"
              style={{ x }}
            >
              <img
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="w-full h-full object-contain opacity-70"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;