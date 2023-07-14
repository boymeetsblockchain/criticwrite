import React from 'react';

import {
  AiTwotoneMail,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { TitleText } from './CustomTexts';

const Footer = () => {
  return (
    <footer className="flex flex-col px-4 md:px-8 w-full mx-auto py-4">
      <TitleText
        title="CRITIWRITE"
        textStyles="footer-header text-[36px] gradient-text  font-extrabold  text-center font-work tracking-wider"
      />
      <div className="icons-address items-center justify-center flex flex-col md:flex-row md:justify-between text-center mt-6">
        <div className="icons-social">
          <h2 className="font-bold font-work lg:text-[20px] md:text-[17px]">
            Follow us on social media:
          </h2>
          <div className="icons flex justify-center gap-4 mt-2">
            <a href="#">
              <AiFillFacebook size={32} color="#3c3d37" />
            </a>
            <a href="#">
              <AiOutlineTwitter size={32} color="#3c3d37" />
            </a>
            <a href="#">
              <AiFillInstagram size={32} color="#3c3d37" />
            </a>
          </div>
        </div>
        <div className="address mt-6 md:mt-0 flex items-center flex-col font-work">
          <div className="flex flex-row text-center items-center">
            <AiTwotoneMail size={31} color="#3c3d37" />
            <h2 className="font-bold font-work lg:text-[20px] md:text-[17px] ml-[1px]">
              Email Address:
            </h2>
          </div>

          <h3 className="font-bold font-work">critiwrite@gmail.com</h3>

          <Link to="/privacy">
            <p className="gradient-text font-semibold">Privacy Policies</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
