import React, { useEffect } from 'react';
import NavBer from '../pages/Header/NavBer';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Aos from 'aos';


const Root = () => {
    useEffect(() => {
        Aos.init(
            {
                duration:400,
            }
        )
    }, [])

    return (
        <div>
            <div className='max-w-[1240px] mx-auto px-3'>
                <NavBer />
            </div>
            <div className='md:min-h-[calc(100vh-100px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;