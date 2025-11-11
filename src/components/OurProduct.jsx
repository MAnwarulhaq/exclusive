import React, { use } from 'react'
import { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Products from './Products';
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const OurProduct = () => {
    const products = [
        { id: 12, img: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 160, oldprice: 160 },
        { id: 13, img: p2, heading: "AK-900 Wired Keyboard", newprice: 720, oldprice: 160 },
        { id: 14, img: p3, heading: "IPS LCD Gaming Monitor", newprice: 10, oldprice: 160 },
        { id: 15, img: p2, heading: "S-Series Comfort Chair ", newprice: 1660, oldprice: 160 },
        { id: 16, img: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 160, oldprice: 160 },
        { id: 17, img: p3, heading: "HAVIT HV-G92 Gamepad", newprice: 120, oldprice: 160 },
        { id: 18, img: p2, heading: "HAVIT HV-G92 Gamepad", newprice: 150, oldprice: 160 },
        { id: 19, img: p2, heading: "S-Series Comfort Chair ", newprice: 120, oldprice: 160 },
        { id: 20, img: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 2000, oldprice: 160 },
        { id: 21, img: p2, heading: "AK-900 Wired Keyboard", newprice: 130, oldprice: 160 },
        { id: 22, img: p3, heading: "IPS LCD Gaming Monitor", newprice: 820, oldprice: 160 },
        { id: 23, img: p2, heading: "S-Series Comfort Chair ", newprice: 1250, oldprice: 160 },
        { id: 24, img: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 1230, oldprice: 160 },
        { id: 25, img: p3, heading: "HAVIT HV-G92 Gamepad", newprice: 190, oldprice: 160 },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(8);

    const productsToDisplay = products.slice(startIndex, startIndex + itemsToShow);

    const nextPage = () => {
        if (startIndex + itemsToShow < products.length) {
            setStartIndex(prev => prev + 1);
        }
    };
    const prevPage = () => {
        if (startIndex > 0) {
            setStartIndex(prev => prev - 1);
        }
    };


    return (
        <div className='w-[90%] mx-auto my-10  '>
            <div className='flex gap-5 mx-auto '>
                <div className='w-5 bg-[#DB4444] h-10 rounded'></div>
                <p className='text-[#DB4444] font-semibold text-2xl'>Our Products</p> 
                
            </div>
            <div className='flex flex-wrap justify-center  md:justify-between gap-5 items-center my-5 '>
                <div className='flex justify-between items-center gap-5'>
                    <p className='text-2xl font-semibold'>Explore Our Products</p>

                </div>
                <div className='flex justify-center items-center gap-5 relative z-10'>
                   
                        <button onClick={prevPage} className='bg-gray-100 p-2 rounded-full text-lg cursor-pointer hover:bg-gray-300 flex justify-center items-center'>
                            <GoArrowLeft />
                        </button>
                    
                      
                        <button onClick={nextPage}   className='bg-gray-100 p-2 rounded-full text-lg cursor-pointer hover:bg-gray-300 flex justify-center items-center' >
                             <GoArrowRight />
                        </button>
                       
                    
                </div>

            </div>
            <div className=' flex flex-wrap justify-center sm:justify-between items-center gap-4'>
                {productsToDisplay.map((product) => (
                    <div
                        key={product.id}
                        className='transition-transform duration-500 ease-in-out transform '>
                        <Products id={product.id} image={product.img} heading={product.heading} newprice={product.newprice} oldprice={product.oldprice} />
                    </div>
                ))}

            </div>
            <div className=' my-10 flex justify-center items-center'>
                <Link to='/allproducts'>
                <button className='bg-[#DB4444] text-white font-semibold  rounded-md w-40 h-10 shadow cursor-pointer '>View All Products</button>
                </Link>
            </div>

        </div>
    )
}

export default OurProduct