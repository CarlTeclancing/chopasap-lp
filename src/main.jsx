import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import App from './App.jsx';
import Dashbaord from './pages/index.jsx';
import Stores from './pages/stores/Stores.jsx';
import Users from './pages/users/Users.jsx';
import Agents from './pages/Agents/Agents.jsx';
import Transactions from './pages/transactions/Transactions.jsx';
import Orders from './pages/orders/Orders.jsx';
import Settings from './pages/settings/Settings.jsx';
import Support from './pages/support/support.jsx';
import StoreDetails from './pages/stores/StoreDetails.jsx';
import DashboardLayout from './components/DashboardLayout.jsx';
import GlobalContext from './context/GlobalContext.jsx';



const router = createBrowserRouter([
  
  {
    path: "dashboard",
    element: <Dashbaord />,
  },
  {
    path: "dashboard/stores",
    element: <Stores />,
  },
  {
    path: "dashboard/users",
    element: <Users />,
  },
  {
    path: "dashboard/agents",
    element: <Agents />,
  },
  {
    path: "dashboard/transactions",
    element: <Transactions />,
  },
  {
    path: "dashboard/orders",
    element: <Orders />,
  },
  {
    path: "dashboard/support",
    element: <Support />,
  },
  {
    path: "dashboard/settings",
    element: <Settings />,
  },
  {
    path: "dashboard/stores/store-id=",
    element: <StoreDetails />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <BrowserRouter>
      <Routes>
      
        <Route element={<DashboardLayout />}>
            <Route index element={<Dashbaord />} />
            <Route path='stores' element={<Stores />} />
            <Route path='agents' element={<Agents />} />
            <Route path='transactions' element={<Transactions />} />
            <Route path='orders' element={<Orders />} />
            <Route path='users' element={<Users />} />
            <Route path='settings' element={<Settings />} />
            <Route path='support' element={<Support />} />
            <Route path='stores/store-id=' element={<StoreDetails />} />
        </Route>
        
      </Routes>
      </BrowserRouter>

    
  </StrictMode>
);
