/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaCheckDouble } from 'react-icons/fa';
const Features = ({feature}) => {

    return (
        <div className='text-left'>
            <p className='flex items-center gap-2'> <FaCheckDouble></FaCheckDouble>  {feature}</p>
        </div>
    );
};

export default Features;