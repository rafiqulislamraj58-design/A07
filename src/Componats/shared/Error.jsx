import React from 'react'
import { NavLink } from 'react-router'


const Error = () => {
  return (
    <>
        <div className='flex justify-center items-center'>
            <img src='/20945761.jpg' 
            className='h-[80vh]'
        />
        
        </div>
        <div className='flex justify-center'><NavLink to='/'><button className='bg-blue-400 px-5 py-1.5 text-white rounded-md mt-5' >Go Back</button></NavLink></div>
    </>
  )
}

export default Error