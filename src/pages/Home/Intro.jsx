import React from 'react'

import GuaranteedIcon from '../../assets/guaranteed.png'
import AffordableIcon from '../../assets/affordable.png'
import ResponsiveIcon from '../../assets/chat.png';

function Intro() {
  return (
    <section className='py-[2vh] px-[10vw] bg-[#fff]'>
        <div className='font-subtitle text-[#1D4ED8]'>WHY CHOOSE US</div>
        <div className='font-normal text-4xl text-[#121212] my-[3vh]'>Unleashing the Ultimate Movie <br /> Experience</div>
        <div className='flex flex-row justify-between items-center mt-[7vh]'>
            <div className='px-[1vw]'>
                <div className='icon-container'>
                    <img className='w-1/2 h-1/2 absolute top-1/4 left-1/4' src={GuaranteedIcon} alt="Guaranteed" />
                </div>
                <div className='font-subtitle text-[#18181B] my-[2vh]'>Guaranteed</div>
                <div className='font-normal text-[#A0A3BD]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, architecto similique</div>    
            </div>
            <div className='px-[1vw]'>
                <div className='icon-container'>
                    <img className='w-1/2 h-1/2 absolute top-1/4 left-1/4' src={AffordableIcon} alt="Affordable" />
                </div>
                <div className='font-subtitle text-[#18181B] my-[2vh]'>Affordable</div>
                <div className='font-normal text-[#A0A3BD]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, architecto similique</div>    
            </div>
            <div className='px-[1vw]'>
                <div className='icon-container'>
                    <img className='w-1/2 h-1/2 absolute top-1/4 left-1/4' src={ResponsiveIcon} alt="24/7 Customer Service" />
                </div>
                <div className='font-subtitle text-[#18181B] my-[2vh]'>24/7 Customer Service</div>
                <div className='font-normal text-[#A0A3BD]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, architecto similique</div>    
            </div>
       </div>
    </section>
  )
}

export default Intro
