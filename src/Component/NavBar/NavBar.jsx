/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Link from '../Link/Link';
// import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { AiOutlineMenuFold } from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { name: 'Home', id: 'home', path: '/' },
        { name: 'About', id: 'about', path: '/about' },
        { name: 'Services', id: 'services', path: '/services' },
        { name: 'Contact', id: 'contact', path: '/contact' },
        { name: 'Product', id: 'product', path: '/products/:id' },
    ];

    return (

        <nav className='bg-gray-400 text-white'>
            <div onClick={()=> setOpen (!open)} className='text-2xl md:hidden'>
                {
                    open === true ? <AiOutlineMenuFold></AiOutlineMenuFold>
                     : <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                }

            </div>
            <ul  className={`md:flex gap-6 absolute md:static  duration-500 bg-gray-400 p-4
                ${open ? "left-9 " : "-left-24"}
            `}>
                {
                    routes.map((route,idx) => <Link key={idx} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;