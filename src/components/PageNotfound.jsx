import React from 'react'
import { Link } from 'react-router-dom'

const PageNotfound = () => {
  return (
    <div className='w-[90%] mx-auto h-[420px] flex flex-col justify-center items-center space-y-10'>
        <h1 className='text-8xl font-semibold'>404 Not Found</h1>
        <p className='text-2xl'>Your visited page not found. You may go home page.</p>
        <Link to='/'> <button className='bg-[#db4444] w-60 h-12 text-white cursor-pointer'>Back to Home</button></Link>
       

    </div>
  )
}

export default PageNotfound