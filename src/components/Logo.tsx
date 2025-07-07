import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="w-fit">
      <div className='flex flex-row gap-1 w-auto hover:cursor-pointer'>
        {/* Image Logo */}
        <div className='flex items-center justify-center'>
          <Image
            src='/logo/bengkod-logo.png'
            alt='Bengkel Koding Logo'
            width={45}
            height={45}
          />
        </div>
        <div className='flex flex-col gap-2 justify-center'>
          <span className='font-bold text-xl leading-4 tracking-normal'>Bengkel Koding</span>
          <span className='font-medium text-xs leading-4 tracking-normal text-[#667085]'>Indoor Duration</span>
        </div>
      </div>
    </Link>
  )
}

export default Logo
