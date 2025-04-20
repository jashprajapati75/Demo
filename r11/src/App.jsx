import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Workspace from './components/Workspace'
import { MdDashboard } from "react-icons/md";

function App() {
  return (
    <>
    <div className='bg-body-secondary w-25 vh-100 '>
     <ul className='list-group position-relative'>
      <li className='mt-5 position-relative'><Workspace/></li>
      <li>
        <i></i>
        Menu</li>
      <li>
        <i><MdDashboard />
        </i>
        Dashboard</li>
     </ul>
     </div>
    </>
  )
}

export default App
