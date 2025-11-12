import React from 'react'
import img4 from '../assets/signup.png'

const Login = () => {
  return (
    <>
      {/* <div className='w-[90%] mx-auto min-h-screen flex flex-col md:flex-row justify-between items-center my-8'>
        
        <div className='relative w-full h-[250px] md:h-screen'>
          <img src={img4} alt="" className=' sm:absolute w-full md:w-[300em] md:h-[30em] md:-left-50' />
        </div>

        <div className='flex flex-col justify-center space-y-8 w-full md:w-auto mt-10 md:mt-0 text-center md:text-left'>
          <h1 className='text-2xl md:text-3xl font-semibold text-[Inter]'>Log in to Exclusive</h1>
          <p className='text-gray-700'>Enter your details below</p>

          <input 
            type="email" 
            placeholder='Email or Phone number' 
            className='border-b w-[90%] md:w-80 h-10 p-3 outline-none mx-auto md:mx-0'
          />
          <input 
            type="password" 
            placeholder='Password' 
            className='border-b w-[90%] md:w-80 h-10 p-3 outline-none mx-auto md:mx-0'
          />

          <div className='flex flex-col sm:flex-row justify-between items-center w-[90%] md:w-80 gap-3 mx-auto md:mx-0'>
            <button className='bg-[#DB4444] text-white w-full sm:w-24 h-10 rounded cursor-pointer hover:bg-[#c03d3d] transition-all'>
              Login
            </button>
            <p className='text-red-500 text-sm cursor-pointer hover:underline'>
              Forget Password?
            </p>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] py-5">
        <div className="w-full h-[250px] md:h-[400px] bg-[#cbe4e9] flex justify-center md:justify-end items-center overflow-hidden">
            <img
              src={img4}
              alt="Signup illustration"
              className="w-[80%] md:w-full h-full object-contain"
            />
          </div>
  <div className="w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-0 py-6">
    <div className="w-full max-w-sm space-y-6">
      <h1 className="text-2xl sm:text-3xl font-semibold font-[Inter] text-center md:text-left">
        Log in to Exclusive
      </h1>

      <p className="text-gray-700 text-center md:text-left">
        Enter your details below
      </p>

      <input
        type="email"
        placeholder="Email or Phone number"
        className="border-b w-full h-10 p-3 outline-none focus:border-[#DB4444] transition-all"
      />

      <input
        type="password"
        placeholder="Password"
        className="border-b w-full h-10 p-3 outline-none focus:border-[#DB4444] transition-all"
      />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 w-full">
        <button className="bg-[#DB4444] text-white w-full sm:w-28 h-10 rounded hover:bg-[#c03d3d] transition-all">
          Login
        </button>

        <p className="text-red-500 text-sm cursor-pointer hover:underline">
          Forget Password?
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Login
