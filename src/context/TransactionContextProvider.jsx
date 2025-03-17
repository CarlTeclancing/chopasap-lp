import React from 'react';
import { useState , createContext} from 'react';

const TransactionContext = createContext()

const TransactionContextProvider =( {children} )=> {

    const [transactions, setTransactions] = useState(null)
  return (
    <TransactionContext.Provider value={{ transactions, setTransactions}}>
        {children}
    </TransactionContext.Provider>
  )
}

export default TransactionContextProvider