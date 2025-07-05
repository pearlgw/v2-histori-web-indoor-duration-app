import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Link from 'next/link'
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='h-[450px] xl:h-[500px] relative' id='home'>
      <div className='mx-auto flex flex-col justify-center h-full'>
        <div className='bg-white mx-4 xl:mx-14 mt-20 py-8 h-[300px] md:h-[350px] xl:h-[400px] rounded-3xl'>
          <div className='flex flex-row mx-8 max-md:justify-center justify-between'>
            <div className='flex flex-col w-[250px] gap-4'>
              <h1 className="font-semibold h-auto xl:w-[400px] text-4xl xl:text-5xl leading-[45px] xl:leading-[60px] text-[#484848]">Rekognisi dan Rekam Dalam Satu Waktu</h1>
              <p className='hidden xl:block md:block text-base text-[#484848] w-[400px] md:w-[350px]'>Mengawasi orang orang yang kamu kenali dengan teknologi terbaru kami</p>
              <div className='mt-16'>
                <Link href='/login'>
                  <p className="font-bold flex justify-center xl:justify-normal items-center gap-1">
                    Ayo Mulai
                    <IoArrowForwardCircleOutline className="w-6 h-6" />
                  </p>
                </Link>
              </div>
            </div>
            <div className='relative xl:w-[350px] xl:h-[350px] md:w-[300px] md:h-[300px] max-md:hidden xl:block'>
              <Image src='/landing/card.png' fill alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero