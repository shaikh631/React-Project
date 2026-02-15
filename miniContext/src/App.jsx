
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <div className="h-230 flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Context API Demo
          </h1>

          <div className="space-y-6">
            <Login />
            <hr className="border-gray-300" />
            <Profile />
          </div>
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
