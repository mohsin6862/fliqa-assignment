import React from 'react';
import img from '../../assets/Images/medium-shot-young-people-with-reviews.jpg'
import avater from '../../assets/Images/Ellipse 1.png'

const Testimonials = () => {
    return (
        <div>
            <div className='flex items-center my-8'>
            <div className='w-[30%]'>

                <img src={img} alt="" />

            </div>

            <div className='w-[70%] ml-10'>
                <div className='my-5 flex justify-between'>
                    <div>
                        <h1 className='text-3xl font-bold text-[#416F75]'>Testimonials</h1>
                        <p className='text-xl'>Word from our client's</p>
                    </div>
                    <div>
                        <button className='bg-[#4E99A4]  px-5 rounded-3xl'>google</button>
                        <button className='border px-5 rounded-3xl ml-2'>Facebook</button>
                        <button className='border px-5 rounded-3xl ml-2'>Weddingwire</button>
                        <button className='border px-5 rounded-3xl ml-2'>Wedding Good</button>
                    </div>
                </div >

                <div className='grid grid-cols-4'>
                    <div className='relative bg-[#416F75] w-48 h-72 p-2 mt-10'>
                        <p className='mt-16 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum magnam incidunt inventore dolorem molestiae </p>
                        <img className='absolute -top-10 -right-5' src={avater} alt="" />

                    </div>
                    <div className='relative bg-[#416F75] w-48 h-72 p-2 mt-10'>
                        <p className='mt-16 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum magnam incidunt inventore dolorem molestiae </p>
                        <img className='absolute -top-10 -right-5' src={avater} alt="" />

                    </div>
                    <div className='relative bg-[#416F75] w-48 h-72 p-2 mt-10'>
                        <p className='mt-16 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum magnam incidunt inventore dolorem molestiae </p>
                        <img className='absolute -top-10 -right-5' src={avater} alt="" />

                    </div>
                    <div className='relative bg-[#416F75] w-48 h-72 p-2 mt-10'>
                        <p className='mt-16 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum magnam incidunt inventore dolorem molestiae </p>
                        <img className='absolute -top-10 -right-5' src={avater} alt="" />

                    </div>
                </div>

            </div>
        </div>
            <hr className='mt-5 border border-[#000000]' />
        </div>
    );
};

export default Testimonials;