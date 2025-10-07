import React from 'react'
import CounterHeader from './CounterHeader';
import CounterAppFrame from './CounterAppFrame';


const CounterApp:React.FC = () => {
  return (
    <div className='w-[800px] h-[600px] bg-blue-950 rounded-4xl flex flex-col '>
        <CounterHeader/>   
        <CounterAppFrame/> 
    </div>
  )
}

export default CounterApp;