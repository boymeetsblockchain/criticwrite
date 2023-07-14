import { useState } from 'react';
import { motion } from 'framer-motion';
import { TitleText } from './CustomTexts';
import { faqData } from '../constants';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-[4%]">
      <TitleText
        title="FAQS"
        textStyles="text-[36px] gradient-text font-bold font-inter mb-6 md:text-center"
      />
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex items-center justify-between w-full px-4 py-2 bg-[#d1dbde] hover:bg-[white] rounded-md focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="lg:text-[20px] md:text-[17px] tracking-wide text-[#1f1e20] font-semibold font-work">
              {item.question}
            </span>
            <svg
              className={`w-6 h-6 transition-transform ${
                activeIndex === index ? 'transform rotate-180' : ''
              }`}
              fill="black"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-2 rounded-md">
              <p className="text-[#000000] font-work">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
