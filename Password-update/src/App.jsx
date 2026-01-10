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
    if (length < 8) return { text: 'Weak', color: 'bg-red-500', bgClass: 'bg-gradient-to-br from-red-100 to-red-200' }
    if (length < 12) return { text: 'Medium', color: 'bg-yellow-500', bgClass: 'bg-gradient-to-br from-yellow-100 to-yellow-200' }
    return { text: 'Very strong', color: 'bg-green-500', bgClass: 'bg-gradient-to-br from-green-100 to-green-200' }
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
    // while using this freq it copy white blue Highlite but
    // after that we have click on screen 

    passwordRef.current?.select();
    // -----------***----------- //
    window.navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const strength = getStrength()

  return (
    // Accounding to Background-Changes ".bgClass"
    <div className={`min-h-screen ${strength.bgClass} flex items-center justify-center p-4`}>
      <div className='w-full max-w-6xl'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Random Password Generator
          </h1>
          <p className='text-gray-600 text-lg'>
            Instantly create strong and secure passwords to keep your account safe online.
          </p>
        </div>

        {/* Main Container with Image */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
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
                className={`px-5 py-3 rounded-3xl font-semibold text-white transition-all duration-200 whitespace-nowrap ${
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

        {/* Side Image Section */}
        <div className='hidden md:flex items-center justify-center'>
          <div className='relative'>
            <div className={`w-80 h-80 rounded-2xl shadow-xl overflow-hidden ${strength.bgClass}`}>
              <div className='w-full h-full flex items-center justify-center p-8'>
                <div className='text-center'>
                  <div className='text-6xl mb-4'>
                    {length < 8 ? '🔓' : length < 12 ? '🔐' : '🛡️'}
                  </div>
                  <p className='text-xl font-bold text-gray-800 mb-2'>
                    {strength.text} Password
                  </p>
                  <p className='text-sm text-gray-700'>
                    Length: {length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App