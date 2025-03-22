import React from 'react'
import { Outlet } from 'react-router'
import HeaderProfile from './components/HeaderProfile'
import Acc from './pages/ProfilePage/Acc'
import Option from './pages/ProfilePage/Option'

function ProfilePage() {
  return (
    <div className='bg-[#aaa]'>
      <HeaderProfile />
      <main className='flex flex-row bg-[#A0A3BD py-[10vh] px-[5vw]'>
        <Acc />
        <div className='w-3/4 ml-[4vw]'>
            <Option />
            <Outlet />
        </div>
      </main>
    </div>
  )
}

export default ProfilePage
