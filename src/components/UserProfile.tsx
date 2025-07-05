import Image from 'next/image';
import React from 'react'

const UserProfile = () => {
  const getDate = () => {
    const date = new Date();
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className='flex flex-row gap-3 items-center'>
      <div className='bg-slate-400 rounded-full relative w-12 h-12 border-dashed z-40 shadow-sm shadow-blue-400'>
        <Image src='/landing/card.png' alt='' fill objectFit='cover'/>
      </div>
      <div className='flex flex-col'>
        <p className='font-semibold text-gray-700'>Halo, Admin!</p>
        <p className='text-[12px] text-gray-400'>{getDate()}</p>
      </div>
    </div>
  )
}

export default UserProfile