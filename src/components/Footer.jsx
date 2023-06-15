import React from 'react';
import {AiOutlineMail,AiFillFacebook,AiFillInstagram,AiOutlineTwitter} from "react-icons/ai"


const Footer= ()=> {
	return(
	 <footer className='flex flex-col px-4 md:px-8  w-full mx-auto  py-4'>
      <h1 className="footer-header  text-4xl font-bold text-center">
        CritiWrite:
      </h1>
      <div className="icons-address  items-center justify-center  flex gap-6 text-center ">
         <div className="icons-social flex flex-col">
            <h2 className='font-bold mt-[-4px]'>Follow us on how social :</h2>
             <div className="icons flex justify-center ">
             <a href="#"><AiFillFacebook size={32}/></a>
            <a href="#"><AiFillInstagram size={32}/></a>
            <a href="#"><AiOutlineTwitter size={32}/></a>
             </div>
         </div>
         <div className="address">
		   <h2 className='font-bold '>Address:</h2>
		   <p>1234 Street Name</p>
		   <p>City, AA 99999</p>
		   </div>
      </div>
   </footer>
	)
}

export default Footer;
