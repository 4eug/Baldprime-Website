/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Meta from "../components/utils/meta";
import Head from 'next/head';
import TeamCard from '../components/cards/teamCard';
import ContactCard from '../components/cards/contactCard';
import { useEffect, useState } from 'react';
import BlogCard from "../components/cards/blogCard";
import Modal from "../components/Modal/modal";

export default function Home() {

  const [open, setOpen] = useState(false)
  
    useEffect(() => {
        // Function to handle smooth scrolling
        const handleSmoothScroll = (e, targetId) => {
          e.preventDefault();
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        };
    
        // Attach click event to the "Contact us" anchor tag in the navigation bar
        const contactNavLink = document.getElementById('contact-link');
        if (contactNavLink) {
          contactNavLink.addEventListener('click', (e) => handleSmoothScroll(e, 'contact-section'));
        }
    
        // Attach click event to the "Contact us" button in the Hero section
        const contactHeroButton = document.getElementById('contact-hero-button');
        if (contactHeroButton) {
          contactHeroButton.addEventListener('click', (e) => handleSmoothScroll(e, 'contact-section'));
        }
    
        // Attach click event to the "Learn more" anchor tag in the Hero section
        const learnMoreLink = document.getElementById('learn-more-link');
        if (learnMoreLink) {
          learnMoreLink.addEventListener('click', (e) => handleSmoothScroll(e, 'service-section'));
        }
    
        // Attach click event to the "BaidPrime Auditing & Accounting Firm" anchor tag in the Hero section
        const baidPrimeLink = document.getElementById('baidprime-link');
        if (baidPrimeLink) {
          baidPrimeLink.addEventListener('click', (e) => handleSmoothScroll(e, 'service-section'));
        }
    
        // Clean up event listeners when the component is unmounted
        return () => {
          if (contactNavLink) {
            contactNavLink.removeEventListener('click', (e) => handleSmoothScroll(e, 'contact-section'));
          }
          if (contactHeroButton) {
            contactHeroButton.removeEventListener('click', (e) => handleSmoothScroll(e, 'contact-section'));
          }
          if (learnMoreLink) {
            learnMoreLink.removeEventListener('click', (e) => handleSmoothScroll(e, 'service-section'));
          }
          if (baidPrimeLink) {
            baidPrimeLink.removeEventListener('click', (e) => handleSmoothScroll(e, 'service-section'));
          }
        };
      }, []);
    
  

    // Sample data for each blog card
  const blogData = [
    { id: 1, title: 'Auditing', imageSrc: '/Financial Audit.png', content1: 'Forensic', content2: 'Financial', content3: 'Operational', content4: 'Compliance', content5: 'Information System System'  },
    { id: 2, title: 'Accounting', imageSrc: '/Forensic Audit.png', content1: 'Financial Statements', content2: 'Book Keeping', content3: 'Forensic Accounting', content4: 'Financial Consulting', content5: 'Assurance Accounting' },
    { id: 3, title: 'Taxes', imageSrc: '/Account Service.png', content1: 'Company Income Tax', content2: 'Personal Income Tax', content3: 'Value Added Tax (VAT)', content4: 'Pay-As-You-Earn (PAYE)', content5: 'Withholding Taxes', },
    { id: 4, title: 'Inventory Management', imageSrc: '/Taxation.png', content1: 'Stock Taking', content2: 'Perpetual Inventory System' },
  ];

  // Team members data
  const teamMembers = [
    { id: 1, name: 'Stephen De-Graft Baidu', title: 'Managing Partner', imageSrc: '/Stephen De.png' },
    { id: 2, name: 'Oliver Kumordzie', title: 'Audit Partner', imageSrc: '/Oliver.png' },
    { id: 3, name: 'Mathias Kwei', title: 'Audit Associate', imageSrc: '/Mathias.png' },
    { id: 4, name: 'Rosemary Dadzie', title: 'Head, Taxation & Assurance', imageSrc: '/Rosemary.png'},
    { id: 5, name: 'Lawrence Kokuvi Afodoanyi', title: 'Forensic Audit', imageSrc: '/Lawrence.png'},
    { id: 6, name: 'George Asamoah ', title: 'Senior Partner', imageSrc: '/George.png'},
    { id: 7, name: 'Rubben Ansah', title: 'Audit Partner', imageSrc: '/Rubben.png'},
  ];

  // Address
  const addressData = [
    { id: 1, title: 'Enquiry', message: 'How can we help you?', info: 'baidprime019@gmail.com' },
    { id: 2, title: 'Location', message: 'Visit our head office', info: 'Loc. Dansoman Junction, Behind UMB Bank -  Accra-Ghana' },
    { id: 3, title: 'Call our team', message: 'Mon - Sat from 8am to 5pm', info: '+233 24 327 6202' },
    { id: 4, title: 'Box Address', message: '', info: 'P.O.Box ABK 149, Abeka Lapaz 51 - Mampon Okai Street GA -427-2823 Greater Accra - Ghana'}
  ];


  return (
    <>
    <Meta title="BAAF | Financial Stewardship with Ethical Vision"/>
      <Head>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      {/* Navigation Bar */}
      <nav className="bg-white fixed w-full z-20 top-0 mb-8">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="#"  className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="w-[48px] h-[48px]"/>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <a href="#" id="contact-link" className="font-semibold px-4 py-4 text-gray-900 border h-[40px] inline-flex items-center border-gray-300 rounded-[2px]">
              Contact us
            </a>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="bg-img">
      <div className="grid max-w-screen-xl gap-8 lg:grid-cols-12 mx-auto px-6 pt-40 pb-32">
        <div className="lg:col-span-7 self-center">
          <a href="#" id="baidprime-link" className="inline-flex justify-between gap-1 items-center py-1 px-2 mb-7 text-sm text-white bg-[#f9fafa3e] border border-[#ECEDEF] rounded-full" role="alert">
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
            <a href="#" id="contact-hero-button" className="bg-[#0055FF] h-[40px] inline-flex items-center text-white text-base rounded-[2px] font-semibold px-4 py-4">
              Contact us
            </a>
            <a href="#" id="learn-more-link" className="font-semibold px-4 py-4 h-[40px] inline-flex items-center text-gray-900 bg-[#FFFFFF] border border-[#ECEDEF] rounded-[2px]">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Service Section */}
    <section id="service-section" className="py-10 bg-[#F9FAFA] sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-left lg:text-left">
            <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Services</p>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">We offer</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 lg:max-w-full lg:mt-16">
          {/* {blogData.map((blog) => (
            <BlogCard key={blog.id} title={blog.title} imageSrc={blog.imageSrc} content1={blog.content1} content2={blog.content2} content3={blog.content3} content4={blog.content4} content5={blog.content5} showLearnMore={blog.id === 3} />
          ))} */}
          <BlogCard title="Auditing" imageSrc="/Auditing.png" content1="Forensic" content2="Financial" content3="Operational" content4="Compliance" content5="Information System" content6="Computer System Audit" />

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

    <Modal open={open} onClose={() => setOpen(false)}>
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
      </Modal>

          <BlogCard title="Statutory & Legal Filings" imageSrc="/Taxation.png" content1="GRA Tax Filings" content2="SSNIT Filings" content3="Ghana Tourism Authority"/>

          <BlogCard title="Inventory Management" imageSrc="/Inventory Management.png" content1="Stock Taking" content2="Perpetual Inventory System"/>
        </div>
      </div>
    </section>
    

    {/* About Section Vision */}
    <section className="bg-[#0A0A0A] text-white py-10 lg:py-20">
    <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">About Us</p>
        <h2 className="text-3xl font-semibold leading-[44px] lg:text-4xl">Our Vision</h2>

        <div className="flow-root mt-12 font-normal text-[18px] leading-[28px]">
            <p>
            At BaidPrime Auditing & Accounting Firm, we are a team of passionate professionals committed to providing our clients with an unmatched level of financial expertise in accounting, tax, and audit services.   
            </p>
            <p className='mt-4'>
            Our dedication to meeting the financial needs of our clients is unparalleled, and we strive to provide the highest level of service to help our clients succeed. Whether you need help with financial statements, financial reporting, budgeting, or forecasting, we've got you covered.
            </p>
        </div>
    </div>
    </section>

    {/* About Section Mission */}
    <section className="bg-[#0A0A0A] text-white py-10 lg:py-20 border-b border-[#36393F]">
    <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">About Us</p>
        <h2 className="text-3xl font-semibold leading-[44px] lg:text-4xl">Our Mission</h2>

        <div className="flow-root mt-12 font-normal text-[18px] leading-[28px]">
            <p>
            Inspire Confidence. Empower Change. By inspiring confidence in our people, clients and society, we help empower the change needed to solve the toughest challenges and lead the way forward.
            </p>
            <p className='mt-4'>
            Empowered by our Values, our people are our greatest strength. Together, we are building a values-led organization of the future. For Better.
            </p>
        </div>
    </div>
    </section>

    {/* Team Section */}
    <section className="bg-[#0A0A0A] text-white py-10 lg:py-16">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Team</p>
        <h2 className="text-3xl font-semibold leading-[44px] lg:text-4xl">Team behind BaidPrime</h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[56px] lg:gap-x-6 xl:gap-x-14">
          {teamMembers.map(({ id, name, title, imageSrc }) => (
            <TeamCard key={id} name={name} title={title} imageSrc={imageSrc} />
          ))}
        </div>
      </div>
    </section>

    {/* Contact Us Section */}
    <section id="contact-section"  className="py-10 lg:py-20">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Contact Us</p>
        <h2 className="text-2xl font-semibold leading-[44px] lg:text-4xl">We’d love to hear from you</h2>

        <section className="py-10 bg-white sm:py-16 lg:py-20">
          <div className="px-1 mx-auto lg:px-1 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-x-6 xl:gap-x-14">
              {addressData.map((address) => (
                <ContactCard key={address.id} title={address.title} message={address.message} info={address.info} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>

    {/* Footer */}
    <section className="py-10 bg-[#F4F5F6] sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
          <a href="#"  className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="w-[48px] h-[48px]"/>
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
    </>
  );
}
