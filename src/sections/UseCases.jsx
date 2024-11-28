import { motion } from "framer-motion";
import React from "react";
import { Element } from "react-scroll";

const useCases = [
  {
    category: "CCaaS",
    title: "Customer Support",
    description:
      "Streamlining customer support in call centers, making interactions more accessible and efficient.",
  },
  {
    category: "Critical Alert & Monitoring",
    title: "Industrial Control",
    description: "Streamlining operations with real-time monitoring and hands-free control, ensuring safety and efficiency even in the most challenging industrial environments."
  },
  {
    category: "Language Learning",
    title: "Bilingual Interaction",
    description:
      "Supporting users who speak multiple languages to interact in their preferred language.",
  },
  {
    category: "Accessibility",
    title: "Software",
    description:
      "Enhancing software accessibility for visually impaired users by enabling conversational interactions.",
  },
  {
    category: "Transportation",
    title: "Fleet Management",
    description:
      "Optimizing transportation operations with real-time tracking, automated scheduling, and predictive maintenance powered by AI insights.",
  },
  {
    category: "Financial Services",
    title: "Smart Finance Solutions",
    description:
      "Revolutionizing financial operations with AI-driven insights for real estate management, debt collection, and beyond—delivering precision, efficiency, and growth opportunities.",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 }, // Comes from bottom
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const UseCases = () => {

  return (
    <section className="container mx-auto py-16">
      <Element name="Solutions" id="useCases-section">
        {/* Caption and Heading */}
        <motion.p
          className="caption mb-2 text-s3 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants} // Apply fade from left to right for title
        >
          Elevate Your Service
        </motion.p>
        <motion.h1
          className="h3 mb-20 text-p4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants} // Apply fade from left to right for title
        >
          Smart Solutions for Every Challenge
        </motion.h1>

        {/* Grid layout for use cases */}
        <div className="grid grid-cols-3 md:grid-cols-1 gap-8 max-md:flex flex-row">
          <div className="grid grid-cols-3 md:grid-cols-2 gap-8 max-md:flex max-md:flex-col">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.3 + index * 0.1,
                }}
                className="relative p-6 border border-s3 rounded-xl shadow-md bg-g2 group cursor-pointer"
                whileHover={{ scale: 1.03 }}
              >
                {/* Vertical line with hover animation */}
                <div className="absolute bottom-6 left-6 h-[40%] w-1 bg-p1 transition-all duration-500 group-hover:h-[70%]"></div>

                {/* Content of the use case */}
                <div className="pl-8">
                  <p className="caption font-semibold">{useCase.category}</p>
                  <h3 className="h4 text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-white/80">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default UseCases;
