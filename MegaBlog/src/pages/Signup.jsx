import React from 'react'
import { Signup as SignupComponent } from '../components'

function signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center justify-center px-4">
      <SignupComponent />
    </div>
  )
}

export default signup