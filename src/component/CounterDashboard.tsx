import React from "react";
import { usePower } from "../component/context/PowerContext";
import { FaArrowUp } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import { FaArrowDown } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";
import TextCounter from "./TextCounter";
import { GiArchiveResearch } from "react-icons/gi";

interface CounterDashboardProps {
  stageValue: number;
  handleIncrement: () => void;
  handleReset: () => void;
  handleDecrement: () => void;
}

const CounterDashboard: React.FC<CounterDashboardProps> = ({
  stageValue,
  handleIncrement,
  handleReset,
  handleDecrement,
}) => {
  const { power } = usePower();
  const [toggle,setToggle]=React.useState<boolean>(false);

  function toggleLength(){
    setToggle(prev=>!prev);
  }

  return (
    <div className="w-full h-full bg-transparent rounded-br-4xl flex flex-col justify-center items-center gap-5">
     
     <div className="flex flex-col justify-center items-center ">
      <p className="text-orange-300">INCREMENT</p>
      <div className="text-[30px]  p-[30px] bg-black text-white flex justify-center items-center rounded-lg">
        {stageValue}
      </div>
      <p className="text-orange-300">DECREMENT</p>

     </div>
      

      
      <div className="flex gap-[20px] text-black font-medium">
        <button
          onClick={handleIncrement}
          disabled={!power}
          className={`w-[120px] h-[50px] rounded-[10px] ${
            power ? "bg-blue-700 hover:bg-green-400" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          <span className="flex flex-row justify-center items-center gap-1">Increment <FaArrowUp/></span>
        </button>

        <button
          onClick={handleReset}
          disabled={!power}
          className={`w-[100px] h-[50px] rounded-[10px] ${
            power ? "bg-red-600 hover:bg-teal-400" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
       <span className="flex flex-row justify-center items-center gap-1 text-white">Reset <RxReset className="font-extrabold"/></span>
        </button>

        <button
          onClick={handleDecrement}
          disabled={!power}
          className={`w-[120px] h-[50px] rounded-[10px] ${
            power ? "bg-blue-700 hover:bg-red-600" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
           <span className="flex flex-row justify-center items-center gap-1">Decrement <FaArrowDown/></span>
        </button>
      </div>
          <div className="w-[400px] h-[70px] text-[12px] text-orange-300 gap-[20px] bg-blue-900 border-3 flex flex-row justify-center items-center border-l-red-600 border-r-0 border-t-0 border-b-0 rounded-r-3xl"
          >
            <MdOutlineError  className="text-[20px]"/>
            <span>
            <p><span className="text-red-300">Note</span> : You can use this buttons only when the power is on</p>
            <p><span  className="text-red-300">Note</span> : Your value cannot be decremented below "0"</p>
            </span>
            

          </div>

          {
            power&& 
            <button
          onClick={toggleLength}
           className="w-[200px] h-[40px] bg-blue-900 rounded-[10px] text-white"
           >
            <span className="flex flex-row justify-center items-center gap-3"><GiArchiveResearch/>Find the text length </span>
            </button>
          }
            {
              toggle&&power? <TextCounter/>:""
            }

          

    </div>
  );
};

export default CounterDashboard;
