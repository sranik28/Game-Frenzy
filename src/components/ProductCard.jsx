import React from 'react';

const ProductCard = ({ imgSrc ,name }) => {
  return (
    <div  data-aos="zoom-in" className="bg-white shadow-md rounded-md p-4 ">
      <img className=" h-[150px] mx-auto  mb-4 rounded-md" src={imgSrc} alt="Product" />
      <h1 className='text-xl font-semibold underline text-center'>{name}</h1>
    </div>
  );
};

export default ProductCard;
