import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  if (location.pathname === '/') return null

  return (
    <div className=" w-[90%] mx-auto py-2  text-sm my-5">
      <nav className="flex items-center space-x-2 text-gray-700">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1

          return (
            <div key={to} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="capitalize text-gray-500">{value}</span>
              ) : (
                <Link to={to} className="text-blue-600 hover:underline capitalize">
                  {value}
                </Link>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export default Breadcrumbs
