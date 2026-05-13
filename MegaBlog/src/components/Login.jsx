import React,{useState} from 'react'
import {Button, Input, Logo} from "./index"
import { Link , useNavigate } from 'react-router-dom'
import { login as authlogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import authService  from '../appwrite/auth'


function Login() {
    const navigate = useNavigate() ;
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: { errors }} = useForm() ;
    const [error , seterror] = useState("");

    const login = async (data) => {
        seterror("");
        try {
            console.log("Login: Attempting login...", data.email)
            

            const session = await authService.login(data)
            if (session) {
                console.log("Login: Session created. Fetching user...")
                const userData = await authService.getCurrentUser()
                if (userData) {
                    console.log("Login: Got user data. Dispatching action...")
                    const safeUser = JSON.parse(JSON.stringify(userData));
                    dispatch(authlogin({ userData: safeUser }))
                    navigate("/")
                } else {
                    seterror("Login successful but couldn't fetch user data. Check Appwrite CORS and session settings.")
                }
            } else {
                seterror("Login failed. Check console for Appwrite errors and verify credentials.")
            }
        } catch (error) {
            console.error("Login error:", error)
            seterror(error?.message || String(error))
        }
    }

  return (
    <div className='w-full mx-auto max-w-sm'>
        <div className={`bg-white rounded-2xl shadow-xl p-8`}>
          <div className="mb-8 flex flex-col items-center">
            {/* <div className="w-16 h-16 mb-3">
                {/* {logo} */}
              {/* <Logo width="100%" height="100%" /> */}
            {/* </div> */} 
            <h1 className="text-2xl font-bold text-blue-600">MegaBlog</h1>
            <p className="text-xs text-gray-500 mt-1">Share your stories with the world</p>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-sm text-gray-600">Sign in to your account to continue</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <span className="text-red-600 font-bold text-lg mt-0.5">⚠️</span>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(login)} className='space-y-6'>
            <div>
              <Input 
                label='Email'
                placeholder='you@example.com'
                type='email'
                {...register('email', {
                  required: "Email is required", 
                  validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Please enter a valid email address",
                  }
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                  <span>✕</span> {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
                    message: "Password must contain at least one letter and one number"
                  }
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                  <span>✕</span> {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-200 mt-8"
            >
              Sign In
            </Button>
          </form>

          <div className="relative mt-8 mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm">
            Don&apos;t have an account?&nbsp;
            <Link
              to="/signup"
              className="font-semibold text-blue-600 hover:text-blue-700 transition duration-200"
            >
              Create one
            </Link>
          </p>
        </div>
    </div>
  )
}

export default Login