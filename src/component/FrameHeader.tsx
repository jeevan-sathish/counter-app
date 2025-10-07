import React from 'react'
import { MdInput } from "react-icons/md"


const FrameHeader:React.FC = () => {
  return (
    <div className='flex flex-row justify-center font-extrabold text-teal-300 items-center text-center gap-3 w-[300px] h-[60px] bg-blue-700 rounded-[10px]'>
         Shoot the values <MdInput/>
        
    </div>
  )
}

export default FrameHeader;