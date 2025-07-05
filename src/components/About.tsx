import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className='flex flex-col bg-white py-10'>
        <h1 className='text-4xl font-bold leading-[60px] text-[#484848] text-center'>About Us</h1>
        <div className='flex flex-row items-center justify-center gap-16 mt-5'>
          <div className='hidden md:block relative w-[350px] h-[250px] overflow-hidden rounded-[35] shadow-lg shadow-blue-200'>
            <Image src='/about/about.jpeg' alt='hero' fill objectFit='cover'/>
          </div>
          <p className='w-[280px] text-lg'>Didirikan oleh mahasiswa Universitas Dian Nuswantoro Yang berfokus pada Computer vision dan rekognisi</p>
        </div>
      </div>
    </section>
  )
}

export default About