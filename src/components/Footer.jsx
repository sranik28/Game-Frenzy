import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.png'
import { BsFacebook, BsTwitter, BsInstagram, BsTelephoneFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import ScrollToTop from "react-scroll-to-top";
import MyIcon from './MyIcon';


const Footer = () => {
    return (
        <footer className='bg-red-100 p-5'>
            <ScrollToTop smooth top={1000} component={<MyIcon />} />
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 grid-cols-2 gap-10 my-12'>
                <div>
                    <Link to='/'><img className='w-20 h-20 -mb-2' src={logo} alt="" /></Link>
                    <h1 className='text-2xl italic font-bold'>Game<span className='text-[#B2A4FF]'>Frenzy</span></h1>
                    <input className='py-2 md:px-2 mt-5 px-1 outline-none rounded-md placeholder:text-xl' type="search" name="" id="" placeholder=' email' />
                    <input className=' py-2 px-2  md:ml-2 bg-[#B2A4FF] hover:bg-[#AA77FF] text-white rounded-md' type="submit" value="Submit" />
                    <div className='flex gap-3 my-8'>
                        <Link><span><BsFacebook className='w-8 h-8 text-blue-600 hover:text-white' /></span></Link>
                        <Link><span><BsTwitter className='w-8 h-8 text-sky-500 hover:text-white' /></span></Link>
                        <Link><span><BsInstagram className='w-8 h-8 text-red-500 hover:text-white' /></span></Link>
                    </div>
                </div>
                <div>
                    <h2 className=" text-2xl font-bold mt-10">About Us</h2>
                    <p className="py-2 hover:text-[#B2A4FF]"><Link to='/'>Home</Link></p>
                    <p className='hover:text-[#B2A4FF]'><Link to='/all-toys'>All Toy's</Link></p>
                    <p className="py-2 hover:text-[#B2A4FF] "><Link to='/blog'>Blog</Link></p>
                    <p className='hover:text-[#B2A4FF]'><Link to='/login'>Login</Link></p>
                    <p className="py-2 hover:text-[#B2A4FF]"><Link to='/register'>Register</Link></p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mt-10">Our Brands</h1>
                    <p className="py-2">LEGO® Store</p>
                    <p>Mattel</p>
                    <p className="py-2">Hot Wheels</p>
                    <p className="">My Little Pony</p>
                    <p className="py-2">Funko</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mt-10">Contact</h1>
                    <span className='flex items-center gap-2'><HiLocationMarker /><p className="py-2">Mohakhali, Dhaka-1215</p></span>
                    <span className='flex items-center gap-2'><BsTelephoneFill /><p>+880 1259876312</p></span>
                    <span className='flex items-center gap-2'><MdEmail /><p className="py-2">info@gamefrenzy.com</p></span>
                </div>
            </div>
            <hr className='border-1 border-gray-500 max-w-[1240px] mx-auto py-5' />
            <div className="md:flex justify-between items-center text-[#B2A4FF] max-w-[1240px] mx-auto px-6 pb-8">
                <h1>&copy;2023 Game Frenzy
                    . All Rights Reserved</h1>  
                <h1>Powered by <span className="font-bold">
                    Game Frenzy
                </span></h1>
            </div>
        </footer>
    );
};

export default Footer;