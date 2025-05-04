import { useState } from 'react'
import './App.css'
import Teams from './components/Hello/Teams';
import DeploymentInterface from './components/Hello/Deployment/Deployment';
import Deployment from './components/h/Deployment';

function App() {
  const [count, setCount] = useState(0)
  const toggle = () => setModal(!modal);
  return (
    <>
      {/* <button onClick={toggle}>
        heloo
      </button> */}
      <Teams/>
      {/* <DeploymentInterface/> */}
      {/* <Deployment/> */}
    </>
  )
}

export default App
