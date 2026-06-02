import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Form from './Compenent/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div
  className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4'
  >
    <div className='max-w-md w-full bg-white rounded-2xl shadow-lg p-6' >
  <Form/> 
    </div>
  </div>
  )
}

export default App
