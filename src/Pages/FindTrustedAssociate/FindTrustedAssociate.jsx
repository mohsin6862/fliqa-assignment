import React from 'react';
import img1 from '../../assets/Images/Rectangle 171.jpg'
import img2 from '../../assets/Images/fta2.png'
import img3 from '../../assets/Images/fta3.png'
import img4 from '../../assets/Images/fta4.jpg'
import img5 from '../../assets/Images/fta5.png'
import badge from '../../assets/Images/medal-.png'

const FindTrustedAssociate = () => {
    return (
        <div className='my-16 bg-[#A1E3D8] p-10'>
            <div>
                <div className='flex justify-between'>
                    <div>
                        <h1 className=' font-bold text-3xl mb-2 text-[#4C696D]'>Find Trusted Associate</h1>
                        <p>Find the fliqa associate for your spical day</p>
                    </div>
                    <div><p className='text-xl text-[#4C696D]'>See More >></p></div>
                </div>
            </div>

            <div className='grid grid-cols-5 gap-4 mt-5 '>
                <div className=" w-48 h-60 rounded-3xl ">
                    <figure><img className='w-full' src={img1} alt="car!" /></figure>
                    <div className=" text-white p-3 bg-[#2C2C2C]">
                       <div className='flex justify-between'>
                        <div>
                        <h2 className='text-xl'>Name Title</h2>
                        <p>Location</p>
                        </div>
                        <div>
                            <img className='w-10 h-10' src={badge} alt="" />
                        </div>
                       </div>
                    </div>
                </div>
                <div className=" w-48 h-60 ">
                    <figure><img className='w-full' src={img2} alt="car!" /></figure>
                    <div className=" text-white p-3 bg-[#2C2C2C]">
                       <div className='flex justify-between'>
                        <div>
                        <h2 className='text-xl'>Name Title</h2>
                        <p>Location</p>
                        </div>
                        <div>
                            <img className='w-10 h-10' src={badge} alt="" />
                        </div>
                       </div>
                    </div>
                </div>
                <div className=" w-48 h-60 ">
                    <figure><img className='w-full' src={img3} alt="car!" /></figure>
                    <div className=" text-white p-3 bg-[#2C2C2C]">
                       <div className='flex justify-between'>
                        <div>
                        <h2 className='text-xl'>Name Title</h2>
                        <p>Location</p>
                        </div>
                        <div>
                            <img className='w-10 h-10' src={badge} alt="" />
                        </div>
                       </div>
                    </div>
                </div>
                <div className=" w-48 h-60 ">
                    <figure><img className='w-full' src={img4} alt="car!" /></figure>
                    <div className=" text-white p-3 bg-[#2C2C2C]">
                       <div className='flex justify-between'>
                        <div>
                        <h2 className='text-xl'>Name Title</h2>
                        <p>Location</p>
                        </div>
                        <div>
                            <img className='w-10 h-10' src={badge} alt="" />
                        </div>
                       </div>
                    </div>
                </div>
                <div className=" w-48 h-60 ">
                    <figure><img className='w-full' src={img5} alt="car!" /></figure>
                    <div className=" text-white p-3 bg-[#2C2C2C]">
                       <div className='flex justify-between'>
                        <div>
                        <h2 className='text-xl'>Name Title</h2>
                        <p>Location</p>
                        </div>
                        <div>
                            <img className='w-10 h-10' src={badge} alt="" />
                        </div>
                       </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FindTrustedAssociate;