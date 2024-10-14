import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";
import CountUp from "react-countup";
import { Element } from "react-scroll";
import Button from "../components/Button";
import { plans } from "../constants";

// Animation variants for title and toggle
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 }, // Comes from bottom
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animation variants for pricing plans
const planVariants = {
  hiddenLeft: { opacity: 0, x: -100 }, // Moves from left to right
  hiddenRight: { opacity: 0, x: 100 }, // Moves from right to left
  fadeIn: { opacity: 0 }, // Only opacity change for index 1
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  visibleFadeIn: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }, // Fade in for index 1
};

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          {/* Title Animation */}
          <motion.div
            className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariants} // Apply title animation
          >
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>
            {/* Yearly/Monthly Toggle Animation */}
            <motion.div
              className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariants} // Apply same fade-up animation for the toggle
            >
              <button
                className={clsx("pricing-head_btn", isMonthly && "text-p5")}
                onClick={() => setIsMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !isMonthly && "text-p4")}
                onClick={() => setIsMonthly(false)}
              >
                Yearly
              </button>
              <div
                className={clsx(
                  "g4 rounded-14 before:h100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !isMonthly && "translate-x-full"
                )}
              />
            </motion.div>
            <motion.div
              className="pricing-bg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariants} // Apply title animation
            >
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className={clsx("relative z-2 transition-all duration-500")}
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </motion.div>
          </motion.div>

          {/* Pricing Section */}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 xl:gap-0 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
                initial="hidden"
                whileInView="visible"
                viewport={ index === 1 ? { once: true, amount: 0.1 } : { once: true, amount: 0.5 } } // Triggers the animation when 30% of the component is visible
                variants={
                  index === 0
                    ? {
                        hidden: planVariants.hiddenLeft,
                        visible: planVariants.visible,
                      }
                    : index === 2
                    ? {
                        hidden: planVariants.hiddenRight,
                        visible: planVariants.visible,
                      }
                    : {
                        hidden: planVariants.fadeIn,
                        visible: planVariants.visibleFadeIn,
                      } // Fade in for index 1
                }
              >
                {index === 1 && (
                  <div className="g4 absolute h-330 left-0 top-0 right-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
                )}

                <div
                  className={clsx(
                    "absolute left-0 right-0 z-2 flex items-center justify-center",
                    index === 1 ? "-top-6" : "-top-6 xl:-top-11"
                  )}
                >
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className={clsx(
                      "object-contain drop-shadow-2xl",
                      index === 1 ? "size-[120px]" : "size-[88px]"
                    )}
                  />
                </div>
                <div
                  className={clsx(
                    "relative flex flex-col items-center",
                    index === 1 ? "pt-24" : "pt-12"
                  )}
                >
                  <div
                    className={clsx(
                      "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                      index === 1 ? " border-p3 text-p3" : "border-p1 text-p1"
                    )}
                  >
                    {plan.title}
                  </div>
                  <div className="relative z-2 flex items-center justify-center">
                    <div
                      className={clsx(
                        "h-num flex items-start",
                        index === 1 ? "text-p3" : "text-p1"
                      )}
                    >
                      ${" "}
                      <CountUp
                        start={plan.priceMonthly}
                        end={isMonthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                    </div>
                    <div className="small-1 relative top-3 ml-1">/mo</div>
                  </div>
                </div>
                <div
                  className={clsx(
                    "body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4",
                    index === 1 ? "border-b" : ""
                  )}
                >
                  {plan.caption}
                </div>
                <ul className="mx-auto space-y-4 xl:px-7">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="relative flex items-center gap-5"
                    >
                      <img
                        src="/images/check.png"
                        className="size-10 object-contain"
                      />
                      <p className="flex-1 ">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex w-full justify-center">
                  <Button icon={plan.icon}>Get Started</Button>
                </div>

                {index === 1 && (
                  <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                    Limited time offer
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
