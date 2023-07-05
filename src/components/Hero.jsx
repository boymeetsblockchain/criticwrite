import React, { useState, useEffect } from "react";
import {
  typing,
  typing2,
  typing3,
  typing4,
  typing5,
  asset1,
  asset2,
} from "../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [typing, typing2, typing3, typing4, typing5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const {
    slideShow,
    headerWrapper,
    header1Styles,
    header3Styles,
    buttonStyle,
    buttonTextStyle,
  } = heroStyles;

  return (
    <section className="max-w-[100%] overflow-x-hidden">
      {/**hero images and slideshow */}
      <section className="relative">
        <div className="max-sm:hidden">
          <img
            src={images[currentImage]}
            alt="hero_bg"
            className={`${slideShow}`}
          />
        </div>
        <div>
          <img
            src={asset1}
            alt="mobile_hero"
            className="lg:hidden md:hidden max-sm:w-[395px] max-sm:h-[400px] max-sm:mt-[175px] max-sm:ml-5"
          />
        </div>
      </section>

      {/**Hero text & Headers */}
      <section>
        <div className={headerWrapper}>
          <h1 className={header1Styles}>
            Unlock your
            <br className="md:hidden" /> Writing
            <span className="text-[#167396] font-inter"> Potential</span>
          </h1>
          <h3 className={header3Styles}>
            Achieve your <span className="text-[#167396]">dream score</span>{" "}
          </h3>
          <Link to="/form">
            <button className={buttonStyle}>
              <p className={buttonTextStyle}>Get Started</p>
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
};

const heroStyles = {
  slideShow:
    "w-[400px] h-[679px] md:w-[900px] opacity-[0.7] md:opacity-[0.8] md:h-[879px] lg:h-[80vh] lg:w-[50%] ",
  headerWrapper:
    "absolute top-[80px] left-0 w-full flex flex-col items-center md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:text-center lg:absolute lg:top-[40%] lg:left-[75.7%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-center lg:w-[50%] max-sm:top-[33%] max-sm:left-[50%] max-sm:transform max-sm:-translate-x-1/2 max-sm:-translate-y-1/2",
  header1Styles:
    "text-[40px] text-[black] font-inter font-extrabold md:text-[55px] lg:text-[68px] animate-slide-left",
  header3Styles:
    "text-[24px] font-work mr-[20px] md:mr-[-20px] md:text-[30px]  font-inter font-semibold text-[black] mt-[10px] lg:text-[35px]",
  buttonStyle:
    "w-[183px] h-[55px] mr-[140px] md:ml-[140px] rounded-[17px] bg-secondary flex justify-center items-center mt-[15px] md:h-[77px] hover:bg-[#167396]",
  buttonTextStyle: "text-[24px] font-inter font-bold text-primary",
};

export default Hero;
