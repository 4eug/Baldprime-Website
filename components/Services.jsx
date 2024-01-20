/* eslint-disable @next/next/no-img-element */
import React from 'react'
import BlogCard from './cards/blogCard';
import Modal from "./Modal/modal";
import { useState } from 'react';

export default function Services() {

  const [open, setOpen] = useState(false)

  return (
    <section id="service-section" className="py-10 bg-[#F9FAFA] sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-left lg:text-left">
            <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Services</p>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">Our services we offer for you</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 lg:max-w-full lg:mt-16">
          {/* {blogData.map((blog) => (
            <BlogCard key={blog.id} title={blog.title} imageSrc={blog.imageSrc} content1={blog.content1} content2={blog.content2} content3={blog.content3} content4={blog.content4} content5={blog.content5} showLearnMore={blog.id === 3} />
          ))} */}
          <BlogCard title="Auditing" imageSrc="/Auditing.png" content1="Forensic" content2="Financial" content3="Operational" content4="Compliance" content5="Information System System" />

          <BlogCard title="Accounting" imageSrc="/Accounting.png" content1="Financial Statements" content2="Book Keeping" content3="Outsourced Accounting" content4="Forensic Accounting" content5="Financial Consulting" content6="Assurance Accounting" />

          {/* <BlogCard title="Taxes" imageSrc="/Taxation.png" content1="Company Income Tax" content2="Personal Income Tax" content3="Value Added Tax (VAT)" content4="Pay-As-You-Earn (PAYE)" content5="Withholding Taxes" showLearnMore="Learn More" /> */}
          
          {/* Only Html tag */}
          <div>
      <div className="block aspect-w-4 aspect-h-3">
        <img
          className="object-cover w-full h-full rounded-[12px]"
          src='/Taxation.png'
          alt=""
        />
      </div>
      <p className="mt-6 text-xl font-semibold">
          Taxes
      </p>
      <ul className="mt-2 pl-6 text-gray-600 list-disc">
        <li>Company Income Tax</li>
        <li>Personal Income Tax</li>
         <li>Value Added Tax (VAT)</li>
        <li>Pay-As-You-Earn (PAYE)</li>
         <li>Withholding Taxes</li>
      </ul>
      <button onClick={() => setOpen(true)} className='pl-6 text-[#266EFF] text-sm font-semibold' >Learn more</button>
    </div>

    {/* <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-full">
          <div className="mx-4 my-4">
           <ul className='pl-6 text-gray-600 list-disc'>
           <li>Company Income Tax</li>
           <li>Personal Income Tax</li>
           <li>Value Added Tax (VAT)</li>
           <li>Pay-As-You-Earn (PAYE) Tax</li>
           <li>Withholding Taxes</li>
           <li>Global Transfers Pricing</li>
           <li>Growth & Sustainability Tax</li>
           <li>Capital Gain Tax</li>
           <li>Property Tax</li>
           <li>Communication Service Tax</li>
           <li>Special Import Tax</li>
           <li>Financial Service VAT</li>
           <li>Gift Tax</li>
           <li>National Health Insurance Levy (NHIL)</li>
           <li>Vehicle Income Tax</li>
           <li>Rent Tax</li>
           <li>Tax Stamp</li>
           </ul>
          </div>
       
        </div>
      </Modal> */}

          <BlogCard title="Statutory & Legal Filings" imageSrc="/Taxation.png" content1="GRA Tax Filings" content2="SSNIT Filings" content3="Ghana Tourism Authority"/>

          <BlogCard title="Inventory Management" imageSrc="/Inventory Management.png" content1="Stock Taking" content2="Perpetual Inventory System"/>
        </div>
      </div>
    </section>
  )
}
