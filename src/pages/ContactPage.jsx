import React from 'react'
import { CiMail } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5'

const ContactPage = () => {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-12 my-10 gap-6">
      
      <div className="p-6 md:col-span-4 bg-white shadow-md rounded-lg space-y-10">
        <div className="space-y-3">
          <div className="flex gap-4 items-center">
            <div className="size-8 rounded-full bg-[#db4444] flex justify-center items-center text-white text-2xl">
              <IoCallOutline />
            </div>
            <p className="font-semibold text-lg">Call To Us</p>
          </div>
          <p className=" text-sm md:text-base">
            We are available 24/7, 7 days a week.
          </p>
          <p className=" text-sm md:text-base">
            Phone: +8801611112222
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <div className="flex gap-4 items-center">
            <div className="size-8 rounded-full bg-[#db4444] flex justify-center items-center text-white text-2xl">
              <CiMail />
            </div>
            <p className="font-semibold text-lg">Write To Us</p>
          </div>
          <p className=" text-sm md:text-base">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className=" text-sm md:text-base">Email: customer@exclusive.com</p>
          <p className=" text-sm md:text-base">Email: support@exclusive.com</p>
        </div>
      </div>

      <div className="md:col-span-8 bg-white shadow-md rounded-lg p-6 space-y-10">
        
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 bg-gray-100 rounded-md px-4 py-2 outline-none text-sm focus:ring-2 focus:ring-[#db4444]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 bg-gray-100 rounded-md px-4 py-2 outline-none text-sm focus:ring-2 focus:ring-[#db4444]"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="flex-1 bg-gray-100 rounded-md px-4 py-2 outline-none text-sm focus:ring-2 focus:ring-[#db4444]"
          />
        </div>

        <div>
          <textarea
            placeholder="Message"
            className="w-full h-40 bg-gray-100 rounded-md p-4 text-sm outline-none resize-none focus:ring-2 focus:ring-[#db4444]"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button className="bg-[#db4444] text-white px-6 py-2 rounded-md hover:bg-red-600 transition-all">
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
