import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Products from './Products';
import pp1 from '../assets/pp1.png'
import pp2 from '../assets/pp2.png'
import pp3 from '../assets/pp3.png'
import pp4 from '../assets/pp4.png'


const Featured = () => {
    return (
        <div className=' my-10  p-5 '>
            <div className='flex gap-5 container w-[90%]  mx-auto '>
                <div className='w-5 bg-[#DB4444] h-10'></div>
                <p className='text-[#DB4444] font-semibold text-2xl'>Featured</p>
            </div>
            <div className='flex flex-wrap justify-center  md:justify-between gap-5 items-center w-[90%] mx-auto my-5 '>
                <div className='flex justify-between items-center gap-5'>
                    <p className='text-2xl font-semibold'>New Arrival</p>

                </div>

            </div>


            <div className='w-[90%] mx-auto grid  grid-cols-1  sm:grid-cols-2 gap-3'>
                <div className='bg-black relative'>
                    <img src={pp1} alt="" className='w-full h-full object-cover' />
                    <div className='absolute bottom-5 left-5 text-white space-y-2 sm:space-y-3 max-w-[50%]'>
                        <h1 className='text-xl sm:text-2xl font-semibold'>PlayStation 5</h1>
                        <p className='text-sm sm:text-base'>Black and White version of the PS5 coming out on sale.</p>
                        <button className='border-b border-white font-semibold hover:text-[#DB4444] transition cursor-pointer'>Shop Now</button>
                    </div>
                </div>
                <div className='grid  grid-rows-2 gap-2   '>
                    <div className=' bg-black grid index-1 grid-cols-1  sm:grid-cols-2 relative px-5'>
                        <div className='relative text-white  '>
                            <div className='w-full sm:w-80 sm:absolute bottom-15 left-10 space-y-3 '>
                                <h1 className='text-xl sm:text-2xl font-semibold'>Women’s Collections</h1>
                                <p>Featured woman collections that give you another vibe.</p>
                                <button className='border-b font-semibold cursor-pointer'>Shop Now</button>
                            </div>

                        </div>

                        <div className='flex justify-end items-end '>
                            <div >
                                <img src={pp2} alt="" className='size-90  ' />
                            </div>


                        </div>





                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>


                        <div className='bg-black relative  overflow-hidden'>
                            <img src={pp3} alt='Speakers' className='w-full h-full object-cover opacity-90' />
                            <div className='absolute bottom-5 left-5 text-white space-y-2 sm:space-y-3 max-w-[80%]'>
                                <h1 className='text-lg sm:text-2xl font-semibold'>Speakers</h1>
                                <p className='text-sm sm:text-base'>Amazon wireless speakers</p>
                                <button className='border-b border-white font-semibold hover:text-[#DB4444] transition cursor-pointer'>Shop Now</button>
                            </div>
                        </div>


                        <div className='bg-black relative  overflow-hidden'>
                            <img src={pp4} alt='Perfume' className='w-full h-full object-cover opacity-90' />
                            <div className='absolute bottom-5 left-5 text-white space-y-2 sm:space-y-3 max-w-[80%]'>
                                <h1 className='text-lg sm:text-2xl font-semibold'>Perfume</h1>
                                <p className='text-sm sm:text-base'>GUCCI INTENSE OUD EDP</p>
                                <button className='border-b border-white font-semibold hover:text-[#DB4444] transition cursor-pointer'>Shop Now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Featured