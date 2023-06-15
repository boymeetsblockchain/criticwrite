import React from "react";
import FAQs from "../components/FAQ";
import About from "../components/About";
import Extras from "../components/Extras";
import { Hero } from "../components";

import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Extras />
      <FAQs />
    </div>
  );
};

export default Homepage;
