import React from 'react'
import { useState } from 'react'
import sideimage from '../assets/Sideimage.png'
import { AiOutlineShop } from 'react-icons/ai'
import { FaSackDollar } from 'react-icons/fa6'
import {  RiLinkedinLine, RiShoppingBag2Line } from 'react-icons/ri'
import { BiDollarCircle } from 'react-icons/bi'
import Service from '../components/Service'
import men1 from '../assets/men1.png'
import women from '../assets/women.png'
import men2 from '../assets/men2.png'
import { FiTwitter } from 'react-icons/fi'
import { IoLogoInstagram } from 'react-icons/io'
const AboutPage = () => {

  const companyStats = [
    {
      id: 1,
      image: men1,
      icon: [<FiTwitter />, <IoLogoInstagram />, <RiLinkedinLine />],
      name: "Tom Cruise",
      status: "Founder & Chairman",
    },
    {
      id: 2,
      image: women,
      icon: [<FiTwitter />, <IoLogoInstagram />, <RiLinkedinLine />],
      name: "Emma Watson",
      status: "Managing Director",
    },
    {
      id: 3,
      image: men2,
      icon: [<FiTwitter />, <IoLogoInstagram />, <RiLinkedinLine />],
      name: "Will Smith",
      status: "Product Designer",
    },
    {
      id: 4,
      image: men2,
      icon: [<FiTwitter />, <IoLogoInstagram />, <RiLinkedinLine />],
      name: "Will Smith",
      status: "Product Designer",
    },
  ];


  const [current, setCurrent] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(companyStats.length / itemsPerPage);

  const startIndex = current * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleMembers = companyStats.slice(startIndex, endIndex);

  return (
    <div className='w-[90%] mx-auto my-15 overflow-hidden'>
      <div className=" flex flex-col-reverse sm:flex-row gap-10 sm:gap-20 items-center">
        <div className="sm:w-1/2 space-y-5 ">
          <h1 className="text-3xl sm:text-4xl font-semibold">Our Story</h1>
          <p className="text-sm sm:text-base">Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.</p>
          <p className="text-sm sm:text-base">Exclusive has more than 1 Million products to offer, growing fast. It offers a diverse assortment in categories ranging from consumer electronics to fashion.</p>
        </div>
        <div className="sm:w-1/2 relative w-full h-[300px] sm:h-[400px] flex justify-center items-center  ">
          <img src={sideimage} alt="" className="  absolute   w-full h-full object-cover  md:-right-16" />
        </div>
      </div>

      <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { icon: <AiOutlineShop />, title: "10.5k", desc: "Sellers active on our site" },
          { icon: <BiDollarCircle />, title: "10.5k", desc: "Revenue generated" },
          { icon: <RiShoppingBag2Line />, title: "10.5k", desc: "Products sold" },
          { icon: <FaSackDollar />, title: "10.5k", desc: "Revenue in USD" },
        ].map((stat, idx) => (
          <div key={idx} className="border group flex flex-col items-center justify-center gap-3 p-5 hover:bg-red-500 hover:text-white transition-all duration-300">
            <div className='text-3xl w-18 h-18 bg-black group group-hover:bg-[#fff] group-hover:text-black rounded-full border-10 border-gray-300   group group-hover:border-red-400 flex justify-center items-center  text-white'>{stat.icon}</div>
            <h2 className="text-2xl font-bold">{stat.title}</h2>
            <p className="text-center text-sm sm:text-base">{stat.desc}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  my-10">
          {visibleMembers.map((person) => (
            <div
              key={person.id}
              className="shadow-md w-full flex flex-col hover:shadow-lg hover:scale-105 duration-300"
            >
              <div className="group bg-gray-200 w-full h-60 flex justify-center items-center p-2 rounded-t">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-2 my-2 p-3">
                <h1 className="font-semibold text-lg">{person.name}</h1>
                <p className="text-gray-600">{person.status}</p>
                <div className="flex justify-start gap-5 items-center text-lg text-gray-700">
                  {person.icon.map((socialIcon, index) => (
                    <span
                      key={index}
                      className="cursor-pointer hover:text-blue-500"
                    >
                      {socialIcon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3 mb-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index
                ? "bg-[#DB4444] border-2 border-white"
                : "bg-gray-500"
                }`}
            ></button>
          ))}
        </div>
      </div>
      <Service />
    </div>
  )
}

export default AboutPage