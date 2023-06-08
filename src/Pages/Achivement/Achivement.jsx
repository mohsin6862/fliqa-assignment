import React from 'react';
import blog1 from '../../assets/Images/ach1.png'
import blog2 from '../../assets/Images/ach2.png'
import ach1 from '../../assets/Images/sach1.png'

const Achivement = () => {
    return (
        <div className='my-16 bg-[#A1E3D8] p-10 flex items-center'>

            <div className='grid grid-cols-2  bg-[#4E99A4] my-5 px-20 py-10 w-[60%]'>

                <img src={blog1} alt="" />
                <img className='ml-5' src={blog2} alt="" />

            </div>

            <div className='w-[40%] ml-8 grid grid-cols-2 gap-5 '>

                <div className='  '>
                    <img className='w-40 h-12 rounded shadow-2xl' src={ach1} alt="" />
                </div>
                <div className='  '>
                    <img className='w-40 h-12 rounded shadow-2xl' src={ach1} alt="" />
                </div>
                <div className='  '>
                    <img className='w-40 h-12 rounded shadow-2xl' src={ach1} alt="" />
                </div>
                <div className='  '>
                    <img className='w-40 h-12 rounded shadow-2xl' src={ach1} alt="" />
                </div>
                <div className='  '>
                    <img className='w-40 h-12 rounded shadow-2xl' src={ach1} alt="" />
                </div>
                <div className='  '>
                    <img className='w-40 h-12 rounded shadow-2xl' src={ach1} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Achivement;