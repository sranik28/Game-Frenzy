import React from 'react';

const ProductCard = ({ imgSrc ,name }) => {
  return (
    <div  data-aos="zoom-in" className="p-4 bg-white rounded-md shadow-md ">
      <img className=" h-[150px] mx-auto  mb-4 rounded-md" src={imgSrc} alt="Product" />
      <h1 className='text-xl font-semibold text-center underline'>{name}</h1>
    </div>
  );
};

export default ProductCard;
