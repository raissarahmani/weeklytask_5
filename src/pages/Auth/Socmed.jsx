import React from 'react'

import Google from '../../assets/google.png'
import Facebook from '../../assets/facebook.png'

function Socmed() {
  return (
    <div className='flex flex-row justify-evenly my-[3vh] py-[3vh] px-[3vw]'>
        <div className='flex flex-row items-center justify-evenly text-lg text-[#A0A3BD] rounded-sm py-[2vh] px-[1vw] shadow-md cursor-pointer'>
            <img className='px-[1vw]' src={Google} alt="Login via Google"/>
            <p className='hidden md:block'>Google</p>
        </div>
        <div className='flex flex-row items-center justify-evenly text-lg text-[#A0A3BD] rounded-sm py-[2vh] px-[1vw] shadow-md cursor-pointer'>
            <img className='px-[1vw]' src={Facebook} alt="Login via Facebook"/>
            <p className='hidden md:block'>Facebook</p>
        </div>
    </div>
  )
}

export default Socmed
