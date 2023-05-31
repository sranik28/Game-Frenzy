import React from 'react';
import errorimg from '../assets/error/error (2).png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center items-center flex-col h-screen'>
            <img className='w-[500px] mt-12' src={errorimg} alt="" />
            <h1 className='font-bold text-center text-5xl my-8'>404</h1>
            <p className='text-center text-3xl font-bold mt-5'><span className='text-[#B2A4FF]'>Oppss </span>server is not found</p>
            <Link to="/"><button className=' underline text-[#B2A4FF] text-center block mx-auto my-20 text-2xl'>Back to home</button></Link>
        </div>
    );
};

export default Error;