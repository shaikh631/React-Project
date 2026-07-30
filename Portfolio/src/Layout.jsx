import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header'
import Fotter from './Component/Fotter'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Fotter />
    </div>
  )
}

export default Layout