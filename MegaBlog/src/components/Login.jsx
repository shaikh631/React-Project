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
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className='mt-8' onClick={() => console.log("Form validation errors:", errors)}>
             <div className='space-y-3'>
                <Input label = 'Email :'
                placeholder='Enter your email'
                type='email'
                {...register('email' , {
                    required: "Email is required" , 
                    validate :{
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                 />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                <Input
                    label="Password: "
                            type="password"
                             placeholder="Enter your password (min 6 chars, with letter & number)"
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
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                  <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
             </div>
        </form>
        </div>
    </div>
  )
}

export default Login