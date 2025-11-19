import React from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import { FaStar } from 'react-icons/fa6'
import { IoEyeOutline } from 'react-icons/io5'
import { addToCart } from '../store/slice/cartslice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const JustForYou = () => {
  const dispatch = useDispatch();
  const products = [
    { id: 26, image: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 120, oldprice: 160, discount: 30 },
    { id: 27, image: p2, heading: "AK-900 Wired Keyboard", newprice: 150, oldprice: 160 },
    { id: 28, image: p3, heading: "IPS LCD Gaming Monitor", newprice: 900, oldprice: 1600 },
    { id: 29, image: p2, heading: "S-Series Comfort Chair ", newprice: 1220, oldprice: 1250 },
  ];

  return (
    <div className=" w-[90%] mx-auto    my-10 overflow-hidden ">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-5 my-5">
        <div className="flex gap-5">
          <div className="w-5 bg-[#DB4444] h-10 rounded"></div>
          <p className="text-2xl font-semibold">Just For You</p>
        </div>
      
          <Link to='/allproducts'>
          <button className='w-40 h-12 border cursor-pointer '>See All</button>
          </Link>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow my-5"
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
                  <IoEyeOutline className="text-lg cursor-pointer hover:text-blue-500" />
                </div>
              </div>

              <button className="hidden absolute bottom-0 w-full bg-black text-white h-10 rounded-b font-semibold cursor-pointer group-hover:block"
              onClick={()=>dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
            </div>
              <Link to= {`/productdetail/${product.id}`} > 

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
    </div>
  );
};

export default JustForYou;
