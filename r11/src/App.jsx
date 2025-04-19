import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Workspace from './components/Workspace'

function App() {
  return (
    <>
    <div className='bg-body-secondary w-25 vh-100 '>
     <ul className='list-group position-relative'>
      <li className='mt-5'><Workspace/></li>
      <li>Menu</li>
      <li>Dashboard</li>
     </ul>
     </div>
    </>
  )
}

export default App
