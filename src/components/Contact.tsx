import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-row justify-between mx-14 gap-10 py-20'>
        
        {/* Siap Kontribusi */}
        <div className='w-6/12 h-[300px] mt-6'>
          <p className='text-blue-600'>Kami Siap Rekognisi Wajah Anda</p>
          <h1 className='font-semibold w-full text-4xl leading-[60px] text-[#484848]'>Siap Berkontribusi?</h1>
          <p className='text-gray-500'>Bantu kami untuk memperkaya model yang kami miliki dengan kontribusi data dari anda!</p>
          <div className='mt-10'>
            <Button variant='whatsapp' href='/login' />
          </div>
        </div>

        {/* 50 Orang Kontributor */}
        <div className='bg-white rounded-3xl w-6/12 h-[300px]'>
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
          <div className='mt-16 mx-10 w-64'>
            <p className='font-semibold w-full text-2xl text-[#484848]'>50 Orang telah menjadi Kontributor Data Kami</p>
          </div>
        </div>

        {/* Akurasi */}
        <div className='bg-white rounded-3xl w-4/12 h-[300px]'>
          <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='rounded-full w-44 h-44 mt-10 border-4 border-dashed border-blue-600'>
              <h1 className='flex justify-center font-semibold w-full text-6xl mt-14 text-[#484848]'>90%</h1>
            </div>
            <div>
              <span className='text-blue-800 font-bold'>Akurasi Deteksi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact