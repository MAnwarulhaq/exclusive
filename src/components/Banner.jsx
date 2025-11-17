import React from 'react'
import speaker from '../assets/speaker.png'
const Banner = () => {
  return (
    <div className='w-[90%] mx-auto  h-auto md:h-[400px] bg-[#000000] m-5 text-white  grid grid-cols-1 md:grid-cols-2 p-5 gap-5'>
      <div className='  flex justify-center items-center '>
        <div className=' space-y-5 '>
          <p className='text-[#00FF66] font-semibold text-[15px]' >Categories</p>
          <div className='text-lg lg:text-6xl'>
            <p>Enhance Your </p>
            <p>Music Experience</p>
          </div>
          <div className='flex flex-wrap gap-5'>
            <div className='bg-[#ffff] h-15 w-15 rounded-full text-black flex flex-col justify-center items-center'>
              <p className='font-semibold'>23</p>
              <p className='text-[10px]'>Houres</p>
            </div>
            <div className='bg-[#ffff] h-15 w-15 rounded-full text-black flex flex-col justify-center items-center'>
              <p className='font-semibold'>05</p>
              <p className='text-[10px]'>Days</p>
            </div>

            <div className='bg-[#ffff] h-15 w-15  rounded-full text-black flex flex-col justify-center items-center'>
              <p className='font-semibold'>59</p>
              <p className='text-[10px]'>Minutes</p>
            </div>
            <div className='bg-[#ffff] h-15 w-15  rounded-full text-black flex flex-col justify-center items-center'>
              <p className='font-semibold'>35</p>
              <p className='text-[10px]'>Seconds</p>
            </div>
          </div>
          <button className='bg-[#00FF66] text-white w-30 h-10 rounded'>Buy Now!</button>
        </div>

      </div>
      <div className=" relative flex justify-center items-center">

        <div className="hidden sm:block absolute w-full  h-[300px] top-3 rounded-full  bg-gradient-to-tr from-[#303030] to-[#505050]  blur-xl opacity-50 animate-pulse"></div>


        <div className="flex justify-center items-center">
          <img src={speaker} alt="" className=' '/>

        </div>
      </div>


    </div>
  )
}

export default Banner