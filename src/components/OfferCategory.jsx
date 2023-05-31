import React from 'react';
import offerImg1 from '../assets/Offer/offer1.png'
import offerImg2 from '../assets/Offer/offer2.png'
import offerImg3 from '../assets/Offer/offer3.png'
import offerImg4 from '../assets/Offer/offer4.png'
import offerImg5 from '../assets/Offer/offer5.png'
import offerImg6 from '../assets/Offer/offer6.png'

const OfferCategory = () => {
    return (
        <div className='mt-28'>
            <h1 className="text-center text-4xl font-semibold underline">Offer <span className='text-[#AA77FF]'>Collection</span></h1>
            <div className=" flex min-h-screen items-center justify-center my-20">
                <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    <div data-aos="fade-down" className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 mb-10">
                        <div className="h-96 w-72">
                            <img className="h-full w-60 object-cover transition-transform duration-1000 group-hover:rotate-3 group-hover:scale-125" src={offerImg1} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-1000 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">Perseus Action Figure</h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">NECA Clash Of The Titans 7" Action Figure 49280 - Perseus With Sword & Shield</p>
                            <p className="  font-com text-lg capitalize text-white">25% off</p>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 mb-10">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-1000 group-hover:rotate-3 group-hover:scale-125" src={offerImg2} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-1000 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">Mattel Games UNO </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">The classic UNO card game builds fun on game night with a Minecraft theme!</p>
                            <p className="  font-com text-lg capitalize text-white">20% off</p>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 mb-10">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-1000 group-hover:rotate-3 group-hover:scale-125" src={offerImg3} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-1000 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">Treasure X Minecraft Caves & Cliffs</h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Activate the End Portal. Enter the End through the Ender Ooze!</p>
                            <button className=" font-com text-lg capitalize text-white ">10% Off</button>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-1000 group-hover:rotate-3 group-hover:scale-125" src={offerImg4} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-1000 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">Sanhok Survivor, Multicolor</h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">From PUBG, sanhok Survivor, as a stylized POP vinyl from Funko!</p>
                            <button className=" text-lg capitalize text-white">15% Off</button>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-1000 group-hover:rotate-3 group-hover:scale-125" src={offerImg5} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-1000 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">chicken dinner minifigure army</h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Beautifully made and historically made figures.</p>
                            <button className=" font-com text-lg capitalize text-white ">5% Off</button>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-1000 group-hover:rotate-3 group-hover:scale-125" src={offerImg6} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-1000 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white">Kid-Sized Role-play Accessory</h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">This player-sized Minecraft Ultimate Bow and Arrow lets kids act out Minecraft adventures in real life!</p>
                            <button className="font-com text-lg capitalize text-white ">6% Off</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferCategory;