import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { CiLogin } from 'react-icons/ci';
import login from '../assets/login/login.png'
import useTitle from '../hooks/UseTitle';
import { useAuthGlobally } from '../context/AuthProvide';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    useTitle('Login')
    const { signIn, signInGoogle } = useAuthGlobally();
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page", location)
    const from = location.state?.from?.pathname || "/"

    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }

    const handelGoogle = () => {
        signInGoogle()
            .then((result) => {
                const google = result.user;
                console.log(google)
                navigate(from)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <main className='container grid md:grid-cols-2 px-3 mt-10'>
            <img className='w-[300px] mx-auto' src={login} alt="" />
            <div className='max-w-[1240px] w-full mx-auto mt-10  '>
                <h1 className='text-center text-5xl font-bold'>Please <span className='text-[#B2A4FF]'>Login</span></h1>
                <div className=' text-center py-5 bg-slate-200 rounded md:w-[500px] mx-auto my-5'>
                    <form onSubmit={handleLogin}>
                        <input className='w-[80%] py-2 my-5 rounded outline-none px-4 ' type="email" name="email" placeholder='    enter your email' required />

                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"} name="password" id="password" className='border-b-2 w-[80%] rounded py-2 px-4 outline-none text-base ' autoComplete='off' placeholder='   enter your password' />
                            <span className='absolute md:top-3 md:right-14 top-3 right-11'>
                                {
                                    showPassword ? <AiFillEyeInvisible className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <AiFillEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                                }
                            </span>
                        </div>

                        <p className='text-[#B2A4FF] underline mt-5'><Link>Forget Password</Link></p>
                        <button className='w-[80%]  bg-[#B2A4FF] hover:bg-[#AA77FF] mx-auto rounded py-2 my-5 text-white font-semibold flex items-center justify-center'>Login <span><CiLogin className='w-8 h-8 ' /></span> </button>

                        <p className='text-red-600 text-lg'>{error}</p>

                        <p className='my-5'> Create a new account?<Link to="/register" className='text-[#B2A4FF] underline'> Registration</Link></p>
                    </form>
                </div>
                <button onClick={handelGoogle} className='p-[10px] border rounded flex justify-center items-center gap-[6px] mx-auto mb-10  '><FcGoogle className='text-[32px]' /><span>Continue with Google</span></button>
            </div>
        </main>
    );
};

export default Login;