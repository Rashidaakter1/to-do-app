import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='md:flex items-center justify-between  md:mx-6 text-xl py-5 '>
            <div className=''>
               <Link to='/home'className='font-[poppins] pl-3 '> <img className='w-10' src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1428212405/u438ahwi43tw6l5oe3bl.png" alt="" /></Link>
            </div>
            <ul className='md:flex  md:items-center md:pb-0  pb-12  md:static md:bg-red-100 bg-white pt-3 pl-12'>
                <li className='md:ml-8 sm:m md:my-0 my-7'><a className='text-gray-900 hover:text-gray-500' as={Link} href="/toDoList">To-do list</a></li>
                <li className='md:ml-8  md:my-0 my-7'><a className='text-gray-900 hover:text-gray-500' as={Link} href="/completedTask">Completed task</a></li>
                <li className='md:ml-8  md:my-0 my-7'><a className='text-gray-900 hover:text-gray-500' as={Link} href="/calender">Calender</a></li>
            </ul>
        </div>
    );
};

export default Navbar;