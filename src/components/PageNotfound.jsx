import React from 'react'
import { Link } from 'react-router-dom'

const PageNotfound = () => {
  return (
    <div className="w-[90%] mx-auto min-h-[60vh] flex flex-col justify-center items-center text-center space-y-6 sm:space-y-8 md:space-y-10">
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold">404 Not Found</h1>
      <p className="text-base sm:text-lg md:text-2xl max-w-xl">
        Your visited page not found. You may go to the home page.
      </p>
      <Link to="/">
        <button className="bg-[#db4444] w-40 sm:w-48 md:w-60 h-10 sm:h-11 md:h-12 text-white rounded-md hover:bg-[#c03c3c] duration-300">
          Back to Home
        </button>
      </Link>
    </div>

  )
}

export default PageNotfound