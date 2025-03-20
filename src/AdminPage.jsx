import React from 'react'
import { Outlet } from 'react-router'
import AdminDashboard from './components/AdminDashboard'

function AdminPage() {
  return (
    <div>
      <AdminDashboard />
      <main className='bg-[#a0a3bd33] py-[5vh] px-[10vw]'>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminPage
