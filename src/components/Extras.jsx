import React from 'react';
import { Link } from 'react-router-dom'

const Extras = ()=>{
	return(
	<>
	<hr/>
	<section className='flex flex-col md:flex-row md:justify-center flex-wrap gap-3'>
		<section className='p-4 md:max-w-[45%] font-sans'>
			<h1 className='text-[26px] text-[#167396] font-serif font-bold'>HOW IT WORKS</h1>
			<p>Submitting your essay for evaluation is easy with CritiWrite. Follow these simple steps:</p>
			<p>1. Go to the <Link to='/form' className='text-[blue]'>Evaluation page.</Link></p>
			<p>2. Make sure to fill all the details as may be required</p>
			<p>3. Upload your essay through our secure and user-friendly platform.</p>
			<p>4. Make a secure payment for the evaluation service 	selected.</p>
		</section>
		<section className='p-4 md:max-w-[45%] font-sans'>
			<h1 className='text-[26px] text-[#167396] font-serif font-bold'>Evaluation Process and Turnaround Time</h1>
			<p>Once your essay is submitted, our expert evaluators will carefully review and analyze it based on the official rubrics of the respective exam. We prioritize accuracy, thoroughness, and timely feedback. Our typical turnaround time is 24 hours (or 48 hours during peak periods) to ensure you receive your evaluated essay promptly.</p>
			</section>
		<section className='p-4 md:w-[60%] font-sans'>
			<h1 className='text-[26px] text-[#167396] font-serif font-bold'>Accuracy</h1>
			<p className='text-[black]'>At CritiWrite, we understand the significance of adhering to the official rubrics of each exam. Our evaluators are well-versed in these rubrics, ensuring that your essay is evaluated based on the specific criteria set by the exam authorities. This guarantees accurate assessment and feedback that aligns with the expectations of the examiners.</p>
		</section>
	</section>
	<hr/>
	</>
	)
}

export default Extras;