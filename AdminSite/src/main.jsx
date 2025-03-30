import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';


import './App.css';
import './media.css';
import './admin.css'
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
import { listAll } from '../firebase/crud.js';
import { fireStoreCollections } from 'chop_asap_types';
import AuthPage from './pages/auth.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContext>
      <BrowserRouter>
      <Routes>
      <Route path='auth/login' element={<AuthPage/>} />
        <Route element={<DashboardLayout />}>
            <Route index element={<Dashbaord />} />
            <Route path='stores' element={<Stores />} />
            <Route path='stores/:id' element={<StoreDetails />} />
            <Route path='agents' element={<Agents />} />
            <Route path='transactions' element={<Transactions />} />
            <Route path='orders' element={<Orders />} />
            <Route path='users' element={<Users />} />
            <Route path='settings' element={<Settings />} />
            <Route path='support' element={<Support />} />
        </Route>
        
      </Routes>
      </BrowserRouter>
    </GlobalContext> 
  </StrictMode>
);
