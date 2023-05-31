import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
            <ColorRing
                visible={true}
                height="100"
                width="100"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#8294C4', '#DBDFEA', '#FFEAD2', '#abbd81', '#ACB1D6']}
            />
        </div>
    );
};

export default Loader;