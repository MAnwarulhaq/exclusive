import React from 'react'
import { IoSendSharp } from "react-icons/io5";
import { RiFacebookLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";

import { FiTwitter } from "react-icons/fi";
import img1 from '../assets/appstore1.png'
import img2 from '../assets/appstore2.png'
import img3 from '../assets/appstore3.png'
import { PiCopyrightLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className='w-full h-auto bg-[#000000] text-white  p-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3'>
                <div className='space-y-5 '>
                    <h1 className=' text-2xl font-semibold '>Exclusive</h1>
                    <p className='text-lg font-semibold'>Subcribe</p>
                    <p>Get 10% off your first order</p>
                    <div className='relative'>
                        <input type="text" name="" id="" className=' border  h-8 rounded-md p-3' placeholder='Enter your name ' />
                        <IoSendSharp className='absolute right-10 top-2' />
                    </div>


                </div>
                <div className='space-y-6  '>
                    <h1 className='text-lg font-semibold'>Support</h1>
                    <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className='space-y-3 '>
                    <h1 className='text-lg font-semibold'>Account</h1>
                    <div>
                        <Link to="/useraccount">
                            <p>My Account</p>
                        </Link>
                    </div>
                    <div>
                        <p>Login / Register</p>
                    </div>
                    <div>
                      <Link to='/cart'>
                            <p>Cart</p>
                        </Link>
                    </div>

                    <div>
                        <Link to='/wishlist'>
                        <p>Wishlist</p>
                        </Link>
                    </div>
                    <div>
                        <p>Shop</p>
                    </div>



                </div>
                <div className='space-y-5  '>
                    <h1 className='text-lg font-semibold'>Quick Link</h1>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className='space-y-4 '>
                    <h1 className='text-lg font-semibold'>Download App</h1>
                    <p>Save $3 with App New User Only</p>
                    <div className='flex gap-3'>
                        <div>
                            <img src={img3} alt="" />
                        </div>
                        <div className='space-y-2'>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                        </div>

                    </div>
                    <div className='flex gap-5  items-center text-lg'>
                        <RiFacebookLine />
                        <FiTwitter />
                        <IoLogoInstagram />
                        <RiLinkedinLine />

                    </div>
                </div>
            </div>
            <hr className='text-[#3D3D3D] my-5' />
            <div className='flex justify-center items-center gap-1 text-[#3D3D3D] '>
                <PiCopyrightLight className='text-xl' />
                <p > Copyright Rimel 2022. All right reserved</p>
            </div>

        </div>
    )
}

export default Footer