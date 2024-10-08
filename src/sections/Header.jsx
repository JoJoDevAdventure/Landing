import clsx from "clsx";
import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => (
  <LinkScroll className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5 z-10">
    {title}
  </LinkScroll>
);

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" width={115} height={55} alt="Logo" />
        </a>
        <div className={clsx(isOpen ? "" : "max-lg:hidden", "w-full max-lg:fixed  max-lg:left-0 max-lg:w-full max-lg:top-0")}>
          <div className={clsx('max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden side-before max-md:px-4 max-lg:bg-s2 max-lg:opacity-0 transition-opacity duration-500', isOpen ? 'max-lg:opacity-100' : '')}>
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">

                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                  to="hero"
                  offset={-100}
                  spy
                  smooth
                  className={clsx("max-lg:hidden transition-transform duration-500")}
                  >
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="contact" />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[360px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img src="/images/bg-outlines.svg" width={960} height={380} alt="outline" className="relative z-2"/>
              <img src="/images/bg-outlines-fill.png" width={960} height={380} alt="outline" className="absolute inset-0 mix-blend-soft-light opacity-5"/>
            </div>
          </div>
        </div>
        <button className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center" onClick={() => setIsOpen((prevState) => !prevState)}>
          <img src={`/images/${isOpen ? "close" : 'magic'}.svg`} className="size-1/2 object-contain"/>
        </button>
      </div>
    </header>
  );
};

export default Header;
