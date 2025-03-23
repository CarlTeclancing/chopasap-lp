import React from 'react';
import { useState, createContext } from 'react';

const OrderContext = createContext()

const OrderContextProvider =( {children})=> {

    const [orders, setOrders] = useState(null)
  return (
    <OrderContext.Provider value={{ orders, setOrders}}>
        {children}
    </OrderContext.Provider>
  )
}

export default OrderContextProvider