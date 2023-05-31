import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import logo from '../../assets/logo/logo.png'
import { useAuthGlobally } from '../../context/AuthProvide';

const NavBer = () => {

    const { user, logOut } = useAuthGlobally();

    const [toggle, setToggle] = useState(false);
    const handelTost = () => {

        if (!user) {
            toast("You Have To Login First To View Details");

        }
    }

    return (
        <nav className='flex justify-between items-center my-3'>
            <div className='flex gap-2 items-center'>
                <Link to='/'><img className='w-14 h-14 rounded-md' src={logo} alt="" /></Link>
                <div>
                    <Link to='/'><h1 className='text-2xl italic font-bold'>Game<span className='text-[#B2A4FF]'>Frenzy</span></h1></Link>
                </div>
            </div>
            <span className='md:hidden'>
                {
                    toggle ? <AiOutlineCloseCircle onClick={() => setToggle(!toggle)} /> : <HiMenuAlt1 onClick={() => setToggle(!toggle)} />
                }
            </span>
            <ul className={`font-semibold flex items-center duration-300 flex-col py-5 md:p-0 text-white bg-opacity-90 md:text-black top-20 bg-black md:bg-transparent w-full md:w-auto md:flex-row gap-6 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`} >
                <li><NavLink onClick={() => setToggle(false)} className={({ isActive }) => isActive ? "active" : ""} to='/'>Home</NavLink></li>
                <li><NavLink onClick={() => setToggle(false)} className={({ isActive }) => isActive ? "active" : ""} to='/all-toys'>All Toy's</NavLink></li>
                <li><NavLink onClick={() => setToggle(false)} className={({ isActive }) => isActive ? "active" : ""} to='/blog'>Blog</NavLink></li>
                {
                    user ? <><li><NavLink onClick={() => setToggle(false)} className={({ isActive }) => isActive ? "active" : ""} to='/my-toys'>My Toy's</NavLink></li>
                        <li><NavLink onClick={() => setToggle(false)} className={({ isActive }) => isActive ? "active" : ""} to='/Add-toys'>Add A Toy's</NavLink></li></> : ""
                }

                <li>{
                    user?.photoURL ? <img className="w-[35px] h-[35px] rounded-full" src={user?.photoURL} title={user.displayName} alt="" /> : ""
                }
                </li>

                <li>{
                    user ? <button onClick={logOut} className="bg-[#B2A4FF] hover:bg-[#AA77FF]  px-4 py-2 rounded-md  text-white">LogOut</button> : <button className="bg-[#B2A4FF] text-lg font-semibold hover:bg-[#AA77FF] px-4 py-2 rounded-md text-white"><Link to="/login">Login</Link></button>
                }
                </li>
            </ul>
        </nav>
    );
};

export default NavBer;