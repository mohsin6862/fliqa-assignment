import React from 'react';
import img1 from '../../assets/Images/fs1.png'
import img2 from '../../assets/Images/fs2.png'
import img3 from '../../assets/Images/fs3.png'
import img4 from '../../assets/Images/fs4.png'
const Featured = () => {
    return (
        <div className=''>


            <div>
                <h1 className=' font-bold text-3xl mb-2 text-[#4C696D]'>Our Featured Services</h1>
                <p>Discover the range of services provided by FliqaIndia</p>
            </div>

           <div className='my-5 grid grid-cols-4'>
           <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-xl text-center">Pre wedding photoshoot</h2>
                    <hr className='border border-black'/>
                    <p className='text-center text-lg'>Starting at 25000 (one day)</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#4E99A4] text-white w-full">Know More</button>
                    </div>
                </div>
            </div>
           <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-xl text-center">Wedding photoshoot</h2>
                    <hr className='border border-black'/>
                    <p className='text-center text-lg'>Starting at 65000 (one day)</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#4E99A4] text-white w-full">Know More</button>
                    </div>
                </div>
            </div>
           <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-xl text-center">Portfolio photoshoot</h2>
                    <hr className='border border-black'/>
                    <p className='text-center text-lg'>Starting at 25000 (Standred price for 6-8 hours)</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#4E99A4] text-white w-full">Know More</button>
                    </div>
                </div>
            </div>
           <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img src={img4} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-xl text-center">Birthday Baby Folio</h2>
                    <hr className='border border-black'/>
                    <p className='text-center text-lg'>Starting at 15000 (one day)</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#4E99A4] text-white w-full">Know More</button>
                    </div>
                </div>
            </div>
           </div>

        </div>
    );
};

export default Featured;