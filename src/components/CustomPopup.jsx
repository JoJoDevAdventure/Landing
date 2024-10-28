// components/CustomPopup.jsx
import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSnapshot } from "valtio";
import popupState, { closePopup } from "../stores/popupStore";
import Button from "./Button";
import CustomInput from "./CustomInput";

const CustomPopup = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const { isOpen } = useSnapshot(popupState);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
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
        phoneNumber: formData.phoneNumber
      });

      if (response.status === 200) {
        alert("Form submitted successfully!");
        closePopup();
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      alert("Submission failed. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <motion.form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md p-8 bg-s2 shadow-lg border-2 border-s3 rounded-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <button
          type="button"
          onClick={closePopup}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-s1 rounded-full hover:bg-s1/60"
        >
          ✕
        </button>

        <h3 className="text-lg font-bold mb-4 text-center h4">Try it now!</h3>
        <p className="caption text-center">We'll send you a demo</p>
        <div className="space-y-4">
          <CustomInput
            placeholder="Full Name"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <CustomInput
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <CustomInput
            placeholder="Phone Number"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-6 flex justify-center">
          <Button containerClassName="w-1/2" type="submit">
            Submit
          </Button>
        </div>
      </motion.form>
    </div>
  );
};

export default CustomPopup;