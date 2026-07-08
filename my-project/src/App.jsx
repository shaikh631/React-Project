import { useContext, useState } from 'react'
import UserContext from './Context/UserContext.jsx'
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username , password});
  }



  return (
    <>
      <div className='bg-gray-500  text-white mg-5 p-3 w-full h-screen flex-col-reverse  '>
        <div className='text-3xl text-olive-100 bg-black p-2 m-3 rounded-2xl justify-center'>Context API</div>
        <div className='text-red-100 align-baseline m-3 p-2 align-sub flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum incidunt voluptate totam quasi hic dicta voluptatem itaque quidem quia? Recusandae a velit in fuga deleniti culpa hic at, id quibusdam. Cum hic labore accusantium illum ea a voluptatibus. At sint aspernatur blanditiis ex reprehenderit labore, minima neque ducimus perferendis, aliquid nemo harum non velit cupiditate in impedit quidem illum! Voluptatum! Hic, nisi esse. Error molestiae, perspiciatis atque excepturi cupiditate harum, adipisci officia dolorem, blanditiis porro repellat? Eos fugit, labore omnis unde ipsum atque cupiditate libero ipsam id minus tempora dicta!</div>

        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='bg-black text-white rounded-2xl p-2 m-2 outline-0 hover: transition-all active:border-none'
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='bg-black text-white rounded-2xl p-2 m-2 outline-0 hover: transition-all active:border-none'
        />
        <button
          type='button'
          onClick={handleSubmit}
          className='bg-gray-700 text-1xl p-2 m-1 rounded-2xl text-gray-50 hover:bg-olive-300 hover:text-black active:bg-olive-600 active:text-white'
        >
          Submit
        </button>

        <p className='text-4xl p-3 m-5'>{user?.username.toUpperCase()}</p>
      </div>

      
    </>
  )
}

export default App
