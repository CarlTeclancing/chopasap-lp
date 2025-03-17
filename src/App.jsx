import { useState } from 'react'


import './App.css';
import './media.css';
import './admin.css'
import Dashbaord from './pages';
import { Outlet } from 'react-router-dom'
import GlobalContext from './context/GlobalContext';
import DashboardLayout from './components/DashboardLayout';
import SideBar from './components/SideBar';
import TopNav from './components/TopNav';


function App() {
  

  return (
    <GlobalContext>

        <div className='dashboard-container' >
            <SideBar active={2} />
            <div className="main-section">
                <TopNav PageTitle={'Dashboard'} />
                    <Outlet />
            </div>
        </div>
    </GlobalContext>

    
  )
}

export default App
