import { motion } from 'framer-motion';
import {
  AiTwotoneMail,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { staggerContainer, textVariant } from '../utils/motion';
import { TypingText, TitleText } from './CustomTexts';

/***
 * todo: Add the linkedin icon, links & target prop
 */

const Footer = () => {
  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col px-4 md:px-8 w-full mx-auto py-4 overflow-x-hidden overflow-y-hidden"
    >
      <TitleText
        title="CRITIWRITE"
        textStyles="footer-header text-[36px] gradient-text  font-extrabold  text-center font-lexend tracking-wider"
      />
      <div className="icons-address items-center justify-center flex flex-col md:flex-row md:justify-between text-center mt-6">
        <div className="icons-social">
          <motion.h2
            variants={textVariant(1.2)}
            className="font-bold font-lexend lg:text-[20px] md:text-[17px]"
          >
            Follow us on social media:
          </motion.h2>
          <motion.div
            variants={textVariant(1.3)}
            className="icons flex justify-center gap-4 mt-2"
          >
            <a href="#">
              <AiFillFacebook size={32} color="#3c3d37" />
            </a>
            <a href="#">
              <AiOutlineTwitter size={32} color="#3c3d37" />
            </a>
            <a href="#">
              <AiFillInstagram size={32} color="#3c3d37" />
            </a>
            <a
              href="https://www.linkedin.com/company/eclat-technologies/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size={32} color="#3c3d37" />
            </a>
          </motion.div>
        </div>
        <div className="address mt-6 md:mt-0 flex items-center flex-col font-lexend">
          <motion.div
            variants={textVariant(1.3)}
            className="flex flex-row text-center items-center"
          >
            <AiTwotoneMail size={31} color="#3c3d37" />
            <motion.h2
              variants={textVariant(1.3)}
              className="font-bold font-lexend lg:text-[20px] md:text-[17px] ml-[1px]"
            >
              Email Address:
            </motion.h2>
          </motion.div>

          <TypingText
            title="critiwrite@gmail.com"
            textStyles="font-bold font-lexend"
          />

          <Link to="/privacy">
            <motion.p
              variants={textVariant(1.5)}
              className="gradient-text font-semibold"
            >
              Privacy Policies
            </motion.p>
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
