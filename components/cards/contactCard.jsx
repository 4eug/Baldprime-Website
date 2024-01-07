import React from 'react'

export default function ContactCard({title, message, info}) {
  return (
    <div className='border-l pl-[24px]'>
                <h3 className="text-lg font-semibold text-black">{title}</h3>
                <p className="mt-3 text-base text-[#606671]">{message}</p>
                <p className="mt-4 text-[#266EFF] font-semibold text-[16px] leading-[24px]">
                    {info}
                </p>
    </div>
  )
}
