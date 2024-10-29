import React from "react";
import Contact from "../sections/Contact";
import Faq from "../sections/Faq";
import Features from "../sections/Features";
import Hero from "../sections/Hero";
import Partners from "../sections/Partners";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Partners />
      {/* <Pricing/> */}
      <Faq />
      {/* <Testimonials/> */}
      <Contact />
    </div>
  );
};

export default Home;
