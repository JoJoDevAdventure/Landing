import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { Element } from "react-scroll";

const useCases = [
  {
    category: "CCaaS",
    title: "Customer Support",
    description: "Streamlining customer support in call centers, making interactions more accessible and efficient."
  },
  {
    category: "Manufacturing",
    title: "Industrial Control",
    description: "Enabling hands-free control of industrial equipment in noisy environments."
  },
  {
    category: "Language Learning",
    title: "Bilingual Interaction",
    description: "Supporting users who speak multiple languages to interact in their preferred language."
  },
  {
    category: "Accessibility",
    title: "Software",
    description: "Enhancing software accessibility for visually impaired users by enabling conversational interactions."
  }
];

const UseCases = () => {
  const { scrollY } = useScroll();

  // Define parallax transforms for each box's initial and final positions
  const box1X = useTransform(scrollY, [0, 2400], [-400, 0]);
  const box1Y = useTransform(scrollY, [0, 1800], [-400, 0]);

  const box2X = useTransform(scrollY, [0, 2400], [400, 0]);
  const box2Y = useTransform(scrollY, [0, 1800], [-400, 0]);

  const box3X = useTransform(scrollY, [0, 2400], [-400, 0]);
  const box3Y = useTransform(scrollY, [0, 2400], [400, 0]);

  const box4X = useTransform(scrollY, [0, 2400], [400, 0]);
  const box4Y = useTransform(scrollY, [0, 2400], [400, 0]);

  return (
    <section className="container mx-auto py-16">
      <Element name="Solutions" id="useCases-section">
        {/* Caption and Heading */}
        <motion.p
          className="caption mb-2 text-s3 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Elevate Your Service
        </motion.p>
        <motion.h1
          className="h3 mb-20 text-p4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Smart Solutions for Every Challenge
        </motion.h1>

        {/* Grid layout for use cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[box1X, box2X, box3X, box4X].map((xTransform, index) => (
            <motion.div
              key={index}
              style={{
                x: xTransform,
                y: [box1Y, box2Y, box3Y, box4Y][index]
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 + index * 0.1 }}
              className="relative p-6 border border-s3 rounded-xl shadow-md bg-g2 group cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              {/* Vertical line with hover animation */}
              <div className="absolute bottom-6 left-6 h-[40%] w-1 bg-p1 transition-all duration-500 group-hover:h-[70%]"></div>

              {/* Content of the use case */}
              <div className="pl-8">
                <p className="caption font-semibold">{useCases[index].category}</p>
                <h3 className="h4 text-xl font-bold mb-2">{useCases[index].title}</h3>
                <p className="text-white/80">{useCases[index].description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Element>
    </section>
  );
};

export default UseCases;