import { useState } from 'react'
import Login from './components/Login'
import NewUserPage from './components/NewUserPage'
import Profile from './components/Profile'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [showNewUserPage, setShowNewUserPage] = useState(false)

  return (
    <UserContextProvider>
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Context API Demo
          </h1>

          <div className="space-y-6 ">
            {showNewUserPage ? (
              <NewUserPage onBack={() => setShowNewUserPage(false)} />
            ) : (
              <Login onNewUser={() => setShowNewUserPage(true)} />
            )}

            <hr className="border-gray-300 " />
            <Profile />
          </div>
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
