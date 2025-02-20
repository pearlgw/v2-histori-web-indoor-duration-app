import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='h-[400px] bg-white py-6'>
      <h1 className='text-4xl font-bold leading-[60px] text-[#484848] text-center'>About Us</h1>
      <div className='flex flex-row items-center justify-center gap-16 mt-5'>
        <div className='relative w-[350px] h-[250px] bg-green-200 overflow-hidden rounded-[35] shadow-lg shadow-blue-200'>
          <Image src='/about/about.jpeg' alt='hero' fill objectFit='cover'/>
        </div>
        <p className='w-[280px] text-lg'>Didirikan oleh mahasiswa Universitas Dian Nuswantoro Yang berfokus pada Computer vision dan rekognisi</p>
      </div>
    </div>
  )
}

export default About