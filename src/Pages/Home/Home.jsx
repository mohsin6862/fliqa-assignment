import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import CreativePlatform from '../CreativePlatform/CreativePlatform';
import FindTrustedAssociate from '../FindTrustedAssociate/FindTrustedAssociate';
import Featured from '../Featured/Featured';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import OurSuccess from '../OurSuccess/OurSuccess';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import RealWedding from '../RealWedding/RealWedding';
import Achivement from '../Achivement/Achivement';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <CreativePlatform></CreativePlatform>
            <FindTrustedAssociate></FindTrustedAssociate>
            <Featured></Featured>
            <Banner></Banner>
            <Services></Services>
            <Blogs></Blogs>
            <RealWedding></RealWedding>
            <Testimonials></Testimonials>
            <Achivement></Achivement>
            <OurSuccess></OurSuccess>
            <Footer></Footer>
        </div>
    );
};

export default Home;