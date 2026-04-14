import React from 'react'
import { CiCirclePlus } from "react-icons/ci";


const Banner = () => {
  return (
    <div>
   <div className='text-center'>
    <h1 className='text-4xl text-[#244D3F] mt-3 font-bold'>Friends to keep close in your life</h1>
   <p className='text-gray-400 mt-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
   </div>
<div className=' flex justify-center'>
  <button className='flex gap-2 items-center justify-center bg-[#244d3f] px-5 py-2 rounded-md text-white mt-5'> <CiCirclePlus /> Add a Friend</button>
</div>
    </div>
  )
}

export default Banner