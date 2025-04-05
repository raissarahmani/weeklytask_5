import React from 'react'
import { Link } from 'react-router'

function Option() {
  return (
    <section className='hidden md:flex flex-row justify-between md:justify-start md:rounded-2xl bg-[#fff] py-[4vh] px-[10vw] md:px-[3vw]'>
        <p className='text-lg text-[#AAAAAA] hover:text-[#1D4ED8] mr-[3vw] cursor-pointer'><Link to='/profile-page'>Account Setting</Link> </p>
        <p className='text-lg text-[#AAAAAA] hover:text-[#1D4ED8] mr-[3vw] cursor-pointer'><Link to='/profile-page/history'>Order History</Link></p>
    </section>
  )
}

export default Option
