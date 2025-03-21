import React from 'react'
import { Outlet } from 'react-router'

function Login() {
  return (
    <div className='bg-[#fff] rounded-lg py-[5vh] px-[5vw] md:px-[3vw] mx-[7vw] md:mx-0'>
      <Outlet />
    </div>
  )
}

export default Login
