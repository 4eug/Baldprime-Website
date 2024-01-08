/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

const BlogCard = ({ title, imageSrc, content1, content2, content3, content4, content5, content6, showLearnMore, }) => {
  const [open, setOpen] = useState(false)

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
        {content6 && <li>{content6}</li>}
      </ul>
      {showLearnMore && <a href="" className='pl-6 text-[#266EFF] text-sm font-semibold' onClick={() => setOpen(true)} >Learn more</a>}
    </div>
  );
};

export default BlogCard;
