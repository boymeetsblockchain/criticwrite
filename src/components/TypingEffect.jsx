import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay]);

  const { header3Styles } = styles;

  return (
    <h3 className={header3Styles}>
      <span className="gradient-text">{displayText}</span>
    </h3>
  );
};

const styles = {
  header3Styles:
    "text-[24px] font-work mr-[20px] md:mr-[-20px] md:text-[45px]  font-inter font-bold text-[black] mt-[10px] lg:text-[55px] max-sm:text-[26px]",
};

export default TypingEffect;