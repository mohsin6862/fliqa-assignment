import React from 'react';
import img1 from '../../assets/Images/cp1.jpg'
import img2 from '../../assets/Images/cp2.jpg'

const CreativePlatform = () => {
   

    return (
        <div className='my-8'>
            <div className='text-center'>
                <h1 className='text-6xl tracking-widest'>India's Leading Creative Platform</h1>
                <p className='mt-5 text-[#4C696D] text-3xl'>Experience hassle-free bookings. Trusted by 2500+ Customers</p>
                <div className="form-control w-full flex justify-center">
                    <div className="relative w-1/2 mx-auto">
                        <input type="text" className='border border-[#000000] w-full my-5 py-3 text-center text-lg rounded-3xl pr-12' name="" id="" placeholder='Search service blog and many more' />
                        <button className="search-button rounded-3xl bg-[#221010] text-white text-xl  px-16 py-3 absolute right-0 top-0 mt-5 ">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div>

                <div className='grid grid-cols-4 mt-5'>
                    <div className='flex'>
                    <img className='w-20 h-20' src={img1} alt="" />
                   
                   <div className='ml-2 items-center'>
                   <h1 className='font-bold text-xl'>Verified Reviews</h1>
                    <p>For Verified reviews</p>
                   </div>
                   </div>
                    <div className='flex'>
                    <img className='w-20 h-20' src={img2} alt="" />
                   
                   <div className='ml-2 items-center'>
                   <h1 className='font-bold text-xl'>Top Article</h1>
                    <p>Help you to decide</p>
                   </div>
                   </div>
                    <div className='flex'>
                    <img className='w-20 h-20' src={img1} alt="" />
                   
                   <div className='ml-2 items-center'>
                   <h1 className='font-bold text-xl'>Write share and win contest</h1>
                    <p>Earn cash reviews</p>
                   </div>
                   </div>
                    <div className='flex'>
                    <img className='w-20 h-20' src={img1} alt="" />
                   
                   <div className='ml-2 items-center'>
                   <h1 className='font-bold text-xl'>MouthShut for Brands</h1>
                    <p>Request a demo</p>
                   </div>
                   </div>
                </div>

            </div>
            <hr className='mt-5 border border-[#000000]' />
           
        </div>
    );
};

export default CreativePlatform;
