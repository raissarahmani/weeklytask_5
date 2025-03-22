import React from 'react'
import { Link } from 'react-router'

function Option() {
  return (
    <section className='flex flex-row rounded-2xl bg-[#fff] py-[4vh] px-[3vw]'>
        <p className='text-lg text-[#AAAAAA] mr-[3vw] cursor-pointer'><Link to='/profile-page'>Account Setting</Link> </p>
        <p className='text-lg text-[#AAAAAA] mr-[3vw] cursor-pointer'><Link to='/profile-page/history'>Order History</Link></p>
    </section>
  )
}

export default Option
