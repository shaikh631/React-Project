import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function NewUserPage({ onBack }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const normalized = username.trim().toLowerCase()
    if (!normalized.endsWith('@gmail.com')) {
      setError('Username must end with @gmail.com')
      return
    }
    setError('')
    setUser({ username: normalized, password })
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
        Create new account
      </h2>

      {error && <p className="text-sm text-red-500 mb-2 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email (@gmail.com only)
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Gmail address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition duration-200 shadow-md"
        >
          Register and Login
        </button>
      </form>

      <p className="text-center mt-4 text-sm text-gray-600">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onBack}
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          Go to Login
        </button>
      </p>
    </div>
  )
}

export default NewUserPage
