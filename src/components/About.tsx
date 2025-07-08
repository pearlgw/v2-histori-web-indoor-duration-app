// import Image from 'next/image'
// import React from 'react'

// const About = () => {
//   return (
//     <section id="about">
//       <div className='flex flex-col bg-white py-10'>
//         <h1 className='text-4xl font-bold leading-[60px] text-[#484848] text-center'>About Us</h1>
//         <div className='flex flex-row items-center justify-center gap-16 mt-5'>
//           <div className='hidden md:block relative w-[350px] h-[250px] overflow-hidden rounded-[35] shadow-lg shadow-blue-200'>
//             <Image src='/about/about.jpeg' alt='hero' fill objectFit='cover'/>
//           </div>
//           <p className='w-[280px] text-lg'>Didirikan oleh mahasiswa Universitas Dian Nuswantoro Yang berfokus pada Computer vision dan rekognisi</p>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl xl:text-5xl font-bold text-center text-gray-800 mb-12 leading-snug"
        >
          Tentang Kami
        </motion.h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative w-full h-[250px] md:h-[300px] xl:h-[350px] rounded-3xl overflow-hidden shadow-xl shadow-blue-100"
          >
            <Image
              src="/about/about.jpeg"
              alt="Tentang Kami"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
              Kami adalah tim dari <span className="font-semibold text-blue-600">Universitas Dian Nuswantoro</span>{' '}
              yang berfokus pada inovasi di bidang <span className="font-semibold text-blue-600">Computer Vision</span>{' '}
              dan <span className="font-semibold text-blue-600">Face Recognition</span>. Kami percaya teknologi ini
              dapat dimanfaatkan untuk membantu berbagai kebutuhan cerdas di masa depan.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;