/* eslint-disable @next/next/no-img-element */
import React from 'react';

const BlogCard = ({ title, imageSrc, content }) => {
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
      <p className="mt-2 text-gray-600">
        {content}
      </p>
    </div>
  );
};

export default BlogCard;
