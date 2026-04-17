import React from 'react'
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { ResponsiveContainer } from 'recharts';


const Stats = () => {
  const { timeline } = useContext(TimelineContext);
  const callCount = timeline.filter(item => item.type === "call").length;
  const messageCount = timeline.filter(item => item.type === "message").length;
  const videoCount = timeline.filter(item => item.type === "video").length;
  const data = [
  { name: 'call', value: callCount, fill: '#244d3f' },
  { name: 'message', value: messageCount, fill: '#A020F0' },
  { name: 'video', value: videoCount, fill: '#4CBB17' },
];
  return (
   <>
   <h1 className='text-center text-2xl font-bold mt-5 mb-5'>Friendship Analytics</h1>
   
     <div className=' mt-5 shadow bg-white container mx-auto'>
     <div>
      <p className='text-[#244d3f] mt-3.5 text-2xl font-bold'>By Interaction Type</p>
     </div>
     
   <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={80}
            outerRadius={100}
            cornerRadius={10}
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip />
        </PieChart>
</ResponsiveContainer>
    
    
    </div>
   </>
  )
}

export default Stats