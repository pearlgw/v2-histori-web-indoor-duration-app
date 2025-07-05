import React from 'react'
import Button from './button/Button'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='mx-auto'>
      <div className='flex flex-col xl:flex-row justify-between mx-4 xl:mx-14 gap-6 xl:gap-10 xl:py-20'>
        {/* Siap Kontribusi */}
        <div className='xl:w-6/12 xl:h-[300px] mt-6'>
          <p className='hidden xl:block text-blue-600'>Kami Siap Rekognisi Wajah Anda</p>
          <h1 className='font-semibold w-full text-4xl leading-[50px] text-[#484848]'>Siap Berkontribusi?</h1>
          <p className='text-gray-500'>Bantu kami untuk memperkaya model yang kami miliki dengan kontribusi data dari anda!</p>
          <div className='mt-10'>
            <Button variant='whatsapp' href='https://wa.me/6285723783739' />
          </div>
        </div>

        {/* 50 Orang Kontributor */}
        <div className='bg-white rounded-3xl xl:w-6/12 h-[250px] xl:h-[300px]'>
          <div className='flex flex-row w-auto justify-end my-10 mx-10'>
            <div className='bg-slate-400 rounded-full relative w-16 h-16 border-dashed z-40'>
              <Image src='/landing/card.png' alt='' fill objectFit='cover'/>
            </div>
            <div className='bg-slate-600 rounded-full relative w-16 h-16 border-dashed ml-[-25px] z-30'>
              <Image src='/landing/card.png' alt='' fill objectFit='cover'/>
            </div>
            <div className='bg-slate-800 rounded-full relative w-16 h-16 border-dashed ml-[-25px] z-20'>
              <Image src='/landing/card.png' alt='' fill objectFit='cover'/>
            </div>
            <div className='bg-slate-900 rounded-full relative w-16 h-16 border-dashed ml-[-25px] z-10'>
              <Image src='/landing/card.png' alt='' fill objectFit='cover'/>
            </div>
          </div>
          <div className='xl:mt-16 mx-10 w-64'>
            <p className='font-semibold w-full text-2xl text-[#484848]'>50 Orang telah menjadi Kontributor Data Kami</p>
          </div>
        </div>

        {/* Akurasi */}
        <div className='flex items-center justify-center bg-white rounded-3xl xl:w-4/12 h-[150px] xl:h-[300px]'>
          <div className='flex xl:flex-col gap-5 justify-center items-center mx-10'>
            <div className='rounded-full w-20 h-20 xl:w-44 xl:h-44 border-4 border-dashed border-blue-600'>
              <h1 className='flex justify-center font-semibold w-full text-3xl xl:text-6xl ml-1 xl:ml-0 xl:mt-14 mt-[20px] text-[#484848]'>90%</h1>
            </div>
            <div>
              <span className='text-blue-800 font-bold text-xl xl:text-2xl'>Akurasi Deteksi</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact