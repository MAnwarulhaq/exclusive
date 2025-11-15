import React, { useState } from 'react';
import frame from '../assets/Frame.png';
import hero from '../assets/hero.png';
import { IoIosArrowForward } from "react-icons/io";
import { GoArrowRight } from 'react-icons/go';

const Herosection = () => {
  const banners = [
    { id: 1, discount: "10%", img: frame },
    { id: 2, discount: "25%", img: frame },
    { id: 3, discount: "40%", img: frame },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full md:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 ">

      <div className="hidden lg:flex col-span-3 h-[420px] bg-white justify-center items-center border-r border-gray-200">
        <ul className="space-y-5 p-5 font-[Poppins] text-sm">
          <li className="flex items-center justify-between cursor-pointer  w-full">
            <span>Women's Fashion</span> <IoIosArrowForward />
          </li>
          <li className="flex items-center justify-between cursor-pointer">
            <span>Men's Fashion</span> <IoIosArrowForward />
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
      <div className='relative col-span-9 bg-black grid grid-cols-1 md:grid-cols-2 text-white mt-5 py-5' >
        <div className='order-2 md:order-1 flex flex-col justify-center items-center '>
          <div className='space-y-4 flex flex-col justify-center md:justify-start items-center md:items-start my-5'>
              <img src={banners[current].img} alt="" />
          <p className="text-lg sm:text-5xl font-semibold">Up to {banners[current].discount}</p>
          <p className="text-lg sm:text-5xl font-semibold">off Voucher</p>
          <button className='border-b text-2xl cursor-pointer'>Shop Now</button>
          </div>
        



        </div>
        <div className=' order-1 md:order-2 flex justify-center items-center'>
          <img src={hero} alt="" />
        </div>
        <div className="flex justify-center gap-3 absolute bottom-2 sm:bottom-8 left-0 right-0">
          {banners.map((_, index) => (
             <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                current === index ? 'bg-[#DB4444] border-2 border-white' : 'bg-gray-500'
              }`}
            ></button>
          ))}
        </div>
      </div>

      <div className="lg:hidden bg-white w-full py-5 ">
        <ul className="grid grid-cols-2 gap-3 text-center text-sm font-[Poppins]">
          <li>Women's Fashion</li>
          <li>Men's Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
    </div>
  );
};

export default Herosection;
