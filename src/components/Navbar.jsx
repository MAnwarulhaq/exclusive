import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import { GoHeart } from 'react-icons/go';
import { BsCart3 } from 'react-icons/bs';
import { LuUser } from 'react-icons/lu';
import { CiMenuBurger } from 'react-icons/ci';
import { MdClose, MdOutlineCancel } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiLogOut } from 'react-icons/bi';
import { IoIosStarOutline } from 'react-icons/io';
import { FiShoppingBag } from 'react-icons/fi';
import { set } from 'react-hook-form';
const Navbar = () => {
  const signup = localStorage.getItem("signup");
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.items.reduce((total, item) => total + item.qty, 0));
  const wishlist = useSelector((state) => state.wishlist.items);




  return (
    <>
      {
        signup ? (<nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="flex justify-between items-center w-[90%] mx-auto py-3">
            <Link to="/">
            <h1 className="font-bold text-2xl text-black">Exclusive</h1>
            </Link>

            <ul className="hidden lg:flex items-center gap-10 font-[Poppins] text-lg text-gray-700">
              <Link to="/" className="border-b">
                Home
              </Link>
              <Link to="/contact" className=" ">
                Contact
              </Link>
              <Link to="/about" className=" ">
                About
              </Link>
              <Link to="/signup" className="  ">
                Sign Up
              </Link>
            </ul>

            <div className="hidden lg:flex items-center gap-5">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <input
                  type="search"
                  placeholder="What are you looking for?"
                  className="w-60 h-9 pl-3 pr-8 text-sm outline-none bg-transparent"
                />
                <IoSearchOutline className="absolute right-2 top-2.5 text-lg text-gray-500" />
              </div>

              <div className="flex items-center gap-4 text-2xl text-gray-700">
                <div className='relative'>
                  <Link to="/wishlist" className="hover:text-red-500 transition">
                    <GoHeart />
                  </Link>
                  <span className="absolute -top-2 -right-2 bg-red-500  text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                </div>

                <div className="relative">
                  <Link to="/cart" className="hover:text-red-500 transition">
                    <BsCart3 />
                  </Link>
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                </div>

                {/* <Link to="/useraccount" className="hover:text-red-500 transition">
                  <LuUser />
                </Link> */}
                <div className="relative">
                  <button
                    className={`text-2xl focus:outline-none size-10 ${open ? ('bg-red-600 text-white') : ("text-black ")} rounded-full  items-center flex justify-center cursor-pointer `}
                    onClick={() => setOpen(!open)}
                  // className=" text-2xl hover:text-black focus:outline-none size-10 rounded-full bg-red-600 items-center flex justify-center text-white"

                  >
                    <LuUser />
                  </button>

                  {open && (
                    <div className="absolute right-0 mt-2 w-48 bg-black/20 backdrop-blur-sm rounded-md shadow-lg border border-gray-700">
                      <ul className="py-2 text-sm text-white">
                        <li className="px-4  py-2 hover:bg-gray-700">
                          <Link to="/useraccount" >
                            <button className='cursor-pointer flex items-center gap-2 ' onClick={() => setOpen(!open)}>
                              <LuUser className='text-lg  ' /> <p> Manage My Account</p>
                            </button>


                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                          <FiShoppingBag className='text-lg  ' /> <p> My Order</p>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2">

                          <MdOutlineCancel className='text-lg  ' /> <p>    My Cancellations </p>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2">
                          <IoIosStarOutline className='text-lg  ' /> <p> My Reviews</p>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white flex items-center gap-2">
                          <BiLogOut className='text-lg  ' /> <p>Logout</p>
                        </li>
                      </ul>
                    </div>

                  )}
                </div>
              </div>
            </div>

            <button
              className="block lg:hidden text-3xl text-gray-800"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <MdClose /> : <RxHamburgerMenu />}
            </button>
          </div>

          {menuOpen && (
            <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
              <ul className="flex flex-col items-center gap-5 py-5 font-[Poppins] text-lg text-gray-800">
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
              </ul>

              <div className="flex justify-center gap-6 py-3 text-2xl text-gray-700 border-t">
                <div className='relative'>
                  <Link to="/wishlist" className="hover:text-red-500 transition">
                    <GoHeart />
                  </Link>
                  <span className="absolute -top-2 -right-2 bg-red-500  text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                </div>
                <div className="relative">
                  <Link to="/cart" className="hover:text-red-500 transition">
                    <BsCart3 />
                  </Link>
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                </div>
                <Link to="/useraccount"><LuUser /></Link>
              </div>
            </div>
          )}
        </nav>) : (
          <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="flex justify-between items-center w-[90%] mx-auto py-3">
              <h1 className="font-bold text-2xl text-black">Exclusive</h1>

              <ul className="hidden lg:flex items-center gap-10 font-[Poppins] text-lg text-gray-700">
                <Link to="/" className="border-b">
                  Home
                </Link>
                <Link to="/contact" className=" ">
                  Contact
                </Link>
                <Link to="/about" className=" ">
                  About
                </Link>
                <Link to="/signup" className="  ">
                  Sign Up
                </Link>
              </ul>

              <div className="hidden lg:flex items-center gap-5">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-60 h-9 pl-3 pr-8 text-sm outline-none bg-transparent"
                  />
                  <IoSearchOutline className="absolute right-2 top-2.5 text-lg text-gray-500" />
                </div>

                <div className="flex items-center gap-4 text-2xl text-gray-700">
                  <div className='relative'>
                    <Link to="/wishlist" className="hover:text-red-500 transition">
                      <GoHeart />
                    </Link>
                    <span className="absolute -top-2 -right-2 bg-red-500  text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  </div>
                  <div className="relative">
                    <Link to="/cart" className="hover:text-red-500 transition">
                      <BsCart3 />
                    </Link>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  </div>

                  <Link to="/useraccount" className="hover:text-red-500 transition">
                    {/* <LuUser /> */}
                  </Link>
                </div>
              </div>

              <button
                className="block lg:hidden text-3xl text-gray-800"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <MdClose /> : <RxHamburgerMenu />}
              </button>
            </div>

            {menuOpen && (
              <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
                <ul className="flex flex-col items-center gap-5 py-5 font-[Poppins] text-lg text-gray-800">
                  <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                  <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                  <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
                </ul>

                <div className="flex justify-center gap-6 py-3 text-2xl text-gray-700 border-t">
                  <div className='relative'>
                    <Link to="/wishlist" className="hover:text-red-500 transition">
                      <GoHeart />
                    </Link>
                    <span className="absolute -top-2 -right-2 bg-red-500  text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  </div>
                  <div className="relative">
                    <Link to="/cart" className="hover:text-red-500 transition">
                      <BsCart3 />
                    </Link>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  </div>
                  {/* <Link to="/useraccount"><LuUser /></Link> */}
                </div>
              </div>
            )}
          </nav>
        )
      }
    </>

  );
};

export default Navbar;
