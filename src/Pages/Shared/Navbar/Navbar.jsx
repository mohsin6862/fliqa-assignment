import React from 'react';
import logo from '../../../assets/Images/FliqaIndia-Logo 1.png'
const Navbar = () => {
    return (
        <div className="navbar bg-[#131514] h-[170px]  px-5">
            <div className="">
              
                <a className="btn btn-ghost normal-case text-xl">
                <img src={logo} alt="" />
                    </a>
            </div>
            <div className="navbar-start hidden lg:flex  text-white">
                <ul className="menu menu-horizontal px-1 text-xl">
                    <li><a>Home</a></li>
                    <li><a>Service</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Community</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
               
                <button className='bg-gradient-to-r from-[#4E99A4] to-[#004D58] text-white py-2 px-3 text-xl rounded-3xl'>Sign Up</button>
                <button className='bg-gradient-to-r from-[#4E99A4] to-[#004D58] text-white py-2 px-3 text-xl rounded-3xl ml-5'>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;