import React from 'react'
import Logo from './Logo'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='container mx-auto bg-slate-50 h-[300px]'>
      <div className='flex flex-row justify-between mx-14 my-14'>
        <div className='flex flex-col gap-1'>
          <Logo />
          <p className='mt-10'>Hubungi Kami:</p>
          <div className='flex flex-row gap-2'>
            <FaInstagram/>
            <FaFacebook/>
            <FaTwitter/>
          </div>
        </div>
        <div className='flex flex-row gap-20'>
          <div className='flex flex-col gap-3'>
            <p className='font-bold'>Menu Cepat:</p>
            <Link href='/'>About Us</Link>
            <Link href='/'>Home</Link>
            <Link href='/'>Contribute</Link>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='font-bold'>Hubungi:</p>
            <p>+1234567890</p>
            <p>suryapolah@gmail.com</p>
          </div>
        </div>
      </div>
      <div className='mt-32 h-[90px] mx-14'>
        <div className='rounded-full border-2 border-gray-300'></div>
        <p className='text-center py-3 text-sm'>Ⓒ 2024 Indoor Duration All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer