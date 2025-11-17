import React from 'react'
import service1 from '../assets/Services1.png'
import service2 from '../assets/Services2.png'
import service3 from '../assets/Services3.png'


const Service = () => {
  return (
    <div className='my-20 w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'>
            <div className='flex flex-col justify-center items-center space-y-3'>
                <img src={service1} alt="" />
                <h1 className='font-semibold text-lg'>FREE AND FAST DELIVERY</h1>
                <p>Free delivery for all orders over $140</p>
            </div>
             <div className='flex flex-col justify-center items-center space-y-3'>
                <img src={service2} alt="" />
                <h1 className='font-semibold text-lg'>24/7 CUSTOMER SERVICE</h1>
                <p>Friendly 24/7 customer support</p>
            </div>
             <div className='flex flex-col justify-center items-center space-y-3'>
                <img src={service3} alt="" />
                <h1 className='font-semibold text-lg'>MONEY BACK GUARANTEE</h1>
                <p>We reurn money within 30 days</p>
            </div>
    </div>
  )
}

export default Service