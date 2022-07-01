import React from 'react';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='bg-slate-800 text-white '>
            <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-slate-400 py-7 '>

                <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 font-semibold lg:leading-normal md:w-2/5 '><span className='text-cyan-600'> Want  </span> <span>Connnect with us !!</span></h1>
                <div>
                    <input className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2  ' placeholder='Enter your Contact no' type="text" />
                    <button className='bg-indigo-400 hover:bg-indigo-500 duration-3oo px-5 py-2.5 font-[poppins] rounded-md text-white'>Contact</button>
                </div>
            </div>
           
                <div className='flex justify-center items-center text-white text-center '><span className='p-2'> Copyright</span> <span className='p-2'>< FaCopyright /></span> {year} </div>
           
        </footer>
    );
};

export default Footer;