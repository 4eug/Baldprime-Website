import React from 'react';
import BlogCard from './cards/blogCard';

export default function Service() {
  // Sample data for each blog card
  const blogData = [
    { id: 1, title: 'Financial Audit', imageSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg', content: 'In-depth financial statement audits to ensure accuracy and compliance with regulatory standards' },
    { id: 2, title: 'Forensic Audit', imageSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg', content: 'Investigative auditing to uncover fraud, resolve disputes, and ensure legal compliance.' },
    { id: 3, title: 'Accounting Services', imageSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg', content: 'Comprehensive accounting solutions, from bookkeeping to advanced financial reporting.' },
    { id: 4, title: 'Taxation', imageSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg', content: 'Expert tax services including planning, compliance, and advisory for individuals and corporations.' },
    { id: 5, title: 'Financial Statements', imageSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg', content: 'Precise preparation of financial reports for informed decision-making and compliance.' },
    { id: 6, title: 'General Tax & Legal Services', imageSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg', content: 'Efficient management of tax filings and GRA portal operations to ensure timely compliance.' },
    { id: 7, title: 'Business Advisory', imageSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg', content: 'Strategic consulting services to drive business growth and adapt to market changes.' },
    { id: 8, title: 'General Tax & Legal Services', imageSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg', content: 'Efficient management of tax filings and GRA portal operations to ensure timely compliance.' },
    { id: 9, title: 'Global Transfer Pricing', imageSrc: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg', content: 'Strategic advice on cross-border transactions to comply with international tax laws.' },
  ];

  return (
    <section className="py-10 bg-[#F9FAFA] sm:py-16 lg:py-24">
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
  );
}
