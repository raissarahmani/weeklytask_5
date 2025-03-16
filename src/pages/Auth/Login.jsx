import React from 'react'
import { Outlet } from 'react-router-dom'

function Login() {
  return (
    <div className='bg-[#fff] rounded-lg py-[5vh] px-[3vw]'>
      <Outlet />
    </div>
  )
}

export default Login
