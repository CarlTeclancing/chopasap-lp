import React from 'react'
import Search from '../../assets/search.png'
import Notification from '../../assets/Notifications.png'
import User from '../../assets/User.png'
import { Link } from 'react-router-dom'

export default function TopNav({PageTitle}) {
    
  return (
    <div className='topbar'>
        <h4>{PageTitle}</h4>
        <div className="top-el">
            <div className="search">
                <img src={Search} alt="search icon" />
                <input type="search" placeholder='Search here ...' />
            </div>
            <div className="circle">
                <img src={Notification} alt="notification icon" />
            </div>

            <Link to='/dashboard/profile'><img src={User} alt="user image" /></Link>
            
            
        </div>
    </div>
  )
}