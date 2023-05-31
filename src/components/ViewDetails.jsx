import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ViewDetails = () => {
    const { id } = useParams();
    const [viewData, setViewData] = useState({});

    const { photo_url, name, seller_name, seller_email, sub_category, price, rating, quantity, description } = viewData;
    console.log(viewData)

    useEffect(() => {
        fetch(`https://game-frenzy.vercel.app/toy/${id}`)
            .then(res => res.json())
            .then(data => {
                setViewData(data)
            })
    }, [id])
    return (
        <div data-aos="zoom-in-right" className=' container'>
            <div className=' grid md:grid-cols-2 gap-5 my-20 items-center'>
                <img className='w-72 mx-auto' src={photo_url} alt="" />
                <div className='px-3'>
                    <h2 className='my-5'>
                        <span className=' font-bold text-2xl'>Product Name</span>: <span className='text-lg'>{name}</span>
                    </h2>
                    <p className='my-2'>
                        <span className=' text-lg font-bold'>Seller Name</span>: <span >{seller_name}</span>
                    </p>
                    <p className='my-2'>
                        <span className=' text-lg font-bold'>Seller Email</span>: <span >{seller_email}</span>
                    </p>
                    <p className='my-2'>
                        <span className='text-lg font-bold'>Price</span>: <span>${price}</span>
                    </p>
                    <p className='my-2'>
                        <span className='text-lg font-bold'>Sub Category</span>: <span >{sub_category}</span>
                    </p>
                    <div className='my-2 flex items-center gap-2'>
                        <span className='font-bold'>{rating}</span> <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                    </div>
                    <p className='my-2'>
                        <span className='text-lg font-bold'>Quantity</span>: <span>{quantity}</span>
                    </p>
                    <p className='my-2'>
                        <span className='text-lg font-bold'>Description</span>: <span>{description}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;


