import React from 'react';
import img from '../assets/img.jpg';
import img2 from '../assets/img3.jpg';

const About= ()=> {
	return(
	<>
	<hr/>
		<section className='flex flex-col md:flex-row justify-center align-center gap-3'>
		<section className='min-h-[200px] w-[100%] bg-[grey]mb-[20px] p-[3%] max-h-[400px]'>
		<h1 className='text-[26px] font-serif font-bold'>ABOUT US</h1>
		<p>At CritiWrite, our mission is to empower individuals to achieve their highest writing potential. We strive to provide exceptional essay evaluation services that foster growth, confidence, and success. Our vision is to become the go-to platform for students and professionals seeking expert guidance and constructive feedback to excel in their writing endeavors.</p>
		</section>
		<section className='m-[2%] p-[2%] max-w-[100%] md:w-[80%]'>
			<img src={img} alt='' className='max-h-[100%] w-100%'/>
		</section>
	</section>

		<section className='flex flex-col-reverse md:flex-row justify-center align-center gap-3 mt-[30px]'>
		<section className='m-[2%] p-[2%] max-w-[100%] md:w-[80%]'>
			<img src={img2} alt='' className='max-h-[100%] w-100%'/>
		</section>
		<section className='min-h-[200px] w-[100%] bg-[grey]mb-[20px] p-[3%] max-h-[400px]'>
		<h1 className='text-[26px] font-serif font-bold'>EXPERIENCE AND EXPERTISE</h1>
		<p >Our team of expert evaluators consists of highly qualified professionals with extensive experience in evaluating essays for various exams. They possess in-depth knowledge of the official rubrics and are well-equipped to provide insightful feedback that enhances your writing skills.</p>
		</section>
	</section>
	</>
	)
}

export default About;