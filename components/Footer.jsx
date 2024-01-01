import React from 'react';

export default function Footer() {
  return (
    <section className="py-10 bg-[#F4F5F6] sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-[30px] leading-[38px] font-extrabold whitespace-nowrap">BAAF</span>
            </a>
            <div className="flex mt-8 space-x-[32px] text-[16px] font-semibold text-[#0E0F11]">
              <a href="https://www.linkedin.com/in/baidprime-auditing-and-accounting-firm-a8435b2a6/" target="_blank" rel="noopener noreferrer">linkedIn</a>
              <a href="https://www.instagram.com/baidprime/"  target="_blank" rel="noopener noreferrer">facebook</a>
              <a href="https://twitter.com/baidprime57099"  target="_blank" rel="noopener noreferrer">twitter</a>
              <a href="mailto:baidprime019@gmail.com" target="_blank" rel="noopener noreferrer">email</a>
            </div>
          </div>
        </div>

        <hr className="mt-8 mb-10 border-[#ECEDEF]"/>

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-[#AFB3BB]">&copy; {new Date().getFullYear()} BaidPrime Auditing & Accounting Services Ltd. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
