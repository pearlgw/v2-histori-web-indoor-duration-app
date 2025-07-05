import React from 'react'
import Logo from './Logo'
import { FaInstagram } from 'react-icons/fa'
import { TbWorldWww } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='container mx-auto bg-slate-50 h-[300px]'>
      <div className='flex flex-col gap-10 md:flex-row justify-between mx-6 xl:mx-14 my-14'>
        <div className='flex flex-col gap-1'>
          <Logo/>
          <p className='mt-10'>Hubungi Kami:</p>
          <div className='flex flex-row gap-2'>
            <Link href='https://www.instagram.com/bengkelkoding.official'>
              <FaInstagram className='w-4 h-4'/>
            </Link>
            <Link href='https://bengkelkoding.dinus.ac.id/'>
              <TbWorldWww className='w-4 h-4'/>
            </Link>
            <Link href='https://www.instagram.com/bengkelkoding.official'>
              <BsWhatsapp className='w-4 h-4'/>
            </Link>
          </div>
        </div>
        <div className='flex flex-row gap-10 xl:gap-20'>
          <div className='flex flex-col gap-3'>
            <p className='font-bold'>Menu Cepat:</p>
            <Link href='#about'>About Us</Link>
            <Link href='/'>Home</Link>
            <Link href='#contribute'>Contribute</Link>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='font-bold'>Hubungi:</p>
            <p>+6285723783739</p>
            <p>bengkodcourse@gmail.com</p>
          </div>
        </div>
      </div>
      <div className='xl:mt-32 h-[90px] mx-6 xl:mx-14 w-auto'>
        <div className='rounded-full border-2 border-gray-300'></div>
        <p className='text-center py-3 text-sm'>Ⓒ 2024 Indoor Duration All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer