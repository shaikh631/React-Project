import { useState } from 'react'
import ThemeBtn from './Compenet/ThemeBtn'
import Card from './Compenet/Card'
import './App.css'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import { useEffect } from 'react'

function App() {
  const[themeMode , setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center justify-center bg-white dark:bg-slate-900 theme-transition">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}
export default App
