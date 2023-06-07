import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import CreativePlatform from '../CreativePlatform/CreativePlatform';
import FindTrustedAssociate from '../FindTrustedAssociate/FindTrustedAssociate';
import Featured from '../Featured/Featured';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <CreativePlatform></CreativePlatform>
            <FindTrustedAssociate></FindTrustedAssociate>
            <Featured></Featured>
            <Banner></Banner>
        </div>
    );
};

export default Home;