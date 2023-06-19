import React from 'react';
import { AiTwotoneMail, AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='flex flex-col px-4 md:px-8 w-full mx-auto py-4'>
      <h1 className="footer-header text-4xl text-[#167396] font-bold text-center">
        CritiWrite
      </h1>
      <div className="icons-address items-center justify-center flex flex-col md:flex-row md:justify-between text-center mt-6">
        <div className="icons-social">
          <h2 className='font-bold'>Follow us on social media:</h2>
          <div className="icons flex justify-center gap-4 mt-2">
            <a href="#"><AiFillFacebook size={32} /></a>
            <a href="#"><AiFillInstagram size={32} /></a>
            <a href="#"><AiOutlineTwitter size={32} /></a>
          </div>
        </div>
        <div className="address mt-6 md:mt-0 flex items-center flex-col">
          <h2 className='font-bold'>Email Address:</h2>
          <AiTwotoneMail size={32}/>
          <p>critiwrite@gmail.com</p>
         
          <Link to='/privacy'><p className='text-[blue]'>Privacy Policies</p></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
