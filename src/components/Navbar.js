import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
   
    return (


        <div class="navbar bg-slate-200">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className='text-gray-900 hover:text-gray-500' as={Link} href="/toDoList">To-do list</a></li>
                        
                        <li><a className='text-gray-900 hover:text-gray-500' as={Link} href="/completedTask">Completed task</a></li>
                        <li><a className='text-gray-900 hover:text-gray-500' as={Link} href="/calender">Calender</a></li>
                    </ul>
                </div>
                <Link to='/home' className='font-[poppins] pl-3 '> <img className='w-10' src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1428212405/u438ahwi43tw6l5oe3bl.png" alt="" /></Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                <li><a className='text-gray-900 hover:text-gray-500' as={Link} href="/toDoList">To-do list</a></li>
                        
                        <li><a className='text-gray-900 hover:text-gray-500' as={Link} href="/completedTask">Completed task</a></li>
                        <li><a className='text-gray-900 hover:text-gray-500' as={Link} href="/calender">Calender</a></li>
                </ul>
            </div>
            
        
        </div>


    );
};

export default Navbar;