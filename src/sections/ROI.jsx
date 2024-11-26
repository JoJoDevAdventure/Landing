import { motion } from "framer-motion";
import React, { useState } from "react";
import { Element } from "react-scroll";

const ROI = () => {
  // State variables for sliders and plan selection
  const [employees, setEmployees] = useState(10);
  const [dollarsPerHour, setDollarsPerHour] = useState(20);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [plan, setPlan] = useState("agency");

  // Monthly cost for each plan
  const planMonthlyCost = plan === "agency" ? 250 : 750;

  // Calculation of savings based on the inputs
  const weeklySavings =
    employees * dollarsPerHour * hoursPerWeek - planMonthlyCost / 4;
  const monthlySavings = weeklySavings * 4;
  const yearlySavings = weeklySavings * 52;

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 }, // Fade in from bottom
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="container mx-auto py-16 border-b-2 border-s2">
      <Element name="seeMoney" id="seeMoney-section">
        <motion.p
          className="caption mb-2 text-s3 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants} // Apply fade from left to right for title
        >
          With our quick ROI calculator
        </motion.p>
        <motion.h1
          className="h3 mb-12 text-p4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants} // Apply fade from left to right for title
        >
          Explore AIDE’s Impact
        </motion.h1>

        <motion.div
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariants} // Apply fade from bottom to top for FAQ items
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Left Column - Sliders and Plan Selection */}
          <div className="space-y-6 p-6 bg-s1 border-s3 rounded-lg shadow-md">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariants} // Apply fade from left to right for title
            >
              <p className="h6 mb-2 text-p5">Number of Employees</p>
              <input
                type="range"
                min="1"
                max="500"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full custom-slider cursor-pointer"
                style={{ "--progress": `${(employees / 500) * 100}%` }}
              />
              <p className="text-p1 text-center">{employees} Employees</p>
            </motion.div>

            <div>
              <p className="h6 mb-2 text-p5">Dollars per Hour</p>

              <input
                type="range"
                min="10"
                max="100"
                value={dollarsPerHour}
                onChange={(e) => setDollarsPerHour(Number(e.target.value))}
                className="w-full custom-slider cursor-pointer"
                style={{ "--progress": `${(dollarsPerHour - 10) * 1.25}%` }}
              />
              <p className="text-p1 text-center">${dollarsPerHour} per Hour</p>
            </div>

            <div>
              <p className="h6 mb-2 text-p5">Hours per Week per Employee</p>
              <input
                type="range"
                min="1"
                max="80"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full custom-slider cursor-pointer"
                style={{ "--progress": `${(hoursPerWeek / 80) * 100}%` }}
              />
              <p className="text-p1 text-center">{hoursPerWeek} Hours/Week</p>
            </div>

            {/* Plan Selection */}
            <div className="space-y-2">
              <p className="caption text-p2">Choose a Plan</p>
              <div className="flex gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="plan"
                    value="agency"
                    checked={plan === "agency"}
                    onChange={() => setPlan("agency")}
                    className="mr-2 accent-p1"
                  />
                  Monthly Plan ($250 per Month)
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="plan"
                    value="saas"
                    checked={plan === "saas"}
                    onChange={() => setPlan("saas")}
                    className="mr-2 accent-p1"
                  />
                  Agency Plan ($750 per Month)
                </label>
              </div>
              <p className="mt-6 text-white/70">Base Plan : $0.25 / minute</p>
            </div>
          </div>

          {/* Right Column - Savings Display */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants} // Apply fade from left to right for title
            className="space-y-12 p-8 bg-s2/10 border border-s3 rounded-lg shadow-lg text-center flex flex-col justify-center"
          >
            <div>
              <motion.div
                className="h3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                ${weeklySavings.toFixed(2)}
              </motion.div>
              <p className="text-p2 text-xl">Saved per Week</p>
            </div>

            <div>
              <motion.div
                className="h3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              >
                ${monthlySavings.toFixed(2)}
              </motion.div>
              <p className="text-p2 text-xl">Saved per Month</p>
            </div>
            <div>
              <motion.div
                className="h3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              >
                ${yearlySavings.toFixed(2)}
              </motion.div>
              <p className="text-p2 text-xl">Saved per Year</p>
            </div>
          </motion.div>
        </motion.div>
      </Element>
    </section>
  );
};

export default ROI;
