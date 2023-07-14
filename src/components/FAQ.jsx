import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from './CustomTexts';
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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="max-w-3xl mx-auto p-[4%]"
    >
      <TypingText
        title="FAQS"
        textStyles="text-[36px] gradient-text font-bold font-inter mb-6 md:text-center"
      />
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex items-center justify-between w-full px-4 py-2 bg-[#d1dbde] hover:bg-[white] rounded-md focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <motion.span
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="lg:text-[20px] md:text-[17px] tracking-wide text-[#1f1e20] font-semibold font-lexend"
            >
              {item.question}
            </motion.span>
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
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="px-4 py-2 rounded-md"
            >
              <motion.p
                variants={fadeIn('down', 'tween', 0.2, 1)}
                className="text-[#000000] font-medium font-work"
              >
                {item.answer}
              </motion.p>
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default FAQs;
