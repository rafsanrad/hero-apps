import React from 'react';
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';

const MainLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Hero></Hero>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;