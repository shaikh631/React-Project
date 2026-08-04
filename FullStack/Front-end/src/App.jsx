import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [jokes , setjokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((respone) => {
      setjokes(respone.data)
    })
    .catch((errro) => {
      console.log(error)
    })
  })

  return (
    <>
    <h1>Full Stack Project</h1>
    <p>Jokes : {jokes.length}</p>

    {
      jokes.map((joke ) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.contain}</p>
        </div>
      ))
    }


    </>
  )
}

export default App
