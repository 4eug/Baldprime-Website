import React from 'react'

export default function ContactCard({title, message, info}) {
  return (
    <div className='border-l pl-[24px]'>
                <h3 class="text-lg font-semibold text-black">{title}</h3>
                <p class="mt-3 text-base text-[#606671]">{message}</p>
                <p class="mt-4 text-[#266EFF] font-semibold text-[16px] leading-[24px]">
                    {info}
                </p>
    </div>
  )
}
