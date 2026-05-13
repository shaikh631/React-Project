
import React,{useState} from 'react'
import {Button, Input,  Logo} from "./index"
import { Link , useNavigate } from 'react-router-dom'
import {login} from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import authService from '../appwrite/auth'


function Signup() {
     const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: { errors }} = useForm()

    // const create = async(data) => {
    //     setError("")
    //     try {
    //         const created = await authService.createAccount(data)
    //         if (created) {
    //             const currentUser = await authService.getCurrentUser()
    //             if(currentUser) dispatch(authlogin(currentUser));
    //             navigate("/")
    //         }
    //     } catch (error) {
    //         setError(error.message)
    //     }
    // }
    const create = async (data) => {
        setError("")
        try {
            console.log("Signup: Creating account...", data.email)
            const created = await authService.createAccount(data)
            if (created) {
                console.log("Signup: Account created successfully. Now logging in...")
                const session = await authService.login(created)
                if (session) {
                    console.log("Signup: Login session created. Checking active sessions...")
                   // await authService.listSessions() // Diagnostic
                    const currentUser = await authService.getCurrentUser()
                    if (currentUser) {
                        console.log("Signup: Got current user. Dispatching login action...")
                        dispatch(login(currentUser))
                        navigate("/")
                    } else {
                        setError("Session created but user data unavailable. Check Appwrite CORS: add http://localhost:* to Allowed Origins in Appwrite Console.")
                    }
                } else {
                    setError("Account created but login failed. Check Appwrite project status and browser console.")
                }
            } else {
                setError("Unable to create account. Check browser console for Appwrite errors.")
            }
        } catch (error) {
            console.error("Signup error:", error)
            setError(error?.message || String(error))
        }
    }

    // const create  = async(data) =>{
    //     const userdata = await authService.createAccount(data)
    //     if(userdata){
    //         const userdata = await authService.getCurrentUser();
    //         if(userdata) dispatch(ogin(userdata))
    //             navigate("/")
    //     }
    // }

  return (
    <div className="w-full mx-auto max-w-sm">
      <div className={`bg-white rounded-2xl shadow-xl p-8`}>
        <div className="mb-8 flex flex-col items-center">
          {/* <div className="w-16 h-16 mb-3">
            {/* LOGO */}
            {/* <Logo width="100%" height="100%" /> */}
          {/* </div>  */}
          <h1 className="text-2xl font-bold text-purple-600">MegaBlog</h1>
          <p className="text-xs text-gray-500 mt-1">Share your stories with the world</p>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Create Account</h2>
          <p className="text-sm text-gray-600">Join the community and start sharing stories</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <span className="text-red-600 font-bold text-lg mt-0.5">⚠️</span>
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(create)} className='space-y-6'>
          <div>
            <Input
              label="Full Name"
              placeholder="John Doe"
              {...register("name", {
                required: "Name is required", 
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                <span>✕</span> {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Input
              label="Email"
              placeholder="you@example.com"
              type="email"
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPatern: (value) => /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/.test(value) ||
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
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-200 mt-8"
          >
            Create Account
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
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-semibold text-purple-600 hover:text-purple-700 transition duration-200"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup