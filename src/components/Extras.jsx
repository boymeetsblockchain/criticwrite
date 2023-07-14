import React from 'react';
import { Link } from 'react-router-dom';
import { TitleText } from './CustomTexts';

const Extras = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row md:justify-center  flex-wrap gap-3">
        <div className="p-4 md:max-w-[45%] font-work">
          <TitleText
            title="HOW IT WORKS"
            textStyles="text-[36px] gradient-text font-inter font-bold"
          />
          <p className="lg:text-[20px] font-work font-semibold md:text-[17px]">
            Submitting your essay for evaluation is easy with CritiWrite. Follow
            these simple steps:
          </p>
          <p className="lg:text-[20px] md:text-[17px] font-work font-semibold">
            1. Go to the{' '}
            <Link to="/form" className=" gradient-text">
              Evaluation page.
            </Link>
          </p>
          <p className="lg:text-[20px] md:text-[17px] font-work font-semibold">
            2. Make sure to fill all the details as may be required
          </p>
          <p className="lg:text-[20px] md:text-[17px] font-work font-semibold">
            3. Upload your essay through our secure and user-friendly platform.
          </p>
          <p className="lg:text-[20px] md:text-[17px] font-work font-semibold">
            4. Make a secure payment for the evaluation service selected.
          </p>
        </div>
        <div className="p-4 md:max-w-[45%] font-work">
          <TitleText
            title="EVALUATION"
            textStyles="text-[36px] font-inter font-bold"
          />
          <p className="lg:text-[20px] md:text-[17px] font-work font-semibold">
            Once your essay is submitted, our expert evaluators will carefully
            review and analyze it based on the official rubrics of the
            respective exam. We prioritize accuracy, thoroughness, and timely
            feedback. Our typical turnaround time is 24 hours (or 48 hours
            during peak periods) to ensure you receive your evaluated essay
            promptly.
          </p>
        </div>
        <div className="p-4 md:w-[60%] font-work">
          <TitleText
            title="ACCURACY"
            textStyles="text-[36px] gradient-text font-inter font-bold"
          />
          <p className="text-[black] lg:text-[20px] md:text-[17px] font-work font-semibold">
            At CritiWrite, we understand the significance of adhering to the
            official rubrics of each exam. Our evaluators are well-versed in
            these rubrics, ensuring that your essay is evaluated based on the
            specific criteria set by the exam authorities. This guarantees
            accurate assessment and feedback that aligns with the expectations
            of the examiners.
          </p>
        </div>
      </section>
    </>
  );
};

export default Extras;
