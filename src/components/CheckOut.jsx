import React from 'react'
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import bkash from '../assets/Bkash.png'
import visa from '../assets/Visa.png'
import mastercard from '../assets/Mastercard.png'
import nagad from '../assets/Nagad.png'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../store/slice/cartslice';

const CheckOut = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log("Checkout ID:", id);
  const cartItems = useSelector((state) => state.cart.items);

  const productFromId = id ? cartItems.find(item => item.id === parseInt(id)) : null;
  // console.log("Product from ID:", productFromId);

  const subtotal = id
    ? (productFromId ? productFromId.newprice * productFromId.qty : 0)
    : cartItems.reduce((sum, item) => sum + item.newprice * item.qty, 0);

  const itemsToShow = id && productFromId ? [productFromId] : cartItems;

  return (
    <div className='w-[90%] mx-auto my-10'>
      <h1 className='text-3xl'>Billing Details</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <div>
          <form className=' my-5 space-y-4'>
            <label className='text-gray-500'>First Name <span className='text-red-600'>*</span></label>
            <input type="text" className=' w-full h-10 bg-gray-100 px-4' />
            <label className='text-gray-500'>Company Name</label>
            <input type="text" className=' w-full h-10 bg-gray-100 px-4' />
            <label className='text-gray-500'>Street Address <span className='text-red-600'>*</span></label>
            <input type="text" className=' w-full h-10 bg-gray-100 px-4' />
            <label className='text-gray-500'>City/Town <span className='text-red-600'>*</span></label>
            <input type="text" className=' w-full h-10 bg-gray-100 px-4' />
            <label className='text-gray-500'>Phone Number <span className='text-red-600'>*</span></label>
            <input type="number" className=' w-full h-10 bg-gray-100 px-4' />
            <label className='text-gray-500'>Email <span className='text-red-600'>*</span></label>
            <input type="email" className=' w-full h-10 bg-gray-100 px-4' />
            <div className='flex items-center gap-4'>
              <input type="checkbox" className="accent-red-500 size-5" />
              <p>Save this information for faster check-out next time</p>
            </div>
          </form>
        </div>

        <div className='  p-10 bg-white rounded-md shadow-md'>
          {itemsToShow.length > 0 ? (
            itemsToShow.map((item) => (
              <div key={item.id} className='relative group flex justify-between items-center my-4'>
                <div className="flex justify-center md:justify-start items-center gap-3">
                  <img src={item.image || item.img} alt={item.heading} className="w-16 md:w-12" />
                  <h1 className="text-sm md:text-base font-medium">
                    {item.heading} x {item.qty}
                  </h1>
                </div>
                <p>${item.newprice * item.qty}</p>
                <div className="absolute -top-2 -left-5 text-red-500 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  <button onClick={() => dispatch(deleteItem(item.id))}>
                    <IoIosCloseCircleOutline />
                  </button>

                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items found in checkout.</p>
          )}

          <div className="flex justify-between items-center mt-4 text-sm md:text-base">
            <h1>Subtotal:</h1>
            <p>${subtotal}</p>
          </div>
          <hr className="text-[#3D3D3D] my-5" />
          <div className="flex justify-between items-center mt-4 text-sm md:text-base">
            <h1>Shipping:</h1>
            <p>Free</p>
          </div>
          <hr className="text-[#3D3D3D] my-5" />
          <div className="flex justify-between items-center mt-4 text-sm md:text-base font-semibold">
            <h1>Total:</h1>
            <p>${subtotal}</p>
          </div>

          <div className='space-y-3 mt-5'>
            <div className='flex justify-between gap-3 items-center'>
              <div className='flex items-center gap-3'>
                <input type="radio" name="payment" id="bank" className="appearance-none w-5 h-5 border rounded-full cursor-pointer checked:border-black checked:bg-white relative checked:after:content-[''] checked:after:w-2.5 checked:after:h-2.5 checked:after:bg-black checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2" />
                <label htmlFor="bank">Bank</label>
              </div>
              <div className='flex'>
                <img src={bkash} alt="bkash" />
                <img src={visa} alt="visa" />
                <img src={mastercard} alt="mastercard" />
                <img src={nagad} alt="nagad" />
              </div>
            </div>

            <div className='flex gap-3 items-center'>
              <input type="radio" name="payment" id="cash" className="appearance-none w-5 h-5 border rounded-full cursor-pointer checked:border-black checked:bg-white relative checked:after:content-[''] checked:after:w-2.5 checked:after:h-2.5 checked:after:bg-black checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2" />
              <label htmlFor="cash">Cash on delivery</label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mt-5 gap-3">
            <input type="text" placeholder="Coupon Code" className="w-full sm:w-80 h-13 border px-3" />
            <button className="bg-[#db4444] hover:bg-red-600 text-white w-full sm:w-60 h-13 py-2 cursor-pointer">
              Apply Coupon
            </button>
          </div>
          <div className='mt-5'>
            <button className='bg-[#db4444] w-full sm:w-60 h-12 text-white rounded text-xl py-3 cursor-pointer hover:bg-red-600'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut;
