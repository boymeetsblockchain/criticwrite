import React from 'react';
import img from '../assets/img2.jpg';

const Footer= ()=> {
	return(
	<footer className='flex flex-col md:flex-row justify-center align-center gap-3 mt-[30px]'>
	<section className='m-[2%] p-[2%] w-[100%]'>
		<div className='mb-[15px]'>
			<h1 className='text-[36px] font-serif'>Get in touch!</h1>
			<p className='mb-[9px]'>Find out how our products can help you be more productive.</p>
			<button className='text-[16px] text-[#1f1e20] rounded-[25px] min-w-[190px] p-3 bg-[#e6dcc6]'>CONTACT US</button>
		</div>
		<div>
			<p><span className='font-bold text-[16px]'>PHONE</span> (123) 456-7890</p>
			<p><span className='font-bold text-[16px]'>EMAIL</span> hello@reallygreatsite.com</p>
			<p><span className='font-bold text-[16px]'>SOCIAL</span></p>
		</div>
	</section>
	<section className='min-h-[200px] w-[100%] bg-[grey]mb-[20px] max-h-[400px]'>
	<img src={img} alt='' className='max-h-[100%] w-100%'/>
	</section>
	</footer>
	)
}

export default Footer;