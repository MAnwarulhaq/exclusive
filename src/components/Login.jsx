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
      <div className='grid grid-cols-2 h-[420px] py-5'>
        <div className='w-full h-full  bg-[#cbe4e9] overflow-hidden flex justify-end items-end '>
          <img src={img4} alt=""  className=' w-full h-full object-contain '/>

        </div>
        <div className='w-full h-full  flex flex-col justify-center items-center '>
          <div className='w-80 h-full space-y-8 '>
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
          
        </div>
          
      </div>
    </>
  )
}

export default Login
