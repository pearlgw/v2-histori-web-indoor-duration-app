"use client";
import DataTableDemo from '@/components/Table/DataTableDemo'
import UserProfile from '@/components/UserProfile'
import React from 'react'
import CircleButton from '@/components/button/CircleButton';
import Button from '@/components/button/Button';
import AddUserForm from '@/components/form/AddUserForm';
import { useSession } from "next-auth/react";

const AdminDashboard = () => {
  const { data: session } = useSession();
  const userRole = session?.user?.role;

  const [showForm, setShowForm] = React.useState(false);
  const [refreshSignal, setRefreshSignal] = React.useState(0);

  return (
    <>
      <div className='w-full py-6 bg-white'>
        <div className='mx-4 md:mx-14 pb-8'>
          <UserProfile />
        </div>

        {userRole === "admin" && showForm ? (
          <>
            <div className='mx-4 xl:mx-14'>
              <div className='flex justify-between'>
                <Button variant='back' size='sm' onClick={() => setShowForm(false)}/>
                <p className='text-green-500'>Tambah Pengguna</p>
              </div>
              <AddUserForm />
            </div>
          </>
        ) : (
          <>
            <div className='flex flex-row gap-8 mx-4 xl:mx-14'>
              <Button variant='addUser' size='sm' onClick={() => setShowForm(true)}/>
              <CircleButton type="refresh" onClick={() => setRefreshSignal(prev => prev + 1)} />
            </div>
            <div className='mx-4 xl:mx-14'>
              <DataTableDemo refreshSignal={refreshSignal} isAdmin={userRole === "admin"}/>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default AdminDashboard