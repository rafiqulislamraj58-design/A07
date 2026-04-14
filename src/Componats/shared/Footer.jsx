import React from 'react'
import { FaFacebook,FaInstagram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#244D3F] py-3.5 text-center'>
    <h1 className="font-bold text-white text-4xl">KeenKeeper</h1>
    <p className='text-white text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
    <div className="socal">
     <p className='text-center text-white font-bold'>Social Links</p>
     <div className='flex gap-3.5 justify-center'>
      <div className='bg-white flex items-center justify-center rounded-full w-5 h-5'> <FaInstagram />  </div>
      <div className='bg-white flex items-center justify-center  rounded-full w-5 h-5'> <FaFacebook /> </div>
      <div className='bg-white flex items-center justify-center rounded-full w-5 h-5'><FaXTwitter /></div>
     </div>
     <div>
     
     <div className=' container mx-auto flex justify-between border-t border-gray-500 mt-3'>
       <p className='text-gray-400'>© 2026 KeenKeeper. All rights reserved.</p>
      <ul className='flex gap-3.5'>
        <li className='text-gray-400'>Privacy Policy</li>
        <li className='text-gray-400'>Terms of Service</li>
        <li className='text-gray-400'>Cookies</li>
      </ul>
     </div>
     </div>
    </div>
    
    
    
    </div>
  )
}

export default Footer