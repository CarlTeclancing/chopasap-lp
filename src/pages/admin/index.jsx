import React from 'react';
import SideBar from './components/SideBar';
import TopNav from './components/TopNav';

function Dashbaord() {
  return (
    <div className='dashboard-container'>
        <SideBar active={2} />

        <div className="main-section">
            <TopNav PageTitle={'Dashboard'} />

        </div>
    </div>
  )
}

export default Dashbaord;