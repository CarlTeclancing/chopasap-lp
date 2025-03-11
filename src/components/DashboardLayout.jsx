import React from 'react'
import { Children } from 'react'
import SideBar from './SideBar'
import TopNav from './TopNav'
import { Outlet } from 'react-router-dom'

const DashboardLayout = ( )=> {
  return (
        <div className='dashboard-container' >
            <SideBar active={2} />
            <div className="main-section">
                <TopNav PageTitle={'Dashboard'} />
                    <Outlet />
            </div>
        </div>

  )
}

export default DashboardLayout