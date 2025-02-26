import React from 'react';
import SideBar from '../components/SideBar';
import TopNav from '../components/TopNav';

function Orders() {
  return (
    <div className='dashboard-container'>
        <SideBar active={2} />

        <div className="main-section">
            <TopNav PageTitle={'Dashboard'} />

        </div>
    </div>
  )
}

export default Orders