import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Link from 'next/link'
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='h-[500px] relative' id='home'>
      <div className='container mx-auto flex flex-col justify-center h-full'>
        <div className='container'>
          <div className='bg-white mx-14 mt-20 py-8 h-[400px] rounded-3xl'>
            <div className='flex flex-row mx-10 justify-between'>
              <div className='flex flex-col gap-2'>
                <h1 className="font-semibold w-[400px] text-5xl leading-[60px] text-[#484848]">Rekoginisi dan Rekam Dalam Satu Waktu</h1>
                <p className='text-base text-[#484848] w-[400px]'>Mengawasi orang orang yang kamu kenali dengan teknologi terbaru kami</p>
                <div className='mt-16'>
                  <Link href='/login'>
                    <p className="font-bold flex items-center gap-1">
                      Mulai Sekarang
                      <IoArrowForwardCircleOutline className="w-6 h-6" />
                    </p>
                  </Link>
                </div>
              </div>
              <div className='w-[350px]'>
                <Image src='/landing/card.png' width={350} height={350} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero