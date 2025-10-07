import React from 'react'
import { LuWaypoints } from "react-icons/lu";


const CounterNotice:React.FC =({incrementValue,decrementValue}) => {
  return (
             

    <div className='w-[300px] h-[250px] bg-blue-950 rounded-2xl mt-[1px] flex flex-col justify-center items-center text-start'>
        <span className='flex flex-row p-[10px]'>
            <LuWaypoints className='text-[80px] text-teal-300 mt-[10px] pl-[20px]'/>
            <p 
            className='pl-[20px] pr-[20px] text-blue-100'
            >The incremented value you have provided will be dynamically added to the 
            counter function <span className='text-red-500 font-medium pl-[10px] text-[18px]'>{incrementValue}</span>
            </p>
        </span>

        <span className='flex flex-row p-[10px]'>
            <LuWaypoints className='text-[80px] text-teal-300 mt-[10px] pl-[20px]'/>
            <p className='pl-[20px] pr-[20px] text-blue-100'>
                The decremented value you have provided will be dynamically added to the 
                counter function <span className='text-red-500 font-medium pl-[10px] text-[18px]'>{decrementValue}</span>
            </p>
        </span>
     

        
    </div>

  )
}

export default CounterNotice