import React from 'react';
import img from '../assets/img.jpg';
import img2 from '../assets/img3.jpg';
import { TitleText } from './CustomTexts';

const About = () => {
  return (
    <>
      <section className={`${aboutStyles.sectionWrapper}`}>
        <div className={`${aboutStyles.aboutUsWrapper}`}>
          <TitleText
            title="ABOUT US"
            textStyles="text-[36px] gradient-text font-inter font-bold"
          />
          <p className={`${aboutStyles.aboutText}`}>
            At CritiWrite, our mission is to empower individuals to achieve
            their highest writing potential. We strive to provide exceptional
            essay evaluation services that foster growth, confidence, and
            success. Our vision is to become the go-to platform for students and
            professionals seeking expert guidance and constructive feedback to
            excel in their writing endeavors.
          </p>
        </div>
        <div className="m-[2%] p-[2%] max-w-[100%] md:w-[80%]">
          <img
            src={img}
            alt=""
            className="max-h-[100%] w-100% rounded-[15px]"
          />
        </div>
      </section>

      <section className={`${aboutStyles.experienceSection}`}>
        <section className="m-[2%] p-[2%] max-w-[100%] md:w-[80%]">
          <img
            src={img2}
            alt=""
            className="max-h-[100%] w-100% rounded-[15px]"
          />
        </section>
        <div className="min-h-[200px] w-[100%]  mb-[20px] p-[3%] max-h-[400px]">
          <TitleText
            title="EXPERIENCE"
            textStyles="font-inter text-[36px] font-bold"
          />
          <p className={`${aboutStyles.experienceText}`}>
            Our team of expert evaluators consists of highly qualified
            professionals with extensive experience in evaluating essays for
            various exams. They possess in-depth knowledge of the official
            rubrics and are well-equipped to provide insightful feedback that
            enhances your writing skills.
          </p>
        </div>
      </section>
    </>
  );
};

const aboutStyles = {
  sectionWrapper: 'flex flex-col md:flex-row justify-center align-center gap-3',
  aboutUsWrapper:
    'min-h-[200px] font-sans w-[100%] bg-[grey]mb-[20px] p-[3%] max-h-[400px]',
  aboutText:
    'font-work font-semibold tracking-wide lg:text-[20px] md:text-[17px]',
  experienceSection:
    'flex flex-col-reverse md:flex-row justify-center align-center gap-3 mt-[30px]',
  experienceText:
    'font-work font-semibold tracking-wide lg:text-[20px] md:text-[17px]',
};

export default About;
