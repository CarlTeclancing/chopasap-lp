import React from 'react';
import OrderContextProvider from './OrderContextProvider';
import AgentsContextProvider from './AgentsContextProvider';
import StoreContextProvider from './StoreContextProvider';
import UserContextProvider from './userContextProvider';
import TransactionContextProvider from './TransactionContextProvider';

function GlobalContext({children}) {
  return (
    <UserContextProvider>
        <OrderContextProvider>
            <StoreContextProvider>
                <TransactionContextProvider>
                    <AgentsContextProvider>
                        {children}
                    </AgentsContextProvider>
                </TransactionContextProvider>
            </StoreContextProvider>
        </OrderContextProvider>
    </UserContextProvider>
  )
}

export default GlobalContext