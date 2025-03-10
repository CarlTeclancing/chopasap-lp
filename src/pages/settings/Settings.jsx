import React from 'react';
import SideBar from '../components/SideBar';
import TopNav from '../components/TopNav';

function Settings() {
  return (
    <div className='dashboard-container'>
        <SideBar />

        <div className="main-section">
            <TopNav PageTitle={'Dashboard'} />

        </div>
    </div>
  )
}

export default Settings