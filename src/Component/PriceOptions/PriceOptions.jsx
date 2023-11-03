/* eslint-disable no-unused-vars */
import React from 'react';
import PriceOption from '../PriceOption/PriceOption';



const price_options = [
    {
        "id": 1,
        "name": "Basic Membership",
        "price": 29.99,
        "features": [
            "Access to cardio and strength equipment",
            "Locker room access",
            "Free weights area",
            "Personalized workout plan",
            "24/7 access",
            "Monthly fitness assessment",
            "Fitness classes at a discounted rate",
            "Sauna access"
        ]
    },
    {
        "id": 2,
        "name": "Premium Membership",
        "price": 49.99,
        "features": [
            "All Basic Membership features",
            "Unlimited group fitness classes",
            "Sauna and steam room access",
            "Nutritional guidance",
            "Towel service",
            "Access to a personal trainer (1 session per month)",
            "Guest passes for friends and family",
            "Yoga and Pilates classes"
        ]
    },
    {
        "id": 3,
        "name": "Family Membership",
        "price": 79.99,
        "features": [
            "All Premium Membership features",
            "Access for two adults and up to two children",
            "Childcare services",
            "Discounts on personal training",
            "Family fitness classes",
            "Complimentary smoothie bar access",
            "Priority booking for fitness classes",
            "Access to indoor swimming pool"
        ]
    }
];


const PriceOptions = () => {
    return (
        <div>
            <h1 className='my-5 text-4xl text-center'>Best price option</h1>
            <div className='grid md:grid-cols-3 gap-2'>
                {
                    price_options.map((option, ind) => <PriceOption key={ind} option={option}></PriceOption>)
                }
                <div>

                </div>
            </div>
        </div>
    );
};

export default PriceOptions;