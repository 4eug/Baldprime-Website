import React from 'react';
import ContactCard from './cards/contactCard';

export default function ContactUs() {
  const addressData = [
    { id: 1, title: 'Enquiry', message: 'How can we help you?', info: 'sales@baidprime.com' },
    { id: 2, title: 'Address', message: 'Visit our head office', info: 'Plot C11 Tetteh Quarshie Interchange Spintex Rd, Accra' },
    { id: 3, title: 'Call our team', message: 'Mon - Fri from 8am to 5pm Sat from 10am to 2pm', info: '233 20 002 24123' }
  ];

  return (
    <section className="py-10 lg:py-20">
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
  );
}
