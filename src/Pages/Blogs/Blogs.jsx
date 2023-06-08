import React from 'react';
import blog1 from '../../assets/Images/blog1.png'
import blog2 from '../../assets/Images/blog2.png'

const Blogs = () => {
    return (
        <div className='my-16 bg-[#A1E3D8] p-10'>
            <div>
                <h1 className=' font-bold text-3xl mb-2 text-[#4C696D]'>Our Blogs</h1>
                <p>Checkout our latest blogs </p>
            </div>

            <div className='flex items-center'>
                <div className='grid grid-cols-2 w-3/4 my-5'>
                    <div className='relative'>
                        <img src={blog1} alt="" />
                        <p className='absolute top-0 left-2 rounded bg-black bg-opacity-25 p-10 text-white'>Featured on: sep15,2021 <br /> <span className='text-3xl font-bold'>Wedding </span><br /> <span className='text-3xl font-bold'>Photography </span> <br /> <span className='text-3xl font-bold'>at Goa</span></p>
                    </div>
                    <div className='relative'>
                        <img src={blog2} alt="" />
                        <p className='absolute top-0 left-2 rounded bg-black bg-opacity-25 p-10 text-white'>Featured on: sep15,2021 <br /> <span className='text-3xl font-bold'>Photography</span><br /> <span className='text-3xl font-bold'> Expectations </span> <br /> <span className='text-3xl font-bold'>vs. Reality</span></p>
                    </div>
                </div>
                <div className='w-[25%]'>
                    <div className='flex justify-between'>
                        <h1 className='font-bold'>Tranding now</h1>
                        <h1>View All</h1>
                    </div>
                    <div className='flex items-center mt-5'>
                        <img className='w-20 h-20' src={blog1} alt="" />
                       <div className='ml-2'>
                       <h1 className='text-sm font-bold'>Wedding Photography at Goa</h1>
                        <p className=' text-xs'>Creative Industries are on the verge of depletion due to COVID-19
                            In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</p>
                            
                       </div>
                    </div>
                    <hr className='mt-2 border border-[#000000]' />
                    <div className='flex items-center mt-5'>
                        <img className='w-20 h-20' src={blog2} alt="" />
                       <div className='ml-2'>
                       <h1 className='text-sm font-bold'>Wedding Photography at Goa</h1>
                        <p className=' text-xs'>Creative Industries are on the verge of depletion due to COVID-19
                            In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</p>
                            
                       </div>
                    </div>
                    <hr className='mt-2 border border-[#000000]' />
                    <div className='flex items-center mt-5'>
                        <img className='w-20 h-20' src={blog1} alt="" />
                       <div className='ml-2'>
                       <h1 className='text-sm font-bold'>Wedding Photography at Goa</h1>
                        <p className=' text-xs'>Creative Industries are on the verge of depletion due to COVID-19
                            In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</p>
                            
                       </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default Blogs;