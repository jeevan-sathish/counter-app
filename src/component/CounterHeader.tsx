import React, { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import { SiCounterstrike } from "react-icons/si";
import { usePower } from "../component/context/PowerContext";

const CounterHeader: React.FC = () => {
  const { power, setPower } = usePower();
  

  

  return (
    <div className="w-full h-[100px] bg-blue-900 flex flex-row justify-center items-center text-center rounded-tl-4xl rounded-tr-4xl border-b-2 border-teal-500">
      <h1 className="text-3xl text-teal-400 font-medium mr-4">
         <span className="text-teal-500">Dynamic</span> Counter App ( DCA)
      </h1>

      <span className="text-4xl text-teal-300 font-extrabold mr-4">
        <SiCounterstrike />
      </span>

      <button
        onClick={() => setPower(!power)}
        className={`w-[50px] h-[50px] animate-pulse rounded-full flex justify-center items-center text-white transition-colors ${
  !power ? "bg-red-500 hover:bg-red-400" : "bg-green-500 hover:bg-green-400"
}`}

      >
        <FaPowerOff />
      </button>

   
    </div>
  );
};

export default CounterHeader;
