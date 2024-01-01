import React from 'react';

const Hero = ({ contactId }) => {
  return (
    <section className="bg-img" id={contactId}>
      <div className="grid max-w-screen-xl gap-8 lg:grid-cols-12 mx-auto px-6 py-32">
        <div className="lg:col-span-7 self-center">
          <a href="#" className="inline-flex justify-between gap-1 items-center py-1 px-2 mb-7 text-sm text-white bg-[#f9fafa3e] border border-[#ECEDEF] rounded-full" role="alert">
            <span className="text-sm font-medium">BaidPrime Auditing & Accounting Firm</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.00004 3.33325V12.6666M8.00004 12.6666L12.6667 7.99992M8.00004 12.6666L3.33337 7.99992" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <h1 className="max-w-2xl mb-4 text-4xl font-semibold text-white tracking-tight xl:leading-[72px] md:text-4xl xl:text-6xl">
            Financial Stewardship with Ethical Vision
          </h1>
          <p className="max-w-2xl mb-6 text-[#D8DBDE] leading-[28px] font-normal lg:mb-8 md:text-lg lg:text-xl">
            Assuring Financial Accuracy with Ethical Auditing and Tax Expertise: Your Trust, Our Responsibility.
          </p>
          <div className="flex gap-2">
            <a href={`#${contactId}`} className="bg-[#0055FF] h-[40px] inline-flex items-center text-white text-base rounded-[2px] font-semibold px-4 py-4">
              Contact us
            </a>
            <a href="#" className="font-semibold px-4 py-4 h-[40px] inline-flex items-center text-gray-900 bg-[#FFFFFF] border border-[#ECEDEF] rounded-[2px]">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
