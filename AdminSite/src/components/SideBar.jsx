import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dashboardLogo from '../assets/dashboardLogo.png';
import Home from '../assets/Home.png';
import { useLocation } from 'react-router-dom';
import usersicon from '../assets/3User.png';
import category from '../assets/category.png';
import chart from '../assets/chart.png';
import bag from '../assets/bag.png';
import chat from '../assets/chat.png';
import settings from '../assets/settings.png';




function SideBar({ active }) {

    const location = useLocation()
    let id;
    

    const [activeState, setActiveState] = useState(1);  // Fix the variable name here

    return (
        <div className="side-bar">
            <img src={dashboardLogo} alt="Dashboard Logo" />

            <Link
                onClick={() => setActiveState(1)}
                state={activeState}
                className={location.pathname === '/'? 'navigation-element-active' : 'navigation-element-disabled'}
                to='/'>
                <img src={Home} alt="Home" />
                <span>Dashboard</span>
            </Link>

            <Link
                onClick={() => setActiveState(2)}
                className={(location.pathname === '/stores')? 'navigation-element-active' : 'navigation-element-disabled'}
                to='/stores'>
                <img src={category} alt="Home" />
                <span>Stores</span>
            </Link>

            <Link
                className={location.pathname === '/users'? 'navigation-element-active' : 'navigation-element-disabled'}
                to='/users'>
                <img src={usersicon} alt="Home" />
                <span>Users</span>
            </Link>

            <Link
                className={location.pathname === '/agents'? 'navigation-element-active' : 'navigation-element-disabled'}
                to='/agents'>
                <img src={usersicon} alt="Home" />
                <span>Delivery Agents</span>
            </Link>

            <Link
                className={location.pathname === '/transactions'? 'navigation-element-active' : 'navigation-element-disabled'}
                to='/transactions'>
                <img src={chart} alt="Home" />
                <span>Transactions</span>
            </Link>

            <Link
                className={location.pathname === '/orders'? 'navigation-element-active' : 'navigation-element-disabled'}
                to='/orders'>
                <img src={bag} alt="Home" />
                <span>Orders</span>
            </Link>

            <hr />
            <Link
                className={location.pathname === '/support'? 'navigation-element-active' : 'navigation-element-disabled'}
                to='/support'>
                <img src={chat} alt="Home" />
                <span>Support</span>
            </Link>

            <Link
                className={location.pathname === '/settings'? 'navigation-element-active' : 'navigation-element-disabled'}
                to='/settings'>
                <img src={settings} alt="Home" />
                <span>Settings</span>
            </Link>
        </div>
    );
}

export default SideBar;
