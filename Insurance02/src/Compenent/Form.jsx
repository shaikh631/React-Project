import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log('Form Data:', data)
  }

  return (
    <div className='w-full mx-auto max-w-sm'>
        <div className='bg-amber-50 rounded-2xl shadow-white p-8'>
            <div className='mb-8 flex flex-col items-center'>
            <h1 className='text-2xl font-bold text-olive-500 mt-1'>Insurance Form</h1>
             <p className="text-xs text-gray-500 mt-1">Share your stories with the world</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className=' space-y-6'>
                <div>
                    <Input
                    label = 'Full Name'
                    placeholder = 'Ayan Shaikh'
                    type = 'text'
                    {...register('fullName', { required: 'Full Name is required' })}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                        <span>✕</span> {errors.fullName.message}
                      </p>
                    )}
                </div>
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

            <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">Country</label>
          <div className="mt-2 grid grid-cols-1">
            <select id="country" {...register('country', { required: 'Country is required' })} autoComplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
              <option>Saudi Arabia</option>
              <option>United Arab Emirates</option>
                <option>India</option>
                <option>China</option>
                <option>Japan</option>
                <option>Germany</option>
                <option>France</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414l-2.293 2.293A1 1 0 014.293 6.707l3-3A1 1 0 0110 3z" clipRule="evenodd" />
              </svg>
            </span>
          </div>    

            <div className="col-span-full">
          <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">About</label>
          <div className="mt-2">
            <textarea id="about" rows="3" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="Write a few sentences about yourself." {...register('about', { required: 'Please tell us about yourself' })}></textarea>
          </div>
          <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
          {errors.about && (
            <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
              <span>✕</span> {errors.about.message}
            </p>
          )}
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Submit
        </button>
            </form>
        </div>
    </div>
  )
}


export default Form