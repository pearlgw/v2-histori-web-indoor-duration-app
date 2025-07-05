import React, { useState } from 'react'
import { SlPencil } from "react-icons/sl";
import Card from './Card';

const Contribute = () => {
  return (
    <div id="contribute" className='h-full pb-10'>
      <div className='flex flex-col items-center justify-center mx-4 xl:mx-14'>
        <div>
          <h1 className='font-semibold text-center w-full py-5 text-4xl leading-[50px] xl:leading-[60px] text-[#484848]'>Bagaimana Cara Berkontribusi?</h1>
        </div>

        <div className='flex xl:w-[400px] text-sm text-gray-700'>
            <p className='text-center'>
              Cukup Menjalankan 3 langkah mudah untuk mengenalkan wajah anda dengan sistem kami
            </p>
        </div>

        <div className='hidden xl:flex flex-col justify-end h-[320px] w-[800px] rounded-3xl'>
          <div className='flex flex-row justify-between gap-5 mx-16'>
          {[
            { header: 'Hubungi Admin', description: 'Hubungi admin untuk mendapatkan akun beserta token.', },
            { header: 'Login', description: 'Login dengan akun dan token yang telah diberikan.' },
            { header: 'Testing', description: 'Mulai testing dengan mengupload foto wajah.' }
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

        {/* Mobile */}
        <div className='hidden justify-center items-center max-xl:flex w-full overflow-scroll'>
          <div className='flex flex-col justify-between items-center h-[320px] w-[800px] rounded-3xl xl:border xl:border-slate-400'>
            <div className='flex flex-row justify-between gap-5 mx-16 py-6'>
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
    </div>
  )
}

export default Contribute