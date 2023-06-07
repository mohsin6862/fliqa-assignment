import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import CreativePlatform from '../CreativePlatform/CreativePlatform';
import FindTrustedAssociate from '../FindTrustedAssociate/FindTrustedAssociate';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <CreativePlatform></CreativePlatform>
            <FindTrustedAssociate></FindTrustedAssociate>
        </div>
    );
};

export default Home;