import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";
const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-[calc(55%)] max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p4">
              Super hum<span className="text-p3">ai</span>n assistant
            </div>
            <h1 className="h1 mb-6 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Transform Your Business with AI-AGENTS
            </h1>
            <p className="max-w-460 mb-14 body-1 max-md:mb-10 line-clamp-3">
              We help agencies and businesses automate customer interactions,
              cut costs, and convert more leads with our human-like AI voice
              assistants.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon={"/images/zap.svg"} onClick={() => {}}>
                Try It Now
              </Button>
            </LinkScroll>
          </div>

          <div className="absolute -top-0 right-0 w-[100vw] pointer-events-none opacity-70">
            <img autoPlay src="/images/hero.gif" className="max-lg:h-auto" />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
