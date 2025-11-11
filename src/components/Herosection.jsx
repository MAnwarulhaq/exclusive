import React, { useState } from 'react';
import frame from '../assets/Frame.png';
import hero from '../assets/hero.png';
import { IoIosArrowForward } from "react-icons/io";
import { GoArrowRight } from 'react-icons/go';

const Herosection = () => {
  const banners = [
    { id: 1, discount: "10%", img: hero },
    { id: 2, discount: "25%", img: hero },
    { id: 3, discount: "40%", img: hero },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
      
      <div className="hidden lg:flex col-span-3 h-[420px] bg-white justify-center items-center border-r border-gray-200">
        <ul className="space-y-5 p-5 font-[Poppins] text-sm">
          <li className="flex items-center justify-between cursor-pointer">
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

      <div className="col-span-12 lg:col-span-9 relative h-screen lg:h-[400px] sm:h-[450px] sm:p-5 gap-2">
        <div className="bg-black text-white h-full flex flex-col-reverse sm:flex-row justify-around items-center   transition-all duration-700">
          
          <div className="space-y-6 sm:space-y-10 text-center sm:text-left">
            <img src={frame} alt="" className="mx-auto sm:mx-0 w-[120px] sm:w-auto" />
            <div className="space-y-2 sm:space-y-3">
              <p className="text-3xl sm:text-5xl font-semibold">Up to {banners[current].discount}</p>
              <p className="text-3xl sm:text-5xl font-semibold">off Voucher</p>
            </div>

            <div className="flex justify-center sm:justify-start items-center gap-2 sm:gap-3 text-xl sm:text-2xl">
              <button className="cursor-pointer hover:text-[#DB4444] transition flex justify-center items-center gap-3">Shop now <GoArrowRight className='mt-1'/></button>
              
            </div>
          </div>

          <div className="w-[200px] sm:w-[300px] md:w-[350px]">
            <img src={banners[current].img} alt="hero" className="w-full object-contain" />
          </div>
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

      <div className="lg:hidden bg-white w-full py-5 border-t border-gray-200">
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
