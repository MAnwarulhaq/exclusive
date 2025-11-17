import React from 'react'
import { useState } from 'react';
// import Products from './Products';
// import p1 from '../assets/p1.png'
// import p2 from '../assets/p2.png'
// import p3 from '../assets/p3.png'
import { FaStar } from 'react-icons/fa6';
import JustForYou from './JustForYou';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from '../store/slice/wishslice';
import { addToCart } from '../store/slice/cartslice';
import { Link } from 'react-router-dom';


const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  console.log(wishlist);
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsToShow, setItemsToShow] = React.useState(4);

  const updateItemsToShow = wishlist.slice(currentIndex, currentIndex + itemsToShow);
  const nextPage = () => {
    if (currentIndex + itemsToShow < wishlist.length) {
      setCurrentIndex(prev => prev + 1);
    }
  };
  const prevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };
  return (
    <div className=''>
    
    <div className='w-[90%] mx-auto my-5 overflow-hidden '>

      <div className='flex flex-wrap justify-center md:justify-between gap-5 items-center  my-5'>
        <div className='flex justify-between items-center gap-27 flex-wrap'>
          <p className='text-2xl '>Wishlist {(wishlist.length)}</p>

        </div>

        <div className='flex justify-center items-center gap-5'>

          <div className='w-50 h-12 border flex justify-center items-center'>
            <button>Move All to Bag</button>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center lg:justify-start items-center gap-8 transition-all duration-500 ease-in-out py-4 ">
        {updateItemsToShow.map((product) => (
          <div
            key={product.id}
            className="shadow w-65 flex flex-col hover:scale-101 transition-transform duration-300"
          >
            <div className="relative group bg-gray-200 w-full h-60 flex justify-center items-center p-2 rounded-t">
              <img src={product.image} alt={product.heading} />

              {product.discount && (
                <p className="absolute top-3 left-3 px-2 py-1 bg-red-600 rounded-md text-white text-sm">
                  -{product.discount}%
                </p>
              )}

              <div className="absolute top-3 right-2 space-y-3">
                <div className="bg-white size-8 flex justify-center items-center rounded-full shadow">
                  <button onClick={() => dispatch(removeFromWishlist(product.id))}>
                    <RiDeleteBinLine className='text-lg cursor-pointer hover:text-red-500' />

                  </button>
                </div>
              </div>
              
              <button className="hidden absolute bottom-0 w-full bg-black text-white h-10 rounded-b font-semibold cursor-pointer group-hover:block"
              onClick={()=>dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
            </div>
              <Link to={`/productdetail/${product.id}`}>
            <div className="space-y-2 my-2 p-3">
              <h1 className="font-semibold">{product.heading}</h1>
              <div className="flex justify-start items-center gap-3">
                <p className="text-red-600 text-[20px] font-semibold">${product.newprice}</p>
                <del className="text-gray-500">${product.oldprice}</del>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <FaStar className="text-[#FFAD33]" />
                <FaStar className="text-[#FFAD33]" />
                <FaStar className="text-[#FFAD33]" />
                <FaStar className="text-[#FFAD33]" />
                (88)
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center justify-center gap-5'>
        <div>
           {
          wishlist.length === 0 && <h1 className='text-2xl font-semibold my-10'>Your Wishlist is Empty</h1>
        }
        </div>
        <div className='  w-full flex justify-center items-center gap-5'>
           <button className='size-3 bg-red-500 rounded-full cursor-pointer' onClick={prevPage}></button>
        <button className='size-3 bg-red-500 rounded-full cursor-pointer' onClick={nextPage}></button>
        </div>
       


       



      </div>
    
    </div>
      <JustForYou />
    </div>
  )
}

export default WishList