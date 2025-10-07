import React, {  useEffect, useState } from 'react'
import FrameHeader from './FrameHeader'
import CounterNotice from './CounterNotice'
import CounterDashboard from './CounterDashboard';
import { usePower } from "../component/context/PowerContext";
import { LuSend } from "react-icons/lu";



const CounterAppFrame:React.FC = () => {
     const [incrementValue,setIncrementValue]=React.useState<number>(0);
     const [decrementValue,setDecrementValue]=React.useState<number>(0);
     const [stageValue ,setStageValue]=useState<number>(0)
    const {power,setPower}=usePower();
    useEffect(() => {
    let timer: NodeJS.Timeout;

    const resetTimer = () => {
      // Clear previous timer
      if (timer) clearTimeout(timer);

     
      timer = setTimeout(() => {
        setPower(false); 
      }, 15 * 60 * 1000); 
    };

   
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("mousemove", resetTimer); 
    window.addEventListener("mousedown", resetTimer); 

    
    resetTimer();

 
    return () => {
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("mousedown", resetTimer);
      if (timer) clearTimeout(timer);
    };
  }, [setPower]);


    

    function handleInputeIncrementChange(e:React.ChangeEvent<HTMLInputElement>){
        setIncrementValue(Number(e.target.value))
    }

     function handleInputeDecrementChange(e:React.ChangeEvent<HTMLInputElement>){
        setDecrementValue(Number(e.target.value))
    }

    function addToIncrementCounter(){
        setStageValue(incrementValue)
    }

    function addToDecrementCounter(){
        setStageValue(decrementValue);
    }

    function handleIncrement(){
        setStageValue(prev=>prev +incrementValue);
    }

    function handleDecrement(){
        setStageValue(stageValue- decrementValue <0? 0: stageValue - decrementValue); 
    }

    function handleReset(){
        setStageValue(0)
    }

 

  return (
    <div className='w-full h-full bg-transparent rounded-b-4xl flex flex-row'>

        <div className='Aside w-[600px] h-full bg-blue-900 rounded-bl-4xl flex flex-col justify-center items-center gap-2'>
          <FrameHeader/>
            
          <div className='flex gap-[5px]'>
              <input 
                type="text"
               
                onChange={handleInputeIncrementChange}
                placeholder='enter increment value ' 
                className='w-[200px] h-[50px] border-1 border-black p-[10px] rounded-2xl decoration-0 text-gray-400' 
                />
                <button 
                disabled={!power}
                onClick={addToIncrementCounter}
                className={`w-[100px] h-[50px] rounded-[10px] ${
  power ? "bg-teal-500 hover:bg-teal-400" : "bg-gray-400 cursor-not-allowed"
}`}
>
    <span className='flex flex-row justify-center items-center gap-[3px]'>submit <LuSend/></span>
</button>
          </div>

            <div className='flex gap-[5px]'>
                <input
                type="text" 
                
              
                onChange={handleInputeDecrementChange}
                placeholder='enter decrement value' 
                className='w-[200px] h-[50px] border-1 border-black p-[10px] rounded-2xl decoration-0 text-gray-400' 
                />
                <button
                disabled={!power}
                onClick={addToDecrementCounter} 
                className={`w-[100px] h-[50px] rounded-[10px] ${
  power ? "bg-teal-500 hover:bg-teal-400" : "bg-gray-400 cursor-not-allowed"
}`}><span className='flex flex-row justify-center items-center gap-[3px]'>submit <LuSend/></span></button>
            </div>
            <p className='text-teal-600 font-medium'> " Read your Inputes "</p>
            <CounterNotice
             incrementValue={incrementValue} 
             decrementValue={decrementValue}
             />   
        </div>

        {/* counter function */}
        <CounterDashboard 
        handleIncrement={handleIncrement}
        handleReset={handleReset}
        handleDecrement={handleDecrement}
        stageValue={stageValue}
        />
        
    </div>
  )
}

export default CounterAppFrame