import React from 'react'
import Img from '../../assets/logo.png'
import { FaHome } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { GoGraph } from "react-icons/go";
import { NavLink } from 'react-router';

const Nav = () => {
  return (
    <div className='shadow'>
    <nav className=' container mx-auto flex justify-between'>
      <img src={Img} alt='logo' className='object-contain' />
      <div className='flex items-center  gap-3.5 '>
        <NavLink to='/'  className={({isActive})=> `${isActive? "bg-[#244D3F] rounded-md px-6 py-1.5 mt-1.5 mb-1.5 text-white":""}`}  ><button    className=' px-6 py-1.5 mt-1.5 mb-1.5 rounded-md flex gap-1.5 items-center'> <FaHome /> Home</button></NavLink>
        <NavLink to='/timeline'  className={({isActive})=> `${isActive? "bg-[#244D3F] rounded-md px-6 py-1.5 mt-1.5 mb-1.5 text-white":""}`}  ><button   className=' px-6 py-1.5 mt-1.5 mb-1.5 rounded-md flex gap-1.5 items-center'> <IoIosTime /> Timeline</button></NavLink>
        <NavLink to='/stats'  className={({isActive})=> `${isActive? "bg-[#244D3F] rounded-md px-6 py-1.5 mt-1.5 mb-1.5 text-white":""}`}  ><button   className=' px-6 py-1.5 mt-1.5 mb-1.5 rounded-md flex gap-1.5 items-center'> <GoGraph />Stats</button></NavLink>
      </div>
    </nav>
    
    </div>
  )
}

export default Nav