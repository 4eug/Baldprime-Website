import React from 'react'

export default function About() {
  return (
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

  )
}
