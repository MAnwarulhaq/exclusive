import React from 'react'
import { FaStar } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { addToCart } from '../store/slice/cartslice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToWishlist } from '../store/slice/wishslice';

const Products = ({ id, image, heading, newprice, oldprice, discount }) => {
  const dispatch = useDispatch();
  const handleaddtocart = () => {
    const item = {
      id,
      image,
      heading,
      newprice,
      oldprice,
      discount
    }
    dispatch(addToCart(item))
  }
  const handleaddtowishlist = () => {
    const item = {
      id,
      image,
      heading,
      newprice,
      oldprice,
      discount
    }
    dispatch(addToWishlist(item))
  }
  return (
    <div className=''>

      <div className='shadow w-65 flex flex-col hover:shadow  hover:scale-101 '>
        <div className='relative group bg-gray-200 w-full h-60 flex justify-center items-center p-2 rounded-t'>
          <img src={image} alt="" />
          {discount && (
            <p className="absolute top-3 left-3 px-2 py-1 bg-red-600 rounded-md text-white text-sm">
              -{discount}%
            </p>
          )}
          <div className=' absolute top-5 right-2 space-y-3  '>
            <div className=' bg-[#ffff] size-8 flex justify-center items-center rounded-full '>
              <button
                onClick={handleaddtowishlist}
              >
                <IoMdHeartEmpty className='text-lg  cursor-pointer hover:text-red-500' />
              </button>

            </div>
            <div className=' bg-[#ffff] size-8 flex justify-center items-center rounded-full '>
              <Link to={`/productdetail/${id}`}>
              <IoEyeOutline className=' text-lg cursor-pointer hover:text-blue-500' />
              </Link>
            </div>



          </div>
          <button
            onClick={handleaddtocart}
            className="absolute bottom-0 w-full bg-black text-white h-10 border-b rounded-b font-semibold cursor-pointer block sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300
  "
          >
            Add to Cart
          </button>
        </div>
        <Link to={`/productdetail/${id}`}>
          <div className=' space-y-2 my-2 p-3'>
            <h1 className='font-semibold'>{heading} </h1>
            <div className='flex justify-start items-center gap-3'>
              <p className='text-red-600 text-[20px]'>${newprice}</p>
              <del>${oldprice}</del>
            </div>
            <div className='flex items-center gap-1'>
              <FaStar className='text-[#FFAD33]' />
              <FaStar className='text-[#FFAD33]' />
              <FaStar className='text-[#FFAD33]' />
              <FaStar className='text-[#FFAD33]' />
              (88)
            </div>
            {/* <div className='flex justify-start items-center gap-3'>
            <input type="radio" name="payment" id="cash"
                className="appearance-none w-5 h-5 border rounded-full bg-gray-500  cursor-pointer checked:border-black checked:bg-white relative checked:after:content-[''] checked:after:w-2.5 checked:after:h-2.5 checked:after:bg-gray-500 checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
              />
              <input type="radio" name="payment" id="cash"
                className="appearance-none w-5 h-5 border rounded-full bg-red-500  cursor-pointer checked:border-black checked:bg-white relative checked:after:content-[''] checked:after:w-2.5 checked:after:h-2.5 checked:after:bg-red-500 checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
              />
          </div> */}
          </div>
        </Link>
      </div>


    </div>
  )
}

export default Products