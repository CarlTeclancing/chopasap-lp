import React, { useContext } from 'react'
import { Children } from 'react'
import SideBar from './SideBar'
import TopNav from './TopNav'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContextProvider'

const DashboardLayout = ( )=> {
  const {user} = useContext(UserContext)
  const nav = useNavigate()
  if (!user) {
    nav("/auth/login")
  }
  return (
    

        <div className='dashboard-container' >
          <h2>ypp</h2>
            <SideBar active={2} />
            <div className="main-section">
                <TopNav PageTitle={'Dashboard'} />
                    <Outlet />
            </div>
        </div>
    

  )
}

export default DashboardLayout