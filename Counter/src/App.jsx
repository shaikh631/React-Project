import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [lastAction, setLastAction] = useState(null)

  const addValue = () => {
    if(count < maxValue){
      setCount(count + step)
    }
  
    setLastAction("up")
  }

  const removeValue = () => {
    if (count > 0) {
      setCount(count - step)
      setLastAction("down")
    }
  }
  
  const [step, setStep] = useState(1)
  const [maxValue, setMaxValue] = useState(100)
  const restart = () => {
    setCount(0)
    setLastAction("null")
  }
  const handleStepChange = (e) => {
    setStep(Number(e.target.value))
    setMaxValue(Number(e.target.value)) // Update maxValue based on the new step value
  }


  return (
    <div className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-gray-900"
      
    >
    
      
      <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4 w-auto min-w-96  mx-auto mt-20 text-center ">
        <h1 className="text-2xl font-bold mb-2 text-white"> Simple Counter</h1>
        {/* <p className="text-lg my-3 mb-4 text-white">Current Count</p> */}
         <p className="text-9xl my-3 mb-4 text-white flex items-center justify-center gap-4">
           {count}
           {lastAction === "up" && (
             <i className="fa-solid fa-arrow-up text-green-500 text-4xl"></i>
           )}
           {lastAction === "down" && (
             <i className="fa-solid fa-arrow-down text-red-500 text-4xl"></i>
           )}
         </p>
        <div className="flex gap-4 justify-center mt-4 mb-4 mx-auto w-64 h-12 rounded-lg">
          <button
            onClick={addValue}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Increment
          </button>
          <button
            onClick={removeValue}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Decrement
          </button>
        </div>
        <div className="flex gap-4 justify-center mt-4 mb-4 mx-auto w-64 h-12 rounded-lg">
        <button
          onClick={restart}
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Restart
        </button>
        </div>
        <p className="text-white mt-6  me-37 m-2">Click step/multiplyer</p>
        <input 
          type="number" 
          placeholder="Enter step value" 
          className="px-4 py-2 outline-none text-white rounded mb-4 w-75 bg-black"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        /><br/>
        <p className="text-white mt-0  me-56 m-2">Max Value</p>
        <input 
          type="number" 
          placeholder="Enter max value" 
          className="px-4 py-2 outline-none text-white rounded mb-4 w-75 bg-black"
          value={maxValue}
          onChange={(e) => setMaxValue(Number(e.target.value))}
        />
      </div>
    </div>
  )
}

export default App
