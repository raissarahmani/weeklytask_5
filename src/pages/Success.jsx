import React from 'react'

import Ticket from './Payment/Ticket'

import Bg from '../assets/avenger.png'
import NextRight from '../assets/Vector.png'
import NextDown from '../assets/Arrow.png'

function Success() {
  return (
    <div className='relative flex flex-row bg-[#DEDEDE]'>
      <section className='w-3/5 bg-cover z-[0] py-[20vh] pr-[5vw] pl-[10vw]' style={{backgroundImage: `url(${Bg})`}}>
            <div>
                <img className='w-7/10 h-1/2' src="../../../public/tickitz.png" alt="Logo Tickitz" />
            </div>
            <p className='font-bold text-5xl text-[#fff]'>Thank You For Purchasing</p>
            <p className='text-2xl text-[#fff] my-[5vh]'>Lorem ipsum dolor sit amet consectetur. Quam pretium pretium tempor integer sed magna et.</p>
            <div className='flex flex-row items-center'>
                <p className='text-lg text-[#fff] mr-[2vw]'>Please download your ticket</p>
                <div>
                    <img src={NextRight} alt="" />
                    <img className='hidden' src={NextDown} alt="" />
                </div>
            </div>
        </section>
        <Ticket />
    </div>
  )
}

export default Success
