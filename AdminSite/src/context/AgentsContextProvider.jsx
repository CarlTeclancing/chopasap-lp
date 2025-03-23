import React from 'react'
import { useState, createContext } from 'react';

const AgentsContext = createContext();

const AgentsContextProvider =({children}) =>{

    const [agents, setAgents]= useState(null);

  return (
    <AgentsContext.Provider value={{agents, setAgents}}>
        {children}
    </AgentsContext.Provider>
  )
}

export default AgentsContextProvider