// components/Contact.jsx
import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Element } from "react-scroll";
import Button from "../components/Button";
import CustomInput from "../components/CustomInput";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: "972ed979-257b-42ba-8b8e-e32394614bef", // Replace with your Web3 Forms Access Key
        name: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
      });

      if (response.status === 200) {
        alert("Form submitted successfully!");
        setFormData({ fullName: "", email: "", phoneNumber: "" });
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <section className="border-2 border-s2">
      <Element name="contact" className="relative">
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col lg:flex-row-reverse py-20"
        >
          <div className="testimonials_head-res relative z-2 lg:w-1/3 lg:mr-20 mb-10 lg:mb-0">
            <motion.p
              className="caption mb-5 max-md:mb-2.5"
              initial="hidden"
              whileInView="visible"
            >
              Reach out
            </motion.p>
            <motion.h3
              className="h3 max-md:h5 text-p4"
              initial="hidden"
              whileInView="visible"
            >
              It's easy to get in touch
            </motion.h3>
          </div>

          <motion.div className="relative flex flex-col space-y-8 w-full lg:w-full lg:pr-36" initial="hidden" whileInView="visible">
            <CustomInput placeholder="Full Name" name="fullName" type="text" value={formData.fullName} onChange={handleChange} required />
            <CustomInput placeholder="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            <CustomInput placeholder="Phone Number" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} required />
            <Button containerClassName="w-full md:w-1/4" type="submit">Submit</Button>
          </motion.div>
          {/* <iframe
            src="https://we.replicaide.com/widget/form/8fEOPmoN74GIfLYClX7f"
            // style="width:100%;height:100%;border:none;border-radius:32px"
            id="inline-8fEOPmoN74GIfLYClX7f"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Sales Android Test Drive"
            data-height="984"
            data-layout-iframe-id="inline-8fEOPmoN74GIfLYClX7f"
            data-form-id="8fEOPmoN74GIfLYClX7f"
            title="Sales Android Test Drive"
          ></iframe> */}
        </form>
      </Element>
    </section>
  );
};

export default Contact;
