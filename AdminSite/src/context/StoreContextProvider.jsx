import { useState, createContext } from "react";
import React from 'react';
import { storeData } from "../../db/data.js";
 import { demoStores } from "../constantsDemo.js";

// Export this so you can use it in other components
export const StoreContext = createContext(); 

const StoreContextProvider = ({ children }) => {

  
  const [stores, setStores] = useState(demoStores);

  return (
    <StoreContext.Provider value={{ stores, setStores }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
