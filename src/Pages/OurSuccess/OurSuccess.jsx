import React from 'react';
import img from '../../assets/Images/ln1.png'
import img1 from '../../assets/Images/ln2.png'
import img2 from '../../assets/Images/ln3.png'
import img3 from '../../assets/Images/ln4.png'


const OurSuccess = () => {
    return (
        <div className='my-12 bg-[#ACCBC7] px-10 py-28'>
            <div className='my-5'>
            <h1 className='text-center text-4xl font-bold text-[#4C696D]'>Our Success </h1>
            <p className='text-center text-xl'>journey of our success </p>
            </div >
           <div className='grid grid-cols-4 gap-0.5'>
           <div className='relative border-2 w-60 h-60 rounded-full bg-white'>
               <img className='absolute top-24 left-10' src={img} alt="" />
               <p className='text-center absolute top-60 font-bold'>Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>
            </div>
    
            <div className='relative border-2 w-60 h-60 rounded-full bg-white'>
               <img className='absolute top-24 left-10' src={img1} alt="" />
               <p className='text-center absolute top-60 font-bold'>Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>
            </div>
            <div className='relative border-2 w-60 h-60 rounded-full bg-white'>
               <img className='absolute top-20 left-0' src={img2} alt="" />
               <p className='text-center absolute top-60 font-bold'>Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>
            </div>
            <div className='relative border-2 w-60 h-60 rounded-full bg-white'>
               <img className='absolute top-16 left-0' src={img3} alt="" />
               <p className='text-center absolute top-60 font-bold'>Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>
            </div>
           </div>
        </div>
    );
};

export default OurSuccess;