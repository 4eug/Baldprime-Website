import Meta from "../components/utils/meta";
import Head from 'next/head';
import BlogCard from '../components/cards/blogCard';
import TeamCard from '../components/cards/teamCard';
import ContactCard from '../components/cards/contactCard';
import { useEffect } from 'react';

export default function Page() {

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
    { id: 1, title: 'Financial Audit', imageSrc: '/Financial Audit.png', content: 'In-depth financial statement audits to ensure accuracy and compliance with regulatory standards' },
    { id: 2, title: 'Forensic Audit', imageSrc: '/Forensic Audit.png', content: 'Investigative auditing to uncover fraud, resolve disputes, and ensure legal compliance.' },
    { id: 3, title: 'Accounting Services', imageSrc: '/Account Service.png', content: 'Comprehensive accounting solutions, from bookkeeping to advanced financial reporting.' },
    { id: 4, title: 'Taxation', imageSrc: '/Taxation.png', content: 'Expert tax services including planning, compliance, and advisory for individuals and corporations.' },
    { id: 5, title: 'Financial Statements', imageSrc: '/Financial Statement.png', content: 'Precise preparation of financial reports for informed decision-making and compliance.' },
    { id: 6, title: 'General Tax & Legal Services', imageSrc: '/General Tax & Legal.png', content: 'Efficient management of tax filings and GRA portal operations to ensure timely compliance.' },
    { id: 7, title: 'Business Advisory', imageSrc: '/Business advisory.png', content: 'Strategic consulting services to drive business growth and adapt to market changes.' },
    { id: 8, title: 'General Tax & Legal Services', imageSrc: '/General Tax & Legal.png', content: 'Efficient management of tax filings and GRA portal operations to ensure timely compliance.' },
    { id: 9, title: 'Global Transfer Pricing', imageSrc: '/Global Transfer.png', content: 'Strategic advice on cross-border transactions to comply with international tax laws.' },
  ];

  // Team members data
  const teamMembers = [
    { id: 1, name: 'Stephen De-Graft Baidu', title: 'Managing Partner', imageSrc: '/Stephen.png' },
    { id: 2, name: 'Stephen De-Graft Baidu', title: 'Managing Partner', imageSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg' }
  ];

  // Address
  const addressData = [
    { id: 1, title: 'Enquiry', message: 'How can we help you?', info: 'sales@baidprime.com' },
    { id: 2, title: 'Address', message: 'Visit our head office', info: 'Plot C11 Tetteh Quarshie Interchange Spintex Rd, Accra' },
    { id: 3, title: 'Call our team', message: 'Mon - Fri from 8am to 5pm Sat from 10am to 2pm', info: '233 20 002 24123' }
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
          <span className="self-center text-[30px] leading-[38px] font-extrabold whitespace-nowrap">BAAF</span>
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
      <div className="grid max-w-screen-xl gap-8 lg:grid-cols-12 mx-auto px-6 py-32">
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
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">Our services we offer for you</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 lg:max-w-full lg:mt-16">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} title={blog.title} imageSrc={blog.imageSrc} content={blog.content} />
          ))}
        </div>
      </div>
    </section>

    {/* About Section */}
    <section class="bg-[#0A0A0A] text-white py-10 lg:py-20 border-b border-[#36393F]">
    <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">About Us</p>
        <h2 class="text-3xl font-semibold leading-[44px]lg:text-4xl">How we work at BaidPrime</h2>

        <div class="flow-root mt-12 font-normal text-[18px] leading-[28px]">
            <p>
                BaidPrime Auditing & Accounting Services Ltd anchors its reputation on the unshakable pillars of ethical accounting and transparency. We stand as guardians of integrity in the financial world, meticulously ensuring that every ledger, every report, and every piece of financial advice is steeped in honesty and moral clarity. 
            </p>
            <p className='mt-4'>
                Our ethos of ethical accounting transcends mere compliance with regulations; it is about fostering trust and delivering peace of mind to our clients. In a landscape where financial complexities often obscure clarity, BaidPrime is a beacon of truth, providing services that clients can rely on without reservation.
            </p> 
            <p className='mt-4'>
            Our professionals are not just experts in their fields; they are champions of an ethical approach that protects and enhances the financial health and success of our clients. At BaidPrime Auditing & Accounting Services Ltd, we don’t just account for your finances; we account for our actions with unwavering ethical commitment.
            </p>
        </div>

        <div className='mt-12'>
        <a href="#" className="bg-[#0055FF] h-[40px] inline-flex items-center text-white text-base rounded-[2px] font-semibold px-4 py-4">
              Contact us
        </a>
        </div>
    </div>
    </section>

    {/* Team Section */}
    <section className="bg-[#0A0A0A] text-white py-10 lg:py-16">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Team</p>
        <h2 className="text-3xl font-semibold leading-[44px] lg:text-4xl">Team behind BaidPrime</h2>

        <div className="flex flex-col mt-12 gap-[48px] sm:flex-row">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-x-8 xl:gap-x-20">
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
    </>
  );
}
