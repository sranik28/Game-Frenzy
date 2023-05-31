import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCard from "./ProductCard";

const ProductSlider = () => {
    const slides = [
        {
            img: "https://www.lego.com/static/favicon/lego-logo-512.png",
            name: "LEGO",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mattel-brand.svg",
            name: "Mattel",
        },
        {
            img: "https://t1.gstatic.com/images?q=tbn:ANd9GcRXouSbtwQ_SbCCu7vxBCmasxx6Vxs1W5KIcvFy-t7tWUbrDBE4",
            name: "Hot Wheels",
        },
        {
            img: "https://cdn.mos.cms.futurecdn.net/U6EatYGFsAazcPmqyi46tW.jpg",
            name: "Fisher-Price",
        },
        {
            img: "https://img.creator-prod.zmags.com/assets/images/635171fb6df9f1595b45ac36.png?im=Resize,width=372",
            name: "My Little Pony",
        },
        {
            img: "https://img.creator-prod.zmags.com/assets/images/636d0a042a22913f01cf517a.png?im=Resize,width=1500",
            name: "Funko"
        },
        {
            img: "https://img.creator-prod.zmags.com/assets/images/635168e0b6fc7c1ab6ae4d96.png?im=Resize,width=625",
            name:'Disney'
        },
        {
            img: "https://img.creator-prod.zmags.com/assets/images/63516b57b6fc7c1ab6ae5061.png?im=Resize,width=1200",
            name:'Melissa & Doug'
        },

        // ...remaining slides
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className="container my-28 overflow-x-hidden">
            <h1 className="text-4xl underline font-bold text-center my-10">Our <span className="text-[#AA77FF]">Brand</span></h1>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <ProductCard imgSrc={slide.img} name={slide.name} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductSlider;
