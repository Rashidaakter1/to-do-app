import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
    let [open, setOpen] = useState(false);
    return (


        <div className='shadow-md w-full fixed top-0 left-0'>

            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div>
                    <Link to='/home'> <img className='w-10' src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1428212405/u438ahwi43tw6l5oe3bl.png" alt="" /></Link>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <div className={open ? 'close':'menu'}> <FaAlignJustify ></FaAlignJustify></div>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    <li className='md:ml-8 sm:m md:my-0 my-7'><a className='text-gray-900 hover:text-gray-500' as={Link} href="/toDoList">To-do list</a></li>
                    <li className='md:ml-8  md:my-0 my-7'><a className='text-gray-900 hover:text-gray-500' as={Link} href="/completedTask">Completed task</a></li>
                    <li className='md:ml-8  md:my-0 my-7'><a className='text-gray-900 hover:text-gray-500' as={Link} href="/calender">Calender</a></li>

                </ul>

            </div>




            {/* <div className='md:flex items-center justify-between  md:mx-6 text-xl py-5 '>
                <div className=''>
                    <Link to='/home' className='font-[poppins] pl-3 '> <img className='w-10' src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1428212405/u438ahwi43tw6l5oe3bl.png" alt="" /></Link>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <div className=''> <FaAlignJustify ></FaAlignJustify></div>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    <li className='md:ml-8 sm:m md:my-0 my-7'><a className='text-gray-900 hover:text-gray-500' as={Link} href="/toDoList">To-do list</a></li>
                    <li className='md:ml-8  md:my-0 my-7'><a className='text-gray-900 hover:text-gray-500' as={Link} href="/completedTask">Completed task</a></li>
                    <li className='md:ml-8  md:my-0 my-7'><a className='text-gray-900 hover:text-gray-500' as={Link} href="/calender">Calender</a></li>

                </ul>
            </div> */}
        </div>
    );
};

export default Navbar;