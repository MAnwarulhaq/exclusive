import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp, IoIosCloseCircleOutline } from 'react-icons/io'
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from '../store/slice/cartslice';
import { addToCart,removeFromCart,deleteItem } from '../store/slice/cartslice';
import { Link } from 'react-router-dom'


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  // console.log(cartItems)


  const subtotal = cartItems.reduce((sum, item) => sum + item.newprice * item.qty, 0);
  console.log(subtotal);
  // const shippingFee = 100;
  // const total = subtotal + shippingFee;
  const total = subtotal;
  // const [qty, setQty] = useState(cartItems.qty || 1);

  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="hidden md:grid grid-cols-4 bg-white py-5 px-5 text-center font-semibold border-[#3D3D3D]">
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Subtotal</h1>
      </div>
      <div>
        {
          cartItems.map((item) => {
            return (
              <div key={item.id} className="relative group bg-white shadow my-5 px-5  py-4 grid grid-cols-1 md:grid-cols-4  items-center text-center md:text-center gap-5">



                <div  className=" flex justify-center md:justify-start  items-center gap-3">
                  <img src={item.image} alt="Product" className="w-16 md:w-12" />
                  <h1 className="text-sm md:text-base font-medium">{item.heading}</h1>

                  
                </div>

                <div>
                  <h1 className="text-sm md:text-base">${item.newprice}</h1>
                </div>

                <div className="flex justify-center items-center ">
                  <div className="w-24 h-10 rounded border flex justify-around items-center gap-2">
                    <h1>{item.qty}</h1>
                    <div className="flex flex-col">
                      <button onClick={() => dispatch(addToCart({...item, qty: 1}))}>
                        <IoIosArrowUp />
                      </button>
                      <button
                       onClick={()=>dispatch(removeFromCart(item.id))}
                      >
                        <IoIosArrowDown />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm md:text-base">${item.qty * item.newprice}</p>
                </div>
                
                <div className="absolute top-0 left-2 text-red-500 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    <button onClick={() => dispatch(deleteItem(item.id))}>
                       <IoIosCloseCircleOutline />
                    </button>
                   
                  </div>



              </div>
            )

          })
        }
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-8">
        <button className="border w-full sm:w-40 h-12 flex justify-center items-center cursor-pointer">
          Return To Shop
        </button>
        <button className="border w-full sm:w-40 h-12 flex justify-center items-center cursor-pointer"
          onClick={() => dispatch(clearCart())}>
          Update Cart
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <div className="flex flex-col sm:flex-row  gap-3">
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-full sm:w-60 h-11 border px-3"
          />
          <button className="bg-[#db4444] hover:bg-red-500 text-white w-full sm:w-40 h-11 py-2 cursor-pointer">
            Apply Coupon
          </button>
        </div>

        <div className="flex justify-center lg:justify-end mt-5 lg:mt-0">
          <div className="w-full sm:w-[400px] md:w-[500px] border-2 h-auto p-5 rounded">
            <h1 className="text-lg font-semibold mb-3">Cart Total</h1>
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
              <p>${total}</p>
            </div>
            <div className="flex justify-center items-center mt-5 ">
              <Link to='/checkout'>
              <button className="w-full  sm:w-60 h-12 bg-[#db4444] hover:bg-red-500 text-white py-3 rounded cursor-pointer">
                Process to Checkout
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
