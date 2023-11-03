/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Features from '../Fetures/Features';

const PriceOption = ({ option }) => {
    // console.log(option);
    const { features, price, name } = option
    return (
        <div className='bg-sky-400 flex flex-col  p-4 rounded-lg text-center space-y-2 text-white'>
            <h3>
                <span className='text-5xl'>{price}</span>
                <span className='text-2xl'>/Mnt</span>
            </h3>
            <h2 className='text-4xl'>{name}</h2>
            <div className='p-3 flex-grow'>
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
            </div>
            <button className='bg-green-600 py-4 hover:bg-green-900 duration-500 w-full text-blue-50 font-extrabold rounded-lg text-lg'>Bey Now</button>
        </div>
    );
};

export default PriceOption;