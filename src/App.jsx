import { useState } from 'react'


import './App.css';
import './media.css';
import './admin.css'
import Dashbaord from './pages';
import GlobalContext from './context/GlobalContext';


function App() {
  

  return (
    <GlobalContext>
      <div>
        <Dashbaord />
      </div>
    </GlobalContext>
  )
}

export default App
