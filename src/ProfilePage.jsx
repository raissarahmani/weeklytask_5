import React from 'react'
import { Outlet } from 'react-router'
import HeaderProfile from './components/HeaderProfile'
import Acc from './pages/ProfilePage/Acc'
import Option from './pages/ProfilePage/Option'

function ProfilePage() {
  return (
    <div className='bg-[#aaa]'>
      <HeaderProfile />
      <main className='flex flex-row bg-[#A0A3BD md:py-[10vh] md:px-[5vw]'>
        <Acc />
        <div className='w-full md:w-3/4 md:ml-[4vw]'>
            <Option />
            <Outlet />
        </div>
      </main>
    </div>
  )
}

export default ProfilePage
