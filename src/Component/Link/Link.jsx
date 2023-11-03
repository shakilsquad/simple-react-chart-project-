/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            {
                <li className='hover:text-white rounded hover:bg-gray-500 p-2 '>
                <a href={route.path}>
                    {route.name}
                </a></li>
            }
        </div>
    );
};

export default Link;