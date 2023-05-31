import React, { useEffect } from 'react';
import carImg from '../assets/Short-Section/icons8-car-100.png'
import downloadImg from '../assets/Short-Section/icons8-downloading-66.png'
import callImg from '../assets/Short-Section/icons8-call-80.png'
import carDelivery from '../assets/Short-Section/icons8-delivery-50.png'
import { Link } from 'react-router-dom';


const SupportSection = () => {
    return (
        <main className=' p-3  mt-36 mb-10'>
            <div  data-aos="fade-up" className='container  '>
                <div className='grid md:grid-cols-4 gap-10 items-center justify-center'>
                    <div className='flex items-center gap-3'>
                        <Link> <img src={carImg} alt="" /></Link>
                        <div>
                            <h2 className='text-lg font-semibold'>FAST SHIPPING</h2>
                            <p>Fast Shipping</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Link> <img src={downloadImg} alt="" /></Link>
                        <div>
                            <h2 className='text-lg font-semibold'>ONLINE PAYMENT</h2>
                            <p>Payment methods.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Link> <img src={callImg} alt="" /></Link>
                        <div>
                            <h2 className='text-lg font-semibold'>24/10 SUPPORT</h2>
                            <p>Unlimited help desk.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Link> <img src={carDelivery} alt="" /></Link>
                        <div>
                            <h2 className='text-lg font-semibold'>On time Delivery.</h2>
                            <p>On time Delivery.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SupportSection;