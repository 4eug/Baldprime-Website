/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 mb-8">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-[30px] leading-[38px] font-extrabold whitespace-nowrap">BAAF</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <a href="#" className="font-semibold px-4 py-4 text-gray-900 border h-[40px] inline-flex items-center border-gray-300 rounded-[2px]">
              Contact us
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
