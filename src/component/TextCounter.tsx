import React, { useState } from 'react'


const TextCounter = () => {
    const [val,setVal]=useState<string>("");
    const [length,setLength]=React.useState<number>(0);
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        const val = e.target.value;
        setVal(val);
;    }

function handleresult(){
    setLength(val.length);
}
  return (
    <div className='w-[400px] h-[90px] bg-blue-900 rounded-2xl flex flex-col justify-center items-center gap-[5px]'>
        <div> 
            <input 
            type="text "
            placeholder='Enter your text' 
            onChange={handleChange}
            className='w-[200px] h-[30px] rounded-l-2xl pl-[15px] border-2 border-blue-500 text-white'

            />

        <button onClick={handleresult}  className='w-[100px] h-[30px] rounded-r-2xl  bg-orange-300'>
          find
            </button>
        
        </div>

        <p className='text-amber-400'>
            The length of your value in "string" is : <span className='text-green-300'>{length}</span> 
            
            </p>

    </div>
  )
}

export default TextCounter