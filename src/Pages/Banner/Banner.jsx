import React from 'react';
import banner from '../../assets/Images/banner.png';
import img1 from '../../assets/Images/b1.png'
import img2 from '../../assets/Images/b2.png'
import img3 from '../../assets/Images/b3.png'
import img4 from '../../assets/Images/b4.png'

const Banner = () => {
    return (
        <div className='relative my-12'>
            <img className='w-full' src={banner} alt="" />
            <h2 className='absolute  top-8 left-8 text-white w-full text-4xl'>
                <span>Discover</span><br />
                <span className='font-bold'>Graphic Design Ideas</span> <br />
                <span className='font-bold'>and Services</span> <br />
                <span className='text-3xl'>From branding to marketing</span>
            </h2>
            <div className="absolute bottom-0 form-control w-full flex justify-center">
                <div className="relative w-1/2 mx-auto">
                    <input
                        type="text"
                        className='border border-[#000000] w-full my-5 py-3 text-center text-lg rounded-3xl pr-12'
                        name=""
                        id=""
                        placeholder='Search service, blog, and many more'
                    />
                    <button className="search-button rounded-3xl bg-[#221010] text-white text-xl px-16 py-3 absolute right-0 top-0 mt-5">
                        Search
                    </button>
                </div>
            </div>
            <img className='absolute top-10 left-[500px] w-32 border-4 border-[#000000] ' src={img1} alt="" />
            <img className='absolute top-2 left-[700px] w-32 border-4 border-[#000000] ' src={img2} alt="" />
            <img className='absolute top-10 left-[900px] w-32 border-4 border-[#000000] ' src={img3} alt="" />
            <img className='absolute top-6 left-[1100px] w-32 border-4 border-[#000000] ' src={img4} alt="" />
        </div>
    );
};

export default Banner;
