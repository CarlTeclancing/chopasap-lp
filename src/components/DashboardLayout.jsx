import React from 'react'
import { Children } from 'react'
import SideBar from './SideBar'
import TopNav from './TopNav'

const DashboardLayout = ( {children } )=> {
  return (
    <>
        <div className='dashboard-container'>
            <SideBar active={2} />

            <div className="main-section">
                <TopNav PageTitle={'Dashboard'} />
                    {children}
            </div>
        </div>
    </>
  )
}

export default DashboardLayout