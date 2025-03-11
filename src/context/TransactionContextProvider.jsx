import React from 'react';
import { useState , createContext} from 'react';

const TransactionContext = createContext()

const TransactionContextProvider =( {childeren} )=> {

    const [transactions, setTransactions] = useState(null)
  return (
    <TransactionContext.Provider value={{ transactions, setTransactions}}>
        {childeren}
    </TransactionContext.Provider>
  )
}

export default TransactionContextProvider