import React from 'react';
import SideBar from '../components/SideBar';
import TopNav from '../components/TopNav';
import DashboardLayout from '../components/DashboardLayout';
import { storeSchema } from 'chop_asap_types';

function Dashbaord() {
  const a = storeSchema.safeParse({})
  console.log(a);
  
  return (
    
      <h1>Welcome to the Dashboard</h1>
    
  )
}

export default Dashbaord;