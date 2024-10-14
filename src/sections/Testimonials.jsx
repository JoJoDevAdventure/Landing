import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import TestimonialItem from "../components/TestimonialItem";
import { testimonials } from "../constants";

// Animation variants for the testimonial items
const testimonialVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Testimonials = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const halfLength = Math.floor(testimonials.length / 2);

  // Handle parallax effect for the title
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setHasScrolled(window.scrollY > 32); // Adjust when to start applying background blur
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Apply a limit to the parallax effect
  const parallaxY = Math.min(scrollY * -0.2, 100); // Limits the movement to a maximum of 100px upward
  const parallaxStyle = {
    transform: `translateY(${parallaxY + 900}px)`, // Apply the limited translateY value
    transition: "transform 0.1s ease-out",
  };

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="container block lg:flex">
        {/* Sticky Section with Parallax Effect */}
        <div
          className={clsx(
            "testimonials_head-res sticky top-24 z-2 mr-20 flex-300 transition-all duration-500",
            hasScrolled && "bg-black bg-opacity-80 backdrop-blur-[8px]"
          )}
          style={parallaxStyle} // Apply the parallax style with limit
        >
          <p className="caption mb-5 max-md:mb-2.5">Wall of Love</p>
          <h3 className="h3 max-md:h5 text-p4">Words from our fans</h3>
        </div>

        {/* Testimonial Items */}
        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <motion.div
            className="testimonials_group-after flex-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={testimonialVariants}
          >
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={testimonialVariants} // Apply animation to each testimonial
                whileHover={{ rotate: 2 }} // Slight rotation on hover
              >
                <TestimonialItem
                  item={testimonial}
                  containerClassName="last:after:hidden last:after:max-md:block"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={testimonialVariants}
          >
            {testimonials.slice(halfLength).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={testimonialVariants} // Apply animation to each testimonial
                whileHover={{ rotate: -2 }} // Slight rotation on hover
              >
                <TestimonialItem
                  item={testimonial}
                  containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
