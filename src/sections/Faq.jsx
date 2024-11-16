import clsx from "clsx";
import { motion } from "framer-motion"; // Import Framer Motion
import React from "react";
import { Element } from "react-scroll";
import FaqItem from "../components/FaqItem";
import { faq } from "../constants";

// Animation variants for title
const titleVariants = {
  hidden: { opacity: 0, x: -100 }, // Fade in from left
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animation variants for FAQ items
const faqVariants = {
  hidden: { opacity: 0, y: 50 }, // Fade in from bottom
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 }, // Comes from bottom
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          {/* Title and Subtitle */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants} // Apply fade from left to right for title
          >
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              Curiosity didn't kill the cat, it gave it answers.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You've got questions, we've got answers.
            </p>
            <motion.div
              className="pricing-bg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariants} // Apply title animation
            >
              <img
                src="/images/bg-outlines.svg"
                width={960/1.2}
                height={380/1.2}
                alt="outline"
                className={clsx("relative z-2 transition-all duration-500")}
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960/1.2}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </motion.div>
          </motion.div>

          {/* Decorative line */}
          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>

        {/* FAQ Items */}
        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            {/* Center logo */}
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img src="/images/ai-chat.png" alt="FAQ Logo" className="w-12 h-12"/>
            </div>

            {/* FAQ Items - Left Column */}
            <motion.div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={faqVariants} // Apply fade from bottom to top for FAQ items
                  key={item.id}
                >
                  <FaqItem key={item.id} item={item} index={index} />
                </motion.div>
              ))}
            </motion.div>

            {/* FAQ Items - Right Column */}
            <motion.div
              className="relative flex-1 lg:pt-24"
            >
              {faq.slice(halfLength, faq.length).map((item, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={faqVariants} // Apply fade from bottom to top for FAQ items
                  key={item.id}
                >
                  <FaqItem
                    key={item.id}
                    item={item}
                    index={halfLength + index}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Decorative line */}
          <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
