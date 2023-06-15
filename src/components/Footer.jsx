import React from 'react';
import {AiOutlineMail,AiFillFacebook,AiFillInstagram,AiOutlineTwitter} from "react-icons/ai"


const Footer= ()=> {
	return(
	 <footer className='flex  flex-col-reverse py-4 md:flex-row px-4 md:px-10  text-center justify-center'>
      <div className="footer-icons flex flex-col flex-1 space-y-2 ">
         <h1 className='text-3xl font-bold text-center mb-2'>CritiWrite</h1>
		  <div className="icons flex  flex-col items-center">
		  <h2 className='capitalize text-2xl'>follow us on our socials:</h2>
			 <div className="icons-link flex justify-between space-x-2">
			 <a href=""><AiFillInstagram size={30}/></a>
			<a href=""><AiFillFacebook size={30}/></a>
			<a href=""><AiOutlineTwitter size={30}/></a>
			 </div>
		  </div>
		   <div className="address">
		   <h2 className='font-bold mb-4'>Address:</h2>
		   <p>1234 Street Name</p>
		   <p>City, AA 99999</p>
		   </div>
		   <div className="contact">
		   <h2 className='font-bold mb-4'>Contact:</h2>
		   <p>Email: support@mobirise.com</p>
		   <p>Phone: +1 (0) 000 0000 001</p>
		    <p>Fax: +1 (0) 000 0000 002</p>
		   </div>
	  </div>
	  <div className="footer-form flex-1">
      <form className="max-w-md mx-auto p-4 bg-transparent rounded shadow-md">
     
	  <input
        type="text"
        id="text"
        className="w-full px-2 py-5 mb-4  rounded-md border-none border-b-2 focus::outline-none active:outline-none"
        required
		placeholder='Name'
      />
      <input
        type="email"
        id="email"
        className="w-full px-2 py-5 mb-4  rounded-md border-none border-b-2 focus::outline-none active:outline-none"
        required
		placeholder='Email'
      />

     
      <input
        type="tel"
        id="phone"
		className="w-full px-2 py-5 mb-4  rounded-md border-none border-b-2 focus::outline-none active:outline-none"
        required
		 placeholder='phone number'
      />

      <textarea
        id="message"
        className="w-full px-3 py-7 mb-4 border rounded-md"
        required
      ></textarea>

      <button
        type="submit"
        className="w-full px-4 py-2 font-semibold text-white min-w-max bg-transparent"
      >
        Submit
      </button>
    </form>
	  </div>
	 </footer>
	)
}

export default Footer;