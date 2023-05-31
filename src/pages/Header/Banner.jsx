import React from 'react';
import banner from '../../assets/banner/girl-with-ponytails-playing-with-toy_23-2147663659.avif'
import { BsBoxArrowUpRight } from 'react-icons/bs';



const Banner = () => {
    return (
        <div className='md:my-5'>
            <div className='relative'>
                <img className='w-full h-[80vh] object-cover ' src={banner} alt="" />
                <div className='absolute top-0 lef-0 w-full h-full bg-gradient-to-r from-[#151515ce] to-[rgba(21, 21, 21, 0)] text-white'>
                    <h2 className='absolute md:top-48 md:left-32 md:text-5xl text-4xl top-36 left-4 '>it's help to <br /> <span className='text-[#B2A4FF]'>brian growth <br /> for your childrens</span></h2>
                    <button className='bg-[#B2A4FF] hover:bg-[#AA77FF]  py-4 px-6 rounded-md absolute md:top-96 md:left-32 top-72 left-5 flex items-center gap-2'>Explore Now <span><BsBoxArrowUpRight /></span></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;