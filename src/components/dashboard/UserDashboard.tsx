import React from 'react'
import UserProfile from '../UserProfile'
import CircleButton from '../button/CircleButton'
import Logo from '../Logo'
import DetailTable from '../Table/DetailTable'
import DataTableDemo from '../Table/DataTableDemo'

const UserDashboard = () => {
  return (
    <div className='w-full py-6 bg-white'>
      <div className='flex flex-row items-center justify-between mx-4 md:mx-14 pb-8'>
          <Logo />
        <div className='flex flex-row gap-8'>
          <UserProfile />
          <CircleButton type='logout' onClick={() => {console.log("clicked")}}/>
        </div>
      </div>

        <div className='mx-4 md:mx-14'>
          <div className='flex flex-col gap-2'>
            <div>
              <div className='text-gray-500 text-xs'>Nama</div>
              <div>Dzawil</div>
            </div>
            <div>
              <div className='text-gray-500 text-xs'>Email</div>
              <div>dzawilu@gmail.com</div>
            </div>
            <div>
              <div className='text-gray-500 text-xs'>Status saat ini</div>
              <div>Indoor</div>
            </div>
          </div>

          <div className='py-10'>
            <DataTableDemo/>
          </div>
        </div>
    </div>
  )
}

export default UserDashboard