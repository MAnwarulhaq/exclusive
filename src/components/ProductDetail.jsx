import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import { GoHeart } from "react-icons/go";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import van from '../assets/van.png'
import iconretrun from '../assets/iconreturn.png'
import JustForYou from "./JustForYou";
import { useDispatch } from "react-redux";
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import b4 from '../assets/b4.png'
import { addToCart,removeFromCart } from "../store/slice/cartslice";

import { IoStar } from "react-icons/io5";


const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const products = [
    { id: 1, image: p4, heading: "HAVIT HV-G92 Gamepad", newprice: 120, oldprice: 160, discount: 30, images: [p4, p2, p3, p1] },
    { id: 2, image: p3, heading: "AK-900 Wired Keyboard", newprice: 120, oldprice: 160, discount: 10 },
    { id: 3, image: p2, heading: "IPS LCD Gaming Monitor", newprice: 120, oldprice: 160, discount: 20 },
    { id: 4, image: p1, heading: "S-Series Comfort Chair ", newprice: 120, oldprice: 160, discount: 25 },
    { id: 5, image: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 120, oldprice: 160, discount: 25 },
    { id: 6, image: p3, heading: "HAVIT HV-G92 Gamepad", newprice: 120, oldprice: 160, },
    { id: 7, image: p2, heading: "HAVIT HV-G92 Gamepad", newprice: 120, oldprice: 160, discount: 30 },
    { id: 8, image: b1, heading: "The north coat", newprice: 320, oldprice: 460, discount: "" },
    { id: 9, image: b2, heading: "Gucci duffle bag", newprice: 400, oldprice: 460, discount: "" },
    { id: 10, image: b3, heading: "RGB liquid CPU Cooler", newprice: 320, oldprice: 360, discount: "" },
    { id: 11, image: b4, heading: "Small BookSelf", newprice: 120, oldprice: 160, discount: "" },
    { id: 12, image: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 160, oldprice: 160 },
    { id: 13, image: p2, heading: "AK-900 Wired Keyboard", newprice: 720, oldprice: 160 },
    { id: 14, image: p3, heading: "IPS LCD Gaming Monitor", newprice: 10, oldprice: 160 },
    { id: 15, image: p2, heading: "S-Series Comfort Chair ", newprice: 1660, oldprice: 160 },
    { id: 16, image: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 160, oldprice: 160 },
    { id: 17, image: p3, heading: "HAVIT HV-G92 Gamepad", newprice: 120, oldprice: 160 },
    { id: 18, image: p2, heading: "HAVIT HV-G92 Gamepad", newprice: 150, oldprice: 160 },
    { id: 19, image: p2, heading: "S-Series Comfort Chair ", newprice: 120, oldprice: 160 },
    { id: 20, image: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 2000, oldprice: 160 },
    { id: 21, image: p2, heading: "AK-900 Wired Keyboard", newprice: 130, oldprice: 160 },
    { id: 22, image: p3, heading: "IPS LCD Gaming Monitor", newprice: 820, oldprice: 160 },
    { id: 23, image: p2, heading: "S-Series Comfort Chair ", newprice: 1250, oldprice: 160 },
    { id: 24, image: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 1230, oldprice: 160 },
    { id: 25, image: p3, heading: "HAVIT HV-G92 Gamepad", newprice: 190, oldprice: 160 },
    { id: 26, image: p1, heading: "HAVIT HV-G92 Gamepad", newprice: 120, oldprice: 160, discount: 30 },
    { id: 27, image: p2, heading: "AK-900 Wired Keyboard", newprice: 150, oldprice: 160 },
    { id: 28, image: p3, heading: "IPS LCD Gaming Monitor", newprice: 900, oldprice: 1600 },
    { id: 29, image: p2, heading: "S-Series Comfort Chair ", newprice: 1220, oldprice: 1250 },

  ];

  const product = products.find((prod) => prod.id === parseInt(id));
  if (!product) {
    return <div className="w-[90%] mx-auto my-10">Product not found.</div>;
  }

  const images = product.images || [product.image];
  // const [selectedImg, setSelectedImg] = useState(p1);
  const [selectedImg, setSelectedImg] = useState(product?.image);

  const [count, setCount] = useState(1);
  // console.log(count);

  const handleIncrease = () => setCount(prev => prev + 1);
  const handleDecrease = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <>

      <div className="w-[90%] mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="flex flex-col-reverse sm:flex-row gap-5 w-[90%] mx-auto my-5">
          <div className="flex sm:flex-col gap-3 sm:w-[20%] justify-center sm:justify-between items-center sm:items-start">
            {images.map((img, index) => (
              <div
                key={index}
                className={`bg-gray-200 p-2 rounded-lg cursor-pointer hover:scale-105 transition `}
                onClick={() => setSelectedImg(img)}
              >
                <img
                  src={img}
                  alt={`thumb-${index}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="w-full sm:w-[80%] bg-gray-200 rounded-lg flex justify-center items-center">
            <img
              src={selectedImg}
              alt="Selected Product"
              className="size-100 object-contain p-3"
            />
          </div>
        </div>

        <div className=" w-[90%] mx-auto space-y-5">
          <h1 className="text-2xl font-semibold">
            {product.heading}
          </h1>
          <div className="flex justify-start items-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <IoStar className="text-orange-400" />
              <IoStar className="text-orange-400" />
              <IoStar className="text-orange-400" />
              <IoStar className="text-orange-400" />
              <IoStar className="text-gray-400" />

            </div>
            <p className="text-sm text-gray-500">(150 Reviews)</p>
            <p>|</p>
            <p className="text-green-500 font-semibold">In Stock</p>
          </div>

          <h2 className="text-3xl ">${product.newprice}</h2>

          <p className="w-[60%">
            PlayStation 5 Controller Skin. High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal. Pressure
            sensitive.
          </p>
          <hr />

          <div className="space-y-2 flex justify-start items-center gap-2">
            <h3 className="text-2xl">Colours:</h3>
            <div className="flex gap-3">
              <input type="radio" name="payment" id="cash"
                className="appearance-none w-5 h-5 border rounded-full bg-gray-500  cursor-pointer checked:border-black checked:bg-white relative checked:after:content-[''] checked:after:w-2.5 checked:after:h-2.5 checked:after:bg-gray-500 checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
              />
              <input type="radio" name="payment" id="cash"
                className="appearance-none w-5 h-5 border rounded-full bg-red-500  cursor-pointer checked:border-black checked:bg-white relative checked:after:content-[''] checked:after:w-2.5 checked:after:h-2.5 checked:after:bg-red-500 checked:after:rounded-full checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
              />
            </div>
          </div>

          <div className="space-y-2 flex justify-start items-center gap-5">
            <h3 className="text-2xl">Size:</h3>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border border-gray-400 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-5  mt-5">

            <div className="flex border rounded overflow-hidden  text-center  w-40 h-10">
              <button
                onClick={handleDecrease}
                className="flex-1 text-center text-2xl hover:text-white font-semibold hover:bg-red-500 transition border-r pl-3"
              >
                <FaMinus />
              </button>
              <p className="flex-1 text-center py-1 text-lg ">{count}</p>
              <button
                onClick={handleIncrease}
                className="flex-1 text-center text-2xl hover:text-white font-semibold hover:bg-red-500 transition border-l pl-3"
              >
                <FaPlus className="" />

              </button>
            </div>
            <Link to={`/checkout/${product.id}`}>
              <button className="bg-red-500 w-60 text-white px-6 py-2 rounded hover:bg-red-600 transition font-medium"

                onClick={() => dispatch(addToCart({ ...product, qty: count }))}
              >
                Buy Now
              </button>
            </Link>

            <div className="size-10 border rounded flex justify-center items-center text-2xl hover:bg-red-500 hover:text-white transition cursor-pointer ">
              <GoHeart />
            </div>

          </div>

          <div className=" border space-y-3">
            <div className="flex justify-start items-center gap-5 p-4 border-b">
              <img src={van} alt="" />
              <div className="">
                <p className="font-semibold">Free Delivery</p>
                <p className="border-b font-semibold">
                  Enter your postal code for Delivery Availability
                </p>

              </div>

            </div>
            <div className="flex justify-start items-center gap-5  p-4 ">
              <img src={iconretrun} alt="" />
              <div className="">
                <p className="font-semibold">Return Delivery</p>
                <p className="font-semibold">
                  Free 30 Days Delivery Returns. <span className=" cursor-pointer border-b">Details</span>
                </p>

              </div>

            </div>

          </div>
        </div>

      </div>
      <JustForYou />

    </>
  );
};

export default ProductDetail;

