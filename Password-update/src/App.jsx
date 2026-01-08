import { useCallback, useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  // State Management
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  const [useNumbers, setUseNumbers] = useState(true)
  const [useCapitalLetters, setUseCapitalLetters] = useState(true)
  const [useSmallLetters, setUseSmallLetters] = useState(true)
  const [useSpecialChars, setUseSpecialChars] = useState(false)
  const [copied, setCopied] = useState(false)
  const passwordRef = useRef(null)

  // Calculate password strength based on length
  const getStrength = () => {
    if (length < 8) return { text: 'Weak', color: 'bg-red-500' }
    if (length < 12) return { text: 'Medium', color: 'bg-yellow-500' }
    return { text: 'Very strong', color: 'bg-green-500' }
  }

  // Generate random password
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = ''

    if (useCapitalLetters) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (useSmallLetters) str += 'abcdefghijklmnopqrstuvwxyz'
    if (useNumbers) str += '0123456789'
    if (useSpecialChars) str += '!@#$%^&*-_+=[]{}~`'

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(randomIndex)
    }

    setPassword(pass)
  }, [length, useNumbers, useCapitalLetters, useSmallLetters, useSpecialChars])

  // Generate password on mount and when dependencies change
  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  // Copy password to clipboard
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const strength = getStrength()

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4'>
      <div className='w-full max-w-2xl'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Random Password Generator
          </h1>
          <p className='text-gray-600 text-lg'>
            Instantly create strong and secure passwords to keep your account safe online.
          </p>
        </div>

        {/* Main Card */}
        <div className='bg-white rounded-2xl shadow-xl p-8 md:p-10'>
          {/* Password Display Section */}
          <div className='mb-8'>
            <div className='flex gap-3 mb-4'>
              <div className='flex-1 flex items-center px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-3xl'>
                <input
                  type='text'
                  value={password}
                  readOnly
                  ref={passwordRef}
                  className='flex-1 bg-gray-50 text-gray-800 font-mono text-lg focus:outline-none'
                />
                <span className={`px-3 py-1 rounded-lg font-semibold text-white text-xs whitespace-nowrap ${strength.color}`}>
                  {strength.text}
                </span>
                <button
                  onClick={passwordGenerator}
                  className='ml-3 text-2xl hover:opacity-70 transition-opacity'
                  title='Regenerate password'
                >
                  🔄
                </button>
              </div>

              {/* Copy Button */}
              <button
                onClick={copyToClipboard}
                className={`px-6 py-3 rounded-3xl font-semibold text-white transition-all duration-200 whitespace-nowrap ${
                  copied
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Password Length Slider Section */}
          <div className='mb-8 bg-gray-50 p-6 rounded-lg'>
            <div className='flex justify-between items-center mb-4'>
              <label className='text-gray-700 font-semibold'>
                Password Length: <span className='text-blue-600'>{length}</span>
              </label>
            </div>
            <input
              type='range'
              min='4'
              max='22'
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className='w-full h-2 bg-gray-300 rounded-lg appearance-auto cursor-pointer accent-blue-500'
            />
            <div className='flex justify-between text-xs text-gray-500 mt-2'>
              <span>4</span>
              <span>22</span>
            </div>
          </div>

          {/* Character Type Options Section */}
          <div className='bg-gray-50 p-6 rounded-lg'>
            <p className='text-gray-700 font-semibold mb-4'>Characters Used:</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {/* Uppercase Letters */}
              <label className='flex items-center gap-3 cursor-pointer hover:bg-white p-3 rounded-lg transition-colors'>
                <input
                  type='checkbox'
                  checked={useCapitalLetters}
                  onChange={() => setUseCapitalLetters(!useCapitalLetters)}
                  className='w-5 h-5 accent-blue-500 cursor-pointer'
                />
                <span className='text-gray-700 font-medium'>ABC</span>
              </label>

              {/* Lowercase Letters */}
              <label className='flex items-center gap-3 cursor-pointer hover:bg-white p-3 rounded-lg transition-colors'>
                <input
                  type='checkbox'
                  checked={useSmallLetters}
                  onChange={() => setUseSmallLetters(!useSmallLetters)}
                  className='w-5 h-5  accent-blue-500 border-black-300 cursor-pointer'
                />
                <span className='text-gray-700 font-medium'>abc</span>
              </label>

              {/* Numbers */}
              <label className='flex items-center gap-3 cursor-pointer hover:bg-white p-3 rounded-lg transition-colors'>
                <input
                  type='checkbox'
                  checked={useNumbers}
                  onChange={() => setUseNumbers(!useNumbers)}
                  className='w-5 h-5 accent-blue-500 cursor-pointer'
                />
                <span className='text-gray-700 font-medium'>123</span>
              </label>

              {/* Special Characters */}
              <label className='flex items-center gap-3 cursor-pointer hover:bg-white p-3 rounded-lg transition-colors'>
                <input
                  type='checkbox'
                  checked={useSpecialChars}
                  onChange={() => setUseSpecialChars(!useSpecialChars)}
                  className='w-5 h-5 accent-blue-500 cursor-pointer'
                />
                <span className='text-gray-700 font-medium'>#$&</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App