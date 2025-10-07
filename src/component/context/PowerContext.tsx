import React, { useState, createContext, useContext, ReactNode } from "react";

interface PowerContextType {
  power: boolean;
  setPower: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PowerContext = createContext<PowerContextType | undefined>(undefined);

export const PowerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [power, setPower] = useState<boolean>(false);

  return (
    <PowerContext.Provider value={{ power, setPower }}>
      {children}
    </PowerContext.Provider>
  );
};

// ✅ Custom hook for easy access
export const usePower = (): PowerContextType => {
  const context = useContext(PowerContext);
  if (!context) {
    throw new Error("usePower must be used within a PowerProvider");
  }
  return context;
};
