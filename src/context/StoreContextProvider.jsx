
import { useState, createContext } from "react"
import React from 'react';

const StoreContext = createContext();

const StoreContextProvider = ({children})=> {

    const [stores, setStores] = useState(null);
  return (
    <StoreContext.Provider value={{stores, setStores}}>
        {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;