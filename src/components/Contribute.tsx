import React, { useState } from 'react'
import { SlPencil } from "react-icons/sl";
import Card from './Card';

const Contribute = () => {
  return (
    <div className='h-[500px]'>
      <div className='flex flex-col items-center justify-center mx-14'>
        <div>
          <h1 className='font-semibold w-full text-4xl leading-[60px] text-[#484848]'>Bagaimana Cara Berkontribusi?</h1>
        </div>
        <div className='flex w-[400px] text-sm text-gray-700'>
            <p className='text-center'>
              Cukup Menjalankan 3 langkah mudah untuk mengenalkan wajah anda dengan sistem kami
            </p>
        </div>
        <div className='flex flex-col justify-end h-[320px] w-[800px] mt-10 rounded-3xl border border-slate-400'>
          <div className='flex flex-row justify-between gap-5 mx-16'>
          {[
            { header: 'Hubungi Admin', description: 'Lorem ipsum dolor sit amet.', },
            { header: 'Kontak Support', description: 'Bantu kami dengan pertanyaan.' },
            { header: 'Gabung Komunitas', description: 'Bergabung dengan pengembang lainnya.' }
          ].map((item, index) => (
            <Card
              key={index}
              icon={SlPencil}
              header={item.header}
              description={item.description}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contribute