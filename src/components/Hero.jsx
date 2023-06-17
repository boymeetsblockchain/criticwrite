import React, { useState, useEffect } from "react";
import { typing, typing2, typing3, typing4, typing5 } from "../assets";
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
      <div className="relative">
        <div className="relative">
          <img src={images[currentImage]} alt="hero_bg" className={slideShow} />

          <div className={headerWrapper}>
            <h1 className={header1Styles}>
              Unlock your <br />
              <span className="text-[black] font-sans">Writing Potential</span>
            </h1>
            <h3 className={header3Styles}>Achieve your dream score</h3>
            <Link to="/form">
              <button className={buttonStyle}>
                <p className={buttonTextStyle}>Get Started</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const heroStyles = {
  slideShow:
    "w-[393px] h-[679px] md:w-[900px] opacity-[0.7] md:opacity-[0.8] md:h-[879px] lg:h-[80vh] lg:w-[50%]",
  headerWrapper:
    "absolute top-[80px] left-0 w-full flex flex-col items-center md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:text-center lg:absolute lg:top-[40%] lg:left-[75.7%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-center lg:w-[50%]",
  header1Styles:
    "text-[40px] text-[#167396] font-serif font-semibold md:text-[60px] lg:text-[68px] animate-slide-left",
  header3Styles:
    "text-[24px] font-serif mr-[20px] md:mr-[-20px] md:text-[30px]  font-serif font-medium text-[#167396] mt-[10px] lg:text-[35px]",
  buttonStyle:
    "w-[183px] h-[55px] mr-[140px] md:ml-[140px] rounded-[17px] bg-secondary flex justify-center items-center mt-[15px] md:h-[77px] hover:bg-[#167396]",
  buttonTextStyle: "text-[24px] font-sans font-bold text-primary",
};

export default Hero;