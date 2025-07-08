// import React, { useState } from 'react'
// import { SlPencil } from "react-icons/sl";
// import Card from './Card';

// const Contribute = () => {
//   return (
//     <div id="contribute" className='h-full pb-10'>
//       <div className='flex flex-col items-center justify-center mx-4 xl:mx-14'>
//         <div>
//           <h1 className='font-semibold text-center w-full py-5 text-4xl leading-[50px] xl:leading-[60px] text-[#484848]'>Bagaimana Cara Berkontribusi?</h1>
//         </div>

//         <div className='flex xl:w-[400px] text-sm text-gray-700'>
//             <p className='text-center'>
//               Cukup Menjalankan 3 langkah mudah untuk mengenalkan wajah anda dengan sistem kami
//             </p>
//         </div>

//         <div className='hidden xl:flex flex-col justify-end h-[320px] w-[800px] rounded-3xl'>
//           <div className='flex flex-row justify-between gap-5 mx-16'>
//           {[
//             { header: 'Hubungi Admin', description: 'Hubungi admin untuk mendapatkan akun beserta token.', },
//             { header: 'Login', description: 'Login dengan akun dan token yang telah diberikan.' },
//             { header: 'Testing', description: 'Mulai testing dengan mengupload foto wajah.' }
//           ].map((item, index) => (
//             <Card
//               key={index}
//               icon={SlPencil}
//               header={item.header}
//               description={item.description}
//             />
//           ))}
//           </div>
//         </div>

//         {/* Mobile */}
//         <div className='hidden justify-center items-center max-xl:flex w-full overflow-scroll'>
//           <div className='flex flex-col justify-between items-center h-[320px] w-[800px] rounded-3xl xl:border xl:border-slate-400'>
//             <div className='flex flex-row justify-between gap-5 mx-16 py-6'>
//               {[
//                 { header: 'Hubungi Admin', description: 'Lorem ipsum dolor sit amet.', },
//                 { header: 'Kontak Support', description: 'Bantu kami dengan pertanyaan.' },
//                 { header: 'Gabung Komunitas', description: 'Bergabung dengan pengembang lainnya.' }
//               ].map((item, index) => (
//                 <Card
//                   key={index}
//                   icon={SlPencil}
//                   header={item.header}
//                   description={item.description}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Contribute

import React from 'react';
import { SlPencil } from "react-icons/sl";

const steps = [
  {
    header: 'Hubungi Admin',
    description: 'Hubungi admin untuk mendapatkan akun dan token kontribusi.',
  },
  {
    header: 'Login',
    description: 'Gunakan akun dan token untuk login ke sistem kami.',
  },
  {
    header: 'Testing',
    description: 'Mulai testing dengan mengunggah foto wajah anda.',
  }
];

// Card elegan langsung di sini
const Card = ({ icon: Icon, header, description }: {
  icon: React.ElementType,
  header: string,
  description: string
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 w-full max-w-[250px]">
      <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4 shadow-sm">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{header}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const Contribute = () => {
  return (
    <div id="contribute" className="py-16 bg-gradient-to-b from-white via-[#f9f9f9] to-white">
      <div className="max-w-7xl mx-auto px-6 xl:px-12 flex flex-col items-center">
        <h1 className="text-4xl xl:text-5xl font-bold text-center text-[#333] leading-tight mb-4">
          Bagaimana Cara Berkontribusi?
        </h1>
        <p className="text-center text-gray-600 max-w-xl mb-12 text-base xl:text-lg">
          Cukup ikuti 3 langkah mudah untuk mengenalkan wajah anda ke sistem kami.
        </p>

        {/* Desktop */}
        <div className="hidden xl:flex gap-8">
          {steps.map((item, index) => (
            <Card
              key={index}
              icon={SlPencil}
              header={item.header}
              description={item.description}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className="xl:hidden grid grid-cols-1 gap-6 w-full">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-md border transition hover:shadow-lg"
            >
              <div className="text-blue-500 bg-blue-100 p-3 rounded-full shadow-sm">
                <SlPencil size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{item.header}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contribute;