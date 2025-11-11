import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Products from './Products';
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import b4 from '../assets/b4.png'


const BestProduct = () => {
    const products = [
        { id: 8, img: b1, heading: "The north coat", newprice: 320, oldprice: 460,discount:"" },
        { id: 9, img: b2, heading: "Gucci duffle bag", newprice: 400, oldprice: 460,discount:""  },
        { id: 10, img: b3, heading: "RGB liquid CPU Cooler", newprice: 320, oldprice: 360,discount:""  },
        { id: 11, img: b4, heading: "Small BookSelf", newprice: 120, oldprice: 160,discount:""  },
        // { id: 5, img: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 120, oldprice: 160 },
        // { id: 6, img: p3, heading: "HAVIT HV-G92 Gamepad", newprice: 120, oldprice: 160 },
        // { id: 7, img: p2, heading: "HAVIT HV-G92 Gamepad", newprice: 120, oldprice: 160 },
    ];
    return (
        <div className='w-[90%] mx-auto my-10 space-y-5 '>
            <div className='flex gap-5 '>
                <div className='w-5 bg-[#DB4444] h-10'></div>
                <p className='text-[#DB4444] font-semibold text-2xl'>This Month</p>
            </div>
            <div className='flex flex-wrap justify-center  md:justify-between gap-5 items-center '>
                <div className='flex justify-between items-center gap-5'>
                    <p className='text-3xl font-semibold'>Best Selling Products</p>

                </div>
                <div className='flex justify-center items-center gap-5'>
                    <button className='bg-[#DB4444] w-30 h-10 text-white rounded-md font-semibold cursor-pointer hover:bg-red-600'>View All </button>
                </div>
            </div>
            <div className=' flex flex-wrap justify-center sm:justify-between items-center gap-4  '>
                {products.map((product) => (
                    <div
                        key={product.id}
                        >
                        <Products id={product.id} image={product.img} heading={product.heading} newprice={product.newprice} oldprice={product.oldprice} discount={product.discount} />
                    </div>
                ))}

            </div>

        </div>
    )
}

export default BestProduct