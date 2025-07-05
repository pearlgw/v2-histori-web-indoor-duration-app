"use client"
import DetailTable from '@/components/Table/DetailTable'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='w-full py-6 bg-white'>
        <div className='mx-4 md:mx-14'>
          <div className='flex bg-red-500 w-full h-[400px] justify-between'>
            <div className='flex justify-center items-center bg-blue-300 w-full h-full'>
              <Image src={"/loading.svg"} width={100} height={100} alt=''/>
            </div>
            <div className='bg-blue-600 w-full h-full'>
              <p>Person Detail</p>
              <p>Name : </p>
              <p>NIM : </p>
              <p>Email : </p>
              <p>Role : </p>
              <p>Address : </p>
            </div>
          </div>

          <div className='w-full h-full my-10'>
            <DetailTable/>
          </div>
        </div>
      </div>
    </>
  )
}

export default page