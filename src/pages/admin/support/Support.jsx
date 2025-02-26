import React from 'react';
import SideBar from '../components/SideBar';
import TopNav from '../components/TopNav';

function Support() {
  return (
    <div className='dashboard-container'>
        <SideBar />

        <div className="main-section">
            <TopNav PageTitle={'Support'} />

        </div>
    </div>
  )
}

export default Support;