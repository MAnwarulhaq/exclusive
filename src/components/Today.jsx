import React, { useState, useEffect } from 'react'
import Products from './Products';
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Today = () => {
  const products = [
    { id: 1, img: p4 ,heading:"HAVIT HV-G92 Gamepad"  ,newprice:990,oldprice:1000 ,discount: 30 },
    { id: 2, img: p3 ,heading:"AK-900 Wired Keyboard" ,newprice:1120,oldprice:1160 ,discount: 10 },
    { id: 3, img: p2 ,heading:"IPS LCD Gaming Monitor" ,newprice:520,oldprice:560 ,discount: 20 },
    { id: 4, img: p1 ,heading:"S-Series Comfort Chair " ,newprice:120,oldprice:160 ,discount: 25 },
    { id: 5, img: p1 ,heading:"HAVIT HV-G92 Gamepad" ,newprice:2000,oldprice:2200 ,discount: 25 },
    { id: 6, img: p3 ,heading:"HAVIT HV-G92 Gamepad" ,newprice:110,oldprice:160 , },
    { id: 7, img: p2 ,heading:"HAVIT HV-G92 Gamepad" ,newprice:90,oldprice:110 ,discount: 30 },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4); 

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {     
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) { 
        setItemsToShow(2);
      } else {                              
        setItemsToShow(4);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

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

  const visibleProducts = products.slice(startIndex, startIndex + itemsToShow);

  return (
    <div className= 'w-[90%] mx-auto my-5  overflow-hidden space-y-5'>
      <div className='flex gap-5 '>
        <div className='w-5 bg-[#DB4444] h-10 rounded'></div>
        <p className='text-[#DB4444] font-semibold text-2xl'>Today's</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <p className='text-2xl md:text-4xl font-semibold'>Flash Sales</p>
          <div className='flex flex-wrap justify-between items-center'>
            <div>
              <p className='font-semibold'>Days</p>
              <p className='text-2xl font-bold'>03</p>
            </div>
            <p className='text-[#E07575] text-4xl'>:</p>
            <div>
              <p className='font-semibold'>Hours</p>
              <p className='text-2xl font-bold'>23</p>
            </div>
            <p className='text-[#E07575] text-4xl'>:</p>
            <div>
              <p className='font-semibold'>Minutes</p>
              <p className='text-2xl font-bold'>03</p>
            </div>
            <p className='text-[#E07575] text-4xl'>:</p>
            <div>
              <p className='font-semibold'>Seconds</p>
              <p className='text-2xl font-bold'>56</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center md:justify-end items-center gap-5'>
          <div
            onClick={prevPage}
            className={`bg-gray-100 size-8 flex justify-center items-center rounded-full text-lg cursor-pointer hover:bg-gray-300 ${
              startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <GoArrowLeft />
          </div>
          <div
            onClick={nextPage}
            className={`bg-gray-100 size-8 flex justify-center items-center rounded-full text-lg cursor-pointer hover:bg-gray-300 ${
              startIndex + itemsToShow >= products.length ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <GoArrowRight />

          </div>
        </div>
      </div>

      
      <div className=' flex justify-center md:justify-between items-center gap-4 transition-all duration-500 ease-in-out'>
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className='transition-transform duration-500 ease-in-out transform '>
            <Products id={product.id} image={product.img} heading={product.heading} newprice={product.newprice} oldprice={product.oldprice} discount={product.discount} />
          </div>
        ))}
      </div>

      
      <div className='my-10 flex justify-center items-center'>
        <Link to='/allproducts'>
        <button className='bg-[#DB4444] text-white font-semibold  w-40 h-10 shadow cursor-pointer'>
          View All Products
        </button>
        </Link>
      </div>
      <hr className='bg-gray-50 text-gray-300' />
    </div>
  );
};

export default Today;
