import React from 'react'
import Header from './Component/Header'
import Fotter from './Component/Fotter'
import About from './pages/About'

import {Outlet} from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Fotter/>

    </>
  )
}

export default App
