import React from 'react';
import img4 from '../assets/signup.png';
import google from '../assets/google.png'; 
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const navigate = useNavigate();
    useEffect(() => {
    const isSignedUp = localStorage.getItem("signup");
    if (isSignedUp) {
      navigate("/"); 
    }
  }, [navigate]);

  function signup (){
      
      localStorage.setItem("signup",true);
      localStorage.setItem("login",true)
      navigate("/");
      alert("Signup Successful");
  }
  
  return (
    // <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen">


    //   <div className="relative md:col-span-7 flex justify-center items-center ">
    //     <img
    //       src={img4}
    //       alt="Sign Up Illustration"
    //       className=" sm:absolute left-0 w-full md:w-[90%] h-[500px] "
    //     />
    //   </div>

    //   <div className="md:col-span-5 flex flex-col justify-center items-center px-6 py-10">
    //     <div className="w-full max-w-sm space-y-6">
    //       <h1 className="text-3xl font-bold font-[Inter] text-gray-800">
    //         Create an account
    //       </h1>
    //       <p className="text-gray-600">Enter your details below</p>

    //       <input
    //         type="text"
    //         placeholder="Name"
    //         className="border-b border-gray-300 w-full h-10 p-2 outline-none focus:border-black transition"
    //       />
    //       <input
    //         type="email"
    //         placeholder="Email or Phone number"
    //         className="border-b border-gray-300 w-full h-10 p-2 outline-none focus:border-black transition"
    //       />
    //       <input
    //         type="password"
    //         placeholder="Password"
    //         className="border-b border-gray-300 w-full h-10 p-2 outline-none focus:border-black transition"
    //       />

    //       <button className="bg-[#DB4444] text-white w-full h-10 rounded mt-3 hover:bg-[#c33a3a] transition">
    //         Create Account
    //       </button>

    //       <div className="flex justify-center items-center gap-3 border w-full h-10 rounded mt-4 hover:bg-gray-50 transition">
    //         <img src={google} alt="Google" className="w-5 h-5" />
    //         <p className="text-gray-700 text-sm font-medium">Sign up with Google</p>
    //       </div>

    //       <div className="flex justify-center items-center gap-2 mt-4">
    //         <p className="text-gray-600 text-sm">Already have an account?</p>
    //         <Link to='/login'>
    //             <button className="border-b border-gray-600 text-sm hover:text-[#DB4444] cursor-pointer">
    //           Login
    //         </button>
    //         </Link>

    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
     <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[420px] my-5">
  <div className="w-full h-[250px] md:h-[400px] bg-[#cbe4e9] flex justify-center md:justify-end items-center overflow-hidden">
    <img
      src={img4}
      alt="Signup illustration"
      className="w-[80%] md:w-full h-full object-contain"
    />
  </div>

  <div className="w-full flex justify-center items-center py-8 px-4 md:px-0">
    <div className="w-full sm:w-[90%] md:w-80 space-y-2">
      <h1 className="text-2xl md:text-3xl font-bold font-[Inter] text-gray-800 text-center md:text-left">
        Create an account
      </h1>
      <p className="text-gray-600 text-center md:text-left">
        Enter your details below
      </p>

      <input
        type="text"
        placeholder="Name"
        className="border-b border-gray-300 w-full h-10 p-2 outline-none focus:border-black transition"
      />
      <input
        type="email"
        placeholder="Email or Phone number"
        className="border-b border-gray-300 w-full h-10 p-2 outline-none focus:border-black transition"
      />
      <input
        type="password"
        placeholder="Password"
        className="border-b border-gray-300 w-full h-10 p-2 outline-none focus:border-black transition"
      />

      <button className="bg-[#DB4444] text-white w-full h-10 rounded mt-3 hover:bg-[#c33a3a] transition cursor-pointer"
      onClick={()=>signup()}>
        Create Account
      </button>

      <div className="flex justify-center items-center gap-3 border w-full h-10 rounded mt-4 hover:bg-gray-50 transition">
        <img src={google} alt="Google" className="w-5 h-5" />
        <p className="text-gray-700 text-sm font-medium">
          Sign up with Google
        </p>
      </div>

      <div className="flex justify-center items-center gap-2 mt-4 text-center">
        <p className="text-gray-600 text-sm">Already have an account?</p>
        <Link to="/login">
          <button className="border-b border-gray-600 text-sm hover:text-[#DB4444] cursor-pointer">
            Login
          </button>
        </Link>
      </div>
    </div>
  </div>
     </div>



      </>
      );
};

      export default SignUp;
