import React from 'react';
import OrderContextProvider from './OrderContextProvider';
import AgentsContextProvider from './AgentsContextProvider';
import StoreContextProvider from './StoreContextProvider';
import UserContextProvider from './userContextProvider';
import TransactionContextProvider from './TransactionContextProvider';
import AppContextProvider from './AppContextProvider';

function GlobalContext({children}) {
  return (
      <UserContextProvider>
        <AppContextProvider>
        <OrderContextProvider>
            <StoreContextProvider>
                <TransactionContextProvider>
                    <AgentsContextProvider>
                        {children}
                    </AgentsContextProvider>
                </TransactionContextProvider>
            </StoreContextProvider>
        </OrderContextProvider>
        </AppContextProvider>
    </UserContextProvider>
  )
}

export default GlobalContext