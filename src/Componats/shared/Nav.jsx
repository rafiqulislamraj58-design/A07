import React from 'react'
import Img from '../../assets/logo.png'
import { FaHome } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { GoGraph } from "react-icons/go";
import { Link } from 'react-router';

const Nav = () => {
  return (
    <div className='shadow'>
    <nav className=' container mx-auto flex justify-between'>
      <img src={Img} alt='logo' className='bg-cover' />
      <div className='flex items-center  gap-3.5 '>
        <Link to='/'><button  className='bg-gray-200 px-6 py-1.5 mt-1.5 mb-1.5 rounded-md flex gap-1.5 items-center'> <FaHome /> Home</button></Link>
        <Link to='/timeline'><button className='bg-gray-200 px-6 py-1.5 mt-1.5 mb-1.5 rounded-md flex gap-1.5 items-center'> <IoIosTime /> Timeline</button></Link>
        <Link to='/stats'><button className='bg-gray-200 px-6 py-1.5 mt-1.5 mb-1.5 rounded-md flex gap-1.5 items-center'> <GoGraph />Stats</button></Link>
      </div>
    </nav>
    
    </div>
  )
}

export default Nav