import React from 'react';
import img1 from '../../assets/Images/rl1.png'
import img2 from '../../assets/Images/rl2.png'
import img3 from '../../assets/Images/rl3.png'
import img4 from '../../assets/Images/rl4.png'
import sub1 from '../../assets/Images/sb1.png'
import sub2 from '../../assets/Images/sb2.png'
import sub3 from '../../assets/Images/sb3.png'

const RealWedding = () => {
    return (
        <div className='my-16  p-10'>
            <div>
                <h1 className=' font-bold text-3xl mb-2 text-[#4C696D]'>Real Weadding</h1>
                <p>List your wedding and browse protfolio </p>
            </div>

            <div className='grid grid-cols-4 mt-8'>
                <div className="card card-compact w-72 bg-[#DDF8F3] shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                   <div className='flex '>
                   <img className='w-24'src={sub1} alt="" />
                    <img className='w-24'src={sub1} alt="" />
                    <img className='w-24'src={sub1} alt="" />
                   </div>
                    <div className="card-body">
                        <h2 className="card-title">Dainy & Roney</h2>
                        <p>38 photos Kettry, Polland</p>
                        
                    </div>
                </div>
                <div className="card card-compact w-72 bg-[#FBDADA] shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                   <div className='flex '>
                   <img className='w-24' src={sub1} alt="" />
                    <img className='w-24' src={sub1} alt="" />
                    <img className='w-24' src={sub1} alt="" />
                   </div>
                    <div className="card-body">
                        <h2 className="card-title">Dainy & Roney</h2>
                        <p>38 photos Kettry, Polland</p>
                        
                    </div>
                </div >
                <div className="card card-compact w-72 bg-[#FFF9D9] shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                   <div className='flex '>
                   <img className='w-24'src={sub1} alt="" />
                    <img className='w-24'src={sub1} alt="" />
                    <img className='w-24'src={sub1} alt="" />
                   </div>
                    <div className="card-body">
                        <h2 className="card-title">Dainy & Roney</h2>
                        <p>38 photos Kettry, Polland</p>
                        
                    </div>
                </div>
                <div className="card card-compact w-72 bg-[#DDE4FF] shadow-xl">
                    <figure><img src={img4} alt="Shoes" /></figure>
                   <div className='flex '>
                   <img className='w-24'src={sub1} alt="" />
                    <img className='w-24'src={sub1} alt="" />
                    <img className='w-24'src={sub1} alt="" />
                   </div>
                    <div className="card-body">
                        <h2 className="card-title">Dainy & Roney</h2>
                        <p>38 photos Kettry, Polland</p>
                        
                    </div>
                </div>
            </div>
            <div className='text-center  my-8'>

            <button className=' text-xl  bg-[#DDF9FF] px-3 py-2 shadow-2xl rounded'>View More Weddings -></button>
            </div>
            <hr className='mt-5 border border-[#000000]' />
        </div>
    );
};

export default RealWedding;