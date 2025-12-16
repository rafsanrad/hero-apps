
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className='max-w-screen-2xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;