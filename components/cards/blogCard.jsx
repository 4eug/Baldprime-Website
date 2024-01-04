/* eslint-disable @next/next/no-img-element */
import React from 'react';

const BlogCard = ({ title, imageSrc, content1, content2, content3, content4, content5, showLearnMore  }) => {
  return (
    <div>
      <div className="block aspect-w-4 aspect-h-3">
        <img
          className="object-cover w-full h-full rounded-[12px]"
          src={imageSrc}
          alt=""
        />
      </div>
      <p className="mt-6 text-xl font-semibold">
          {title}
      </p>
      <ul className="mt-2 pl-6 text-gray-600 list-disc">
        <li>{content1}</li>
        <li>{content2}</li>
        {content3 && <li>{content3}</li>}
        {content4 && <li>{content4}</li>}
        {content5 && <li>{content5}</li>}
      </ul>
      {showLearnMore && <p className='pl-6 text-[#266EFF] text-sm font-semibold'>Learn more</p>}
    </div>
  );
};

export default BlogCard;
