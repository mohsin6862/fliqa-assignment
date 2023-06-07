import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import CreativePlatform from '../CreativePlatform/CreativePlatform';
import FindTrustedAssociate from '../FindTrustedAssociate/FindTrustedAssociate';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <CreativePlatform></CreativePlatform>
            <FindTrustedAssociate></FindTrustedAssociate>
            <Featured></Featured>
        </div>
    );
};

export default Home;