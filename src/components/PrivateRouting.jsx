import React from 'react'

const PrivateRouting = ({children}) => {
    const signup = localStorage.getItem("signup");
        if(!signup){
            return window.location.href="/signup";
        }
        
  return (
    <div>
        {children}
    </div>
  )
}

export default PrivateRouting