import React from 'react'
import { Link } from 'react-router'



const Frind = ({data}) => {
  return (
    <>
      <div className=' grid grid-cols-4 gap-2.5 mt-5 mb-5 container mx-auto'>
         {
        data.map((Frind,index)=>{
          return <Link to={`/Frind/${Frind.id}`} key={index} className="card bg-base-100 w-full shadow-sm ">
  <figure>
    <img
      src={Frind.picture}
      className='rounded-full'
      alt="Person" />
  </figure>
  <div className="card-body  justify-center items-center">
    <h2 className="card-title">{Frind.name}</h2>
    <p className='text-xl text-gray-500'>{Frind.days_since_contact}d ago</p>
    <div className='flex gap-2 justify-center items-center'>
      {
        Frind.tags.map((tag,index)=>{
        return <button className='btn  bg-green-500/50 text-[#244d3f] px-5 py-2 rounded-full ' key={index}>{tag}</button>
        })
      }
    </div>
    <button className={`btn btn-sm w-32 rounded-full  ${Frind.status==="almost due"? 'btn-warning px-3':Frind.status==="overdue"?'btn-error px-3':'btn-success px-3'}`} >{Frind.status}</button>
  </div>
</Link>
        })
       }
      </div>
    </>
  )
}

export default Frind