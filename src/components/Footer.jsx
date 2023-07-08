import React from 'react';
import { motion } from 'framer-motion';
import {
  AiTwotoneMail,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from './CustomTexts';

const Footer = () => {
  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col px-4 md:px-8 w-full mx-auto py-4"
    >
      <motion.h1
        variants={textVariant(1.1)}
        className="footer-header text-[36px] text-[#167396] font-extrabold text-center font-inter tracking-wider"
      >
        CritiWrite
      </motion.h1>
      <div className="icons-address items-center justify-center flex flex-col md:flex-row md:justify-between text-center mt-6">
        <div className="icons-social">
          <motion.h2
            variants={textVariant(1.2)}
            className="font-bold font-work lg:text-[20px] md:text-[17px]"
          >
            Follow us on social media:
          </motion.h2>
          <div className="icons flex justify-center gap-4 mt-2">
            <a href="#">
              <AiFillFacebook size={32} />
            </a>
            <a href="#">
              <AiFillInstagram size={32} />
            </a>
            <a href="#">
              <AiOutlineTwitter size={32} />
            </a>
          </div>
        </div>
        <div className="address mt-6 md:mt-0 flex items-center flex-col font-work">
          <motion.h2
            variants={textVariant(1.3)}
            className="font-bold font-work lg:text-[20px] md:text-[17px]"
          >
            Email Address:
          </motion.h2>
          <AiTwotoneMail size={32} />
          <TypingText
            title="critiwrite@gmail.com"
            textStyles="font-bold font-work"
          />

          <Link to="/privacy">
            <motion.p variants={textVariant(1.4)} className="text-[#167396]">
              Privacy Policies
            </motion.p>
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
