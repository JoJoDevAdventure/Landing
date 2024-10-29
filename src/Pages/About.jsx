import React from "react";
import { Element } from "react-scroll";
import UseCase from "../sections/about/UseCase";
import Values from "../sections/about/Values";
import VisionMission from "../sections/about/VisionMission";
import What from "../sections/about/What";

const About = () => {
  return (
    <Element name="about us">
      <section className="container min-h-[100vh] pt-48 max-md:pt-32 flex flex-col gap-20">
        <VisionMission/>
        <What/>
        <Values/>
        <UseCase/>
      </section>
    </Element>
  );
};

export default About;
