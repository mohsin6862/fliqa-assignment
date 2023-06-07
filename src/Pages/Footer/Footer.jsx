import React from 'react';
import fimg from '../../assets/Images/footer.png'
import fimg2 from '../../assets/Images/footer sub.png'

const Footer = () => {
    return (
        <div className='relative' >
            <img src={fimg} alt="" />
            <h2 className='absolute top-28 left-60 text-white text-4xl'>ULTIMATE <br /> COURSE IN <br /> <span className='text-5xl font-bold '>PHOTOGRAPHY</span></h2>
            <img className='absolute top-16 left-[700px] w-96 h-60 border-4 border-white ' src={fimg2} alt="" />

        </div>
    );
};

export default Footer;