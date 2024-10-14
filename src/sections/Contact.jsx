import React from "react";
import { Element } from "react-scroll";
import Button from "../components/Button";
import CustomInput from "../components/CustomInput";

const Contact = () => {
  return (
    <section className="border-2 border-s2">
      <Element name="contact" className="relative">
        <div className="container flex flex-col lg:flex-row-reverse py-20 space-y-0 lg:space-y-0">
          {/* Information Section */}
          <div className="testimonials_head-res relative z-2 lg:w-1/3 lg:mr-20 mb-10 lg:mb-0">
            <p className="caption mb-5 max-md:mb-2.5">Reach out</p>
            <h3 className="h3 max-md:h5 text-p4">It's easy to get in touch</h3>
          </div>

          {/* Contact Form */}
          <div className="relative flex flex-col space-y-8 w-full lg:w-full lg:pr-36">
            <div className="flex w-full md:w-full">
              <CustomInput 
                placeholder="Full Name"
                name="fullName"
                type="text"
              />
            </div>
            <div className="flex w-full md:w-full">
              <CustomInput 
                placeholder="Email"
                name="email"
                type="email"
              />
            </div>
            <div className="flex w-full md:w-full">
              <CustomInput 
                placeholder="Phone Number"
                name="phoneNumber"
                type="tel"
              />
            </div>
            <div className="flex w-full md:w-full">
              <Button containerClassName="w-full md:w-1/4">Submit</Button>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Contact;