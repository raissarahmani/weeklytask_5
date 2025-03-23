import Ticket from './Payment/Ticket'

import Bg from '../assets/avenger.png'
import NextRight from '../assets/Vector.png'
import NextDown from '../assets/Arrow.png'

function Success() {
  return (
    <div className='relative flex flex-col md:flex-row bg-[#DEDEDE]'>
      <section className='relative w-full md:w-3/5 bg-cover z-0 py-[30vh] md:py-[20vh] px-[10vw] md:pr-[5vw] md:pl-[10vw] before:content-[""] before:absolute before:inset-0 before:-z-1 before:bg-[#00000099]' style={{backgroundImage: `url(${Bg})`}}>
          <div className='px-[15vw] md:px-0'>
              <img className='w-full md:w-7/10 h-1/2' src="../../../public/tickitz.png" alt="Logo Tickitz" />
          </div>
          <p className='font-normal md:font-bold text-3xl md:text-5xl text-center md:text-left text-[#fff]'>Thank You For Purchasing</p>
          <p className='text-lg md:text-2xl text-center md:text-left text-[#fff] my-[5vh]'>Lorem ipsum dolor sit amet consectetur. Quam pretium pretium tempor integer sed magna et.</p>
          <div className='flex flex-col md:flex-row items-center'>
              <p className='text-sm md:text-lg text-center md:text-left text-[#fff] mr-[2vw] md:mb-0 mb-[3vh]'>Please download your ticket</p>
              <div>
                  <img className='hidden md:block' src={NextRight} alt="" />
                  <img className='block md:hidden' src={NextDown} alt="" />
              </div>
          </div>
      </section>
      <Ticket />
    </div>
  )
}

export default Success
