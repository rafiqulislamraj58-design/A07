import React from 'react'
import { useState, useEffect } from 'react'



const Daynamic = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
   const fetchData = async () =>{
    const res = await fetch('/data.json')
    const data = await res.json()
    setdata(data);
   }    
   fetchData()
    }, [])
    const ontrackFiter = data.filter((item)=> item.status === 'on-track')
    const neddFiter = data.filter((item)=> item.status === 'overdue')
    const recent = data.filter((item)=> item.days_since_contact <= 30)

  return (
    <div className=' grid grid-cols-4 gap-3.5 container mx-auto mt-5 mb-5'>
    
    <div className='shadow w-full p-6'>
     <h1 className='text-center font-bold text-2xl text-[#244D3F]'>{data.length}</h1>
     <p className='text-center'>Total Friends</p>
    </div>
    <div className='shadow w-full p-6'>
     <h1 className='text-center font-bold text-2xl text-[#244D3F]'>{ontrackFiter.length}</h1>
     <p className='text-center'>On Track</p>
    </div>
    <div className='shadow w-full p-6'>
     <h1 className='text-center font-bold text-2xl text-[#244D3F]'>{neddFiter.length}</h1>
     <p className='text-center'>Need Attention</p>
    </div>
    <div className='shadow w-full p-6'>
     <h1 className='text-center font-bold text-2xl text-[#244D3F]'>{recent.length}</h1>
     <p className='text-center'>Interactions This Month</p>
    </div>
    </div>
  )
}

export default Daynamic