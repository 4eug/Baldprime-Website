/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function TeamCard({name, title, imageSrc}) {
  return (
    <div>
    <div className="block aspect-w-4 aspect-h-3">
      <img
        className="object-cover w-[144px] h-[144px] sm:w-full sm:h-full rounded-full"
        src={imageSrc}
        alt=""
      />
    </div>
    <p className="mt-6 text-lg font-semibold">
        {name}
    </p>
    <p className="mt-2 text-sm text-[#AFB3BB]">
    {title}
    </p>
  </div>
  )
}
