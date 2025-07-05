import LoginForm from '@/components/form/LoginForm'
import Logo from '@/components/Logo'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row mx-4 bg-white rounded-3xl my-24 shadow-lg border border-blue-100 shadow-blue-100 w-full max-w-3xl overflow-hidden">
        
        {/* Left Section: Logo & LoginForm */}
        <div className="flex flex-col gap-10 py-10 items-center md:items-start w-full md:w-1/2">
          <div className='md:px-8'>
            <Logo />
          </div>
          <LoginForm />
        </div>

        {/* Right Section: Image (Hidden on small screens) */}
        <div className="hidden md:flex justify-center items-center w-1/2 bg-primary">
          <Image src="/login/login.png" width={350} height={350} objectFit='cover' alt="Login" />
        </div>

      </div>
    </div>
  )
}

export default page
