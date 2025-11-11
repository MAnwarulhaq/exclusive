import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Products from './Products';
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import { CiCamera, CiHeadphones, CiMobile4, CiMonitor } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CgAppleWatch } from 'react-icons/cg';
import { IoCameraOutline, IoWatchOutline } from 'react-icons/io5';
import { PiHeadphonesLight } from 'react-icons/pi';
import { VscGame } from 'react-icons/vsc';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'


const Category = () => {
    const category = [
        { icon: <CiMobile4 />, heading: "Phones" },
        { icon: <CiMonitor />, heading: "Computers" },
        { icon: <IoWatchOutline />, heading: "SmartWatch" },
        { icon: <CiCamera />, heading: "Camera" },
        { icon: <CiHeadphones />, heading: "HeadPhones" },
        { icon: <VscGame />, heading: "Gaming" },
    ]
    return (
        <div className=' w-[90%] mx-auto my-5'>
            <div className='flex gap-5 '>
                <div className='w-5 bg-[#DB4444] h-10 rounded'></div>
                <p className='text-[#DB4444] font-semibold text-2xl space-x-3'>Categories</p>
            </div>
            <div className='flex flex-wrap justify-center  md:justify-between items-center my-5 gap-5'>
                <div className='flex justify-between items-center gap-5'>
                    <p className='text-2xl font-semibold'>Browse By Category</p>

                </div>
                <div className='flex justify-center items-center gap-5'>
                    <div

                        className={`bg-gray-100 size-8 flex justify-center items-center rounded-full text-lg cursor-pointer hover:bg-gray-300 `}
                    >
                        <GoArrowLeft />
                    </div>
                    <div

                        className={`bg-gray-100 size-8 flex justify-center items-center rounded-full text-lg cursor-pointer hover:bg-gray-300 `}
                    >
                        <GoArrowRight />

                    </div>
                </div>
            </div>
            <div className='  flex flex-wrap justify-center sm:justify-between items-center gap-5'>

                {category.map((item, index) => (
                    <div key={index} className="border border-gray-300 rounded flex flex-col justify-center items-center w-full  sm:w-40 h-40 hover:bg-red-500 hover:text-white  cursor-pointer space-y-5">
                        <div className='text-3xl'> {item.icon}</div>
                        <p>{item.heading}</p>
                    </div>
                ))}








            </div>

            <hr className='text-gray-300 my-10' />
        </div>
    )
}

export default Category