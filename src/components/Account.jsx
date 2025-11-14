import React from 'react'

const Account = () => {
    return (
        <div className='w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-12 my-10'>
            <div className='col-span-4 bg-[#ffff] flex flex-col justify-center items-center text-center sm:text-start  sm:justify-start  sm:items-start  '>
                <div className='space-y-3  w-50 sm:w-full '>
                    <h1 className='font-semibold '>Manage My Account</h1>
                    <div className=' text-gray-500 space-y-2  sm:pl-8'>
                        <p>My Profile</p>
                        <p>Address Book</p>
                        <p>My Payment Options</p>
                    </div>
                </div>
                <div className='space-y-3 w-50 sm:w-full '>
                    <h1 className='font-semibold text-lg'>My Orders</h1>
                    <div className='text-gray-500 space-y-2 sm:pl-8'>
                        <p>My Returns</p>
                        <p>My Cancellations</p>
                    </div>

                </div>
                <div className='w-50  sm:w-full '>
                    <h1 className='font-semibold'>My WishList</h1>
                </div>

            </div>
            <div className='col-span-8 bg-[#fff] p-5 shadow space-y-4 '>
                <h1 className='text-lg text-red-500 font-semibold'>Edit Your Profile</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-2 gap-5 '>
                    <div>
                        <label htmlFor="fnmae">First Name</label>
                        <br />
                        <input type="text" name='fname' id='fname' className='bg-gray-100 w-full  h-10 p-3' />
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <br />
                        <input type="text" name="lastname" id="lastname" className='bg-gray-100 w-full  h-10 p-3' />

                    </div>
                    <div >
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="text" name="email" id="email" className='bg-gray-100 w-full h-10 p-3' />

                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <br />
                        <input type="text" name="address" id="address" className='bg-gray-100 w-full  h-10 p-3' />

                    </div>


                </div>
                <div className='space-y-6'>
                    <label htmlFor="" className='font-semibold'>Password Change</label>
                    <br /> <br />
                    <input type="password" name="" id="" placeholder='Current Password' className='bg-gray-100  w-full h-10 p-3' />
                    <br />
                    <input type="password" name="" id="" placeholder='New Password' className='bg-gray-100  w-full h-10 p-3' />
                    <br />
                    <input type="password" name="" id="" placeholder='Confirm New Password' className='bg-gray-100  w-full h-10 p-3' />


                </div>
                <div className='flex flex-col-reverse sm:flex-row sm:flex justify-center sm:justify-end items-end my-5 gap-3'>
                    <button className='w-full sm:w-30 h-12 cursor-pointer '>Cancel</button>
                    <button className='bg-[#db4444] w-60 h-12 text-white rounded cursor-pointer'>Save Cahnge</button>
                </div>

            </div>

        </div>
    )
}

export default Account