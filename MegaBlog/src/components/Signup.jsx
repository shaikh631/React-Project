
import React,{useState} from 'react'
import {Button, Input, Logo} from "./index"
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
                // Small delay to ensure account is fully created before login
                await new Promise(resolve => setTimeout(resolve, 500))
                const session = await authService.login({ email: data.email, password: data.password })
                if (session) {
                    console.log("Signup: Login session created. Checking active sessions...")
                    await authService.listSessions() // Diagnostic
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
  return (
    <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)} onClick={() => console.log("Form clicked", errors)}>
                    <div className='space-y-3'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: "Name is required", 
                        })}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            validate: {
                                matchPatern: (value) => /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/.test(value) ||
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
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Signup