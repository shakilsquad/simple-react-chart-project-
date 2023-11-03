/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar,  XAxis, YAxis, Tooltip,  } from 'recharts';

import { Audio, BallTriangle } from 'react-loader-spinner'

const Phones = () => {
    const [phone, setPhone] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhone(data.data));
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonData = data.data.data;
                const phonWidthFakeData = phonData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })
                console.log(phonWidthFakeData)
                setPhone(phonWidthFakeData)
                setLoading(false)
            });

    }, [])
    return (
        <div className='py-5'>
            {
                loading && <div>
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color='green'
                        ariaLabel='three-dots-loading'
                        wrapperStyle
                        wrapperClass
                    />
                    <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="#4fa94d"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                    />

                </div>
            }
            <h1 className='text-4xl text-center font-extrabold '>I Phone {phone.length}</h1>
            <BarChart width={1100} height={600} data={phone}>
                <Bar dataKey="price" fill="#8884d8" />
                <YAxis></YAxis>
                <XAxis dataKey='name'></XAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;