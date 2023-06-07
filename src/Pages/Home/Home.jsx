import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import CreativePlatform from '../CreativePlatform/CreativePlatform';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <CreativePlatform></CreativePlatform>
        </div>
    );
};

export default Home;