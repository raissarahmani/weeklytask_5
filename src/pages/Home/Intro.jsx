import React from 'react'

import GuaranteedIcon from '../../assets/guaranteed.png'
import AffordableIcon from '../../assets/affordable.png'
import ResponsiveIcon from '../../assets/chat.png';

function Intro() {
  return (
    <section className='py-[2vh] px-[10vw] bg-[#fff]'>
        <div className='font-subtitle text-[#1D4ED8] text-center md:text-left'>WHY CHOOSE US</div>
        <div className='font-normal text-4xl/12 md:text-4xl text-[#121212] my-[3vh] text-center md:text-left'>Unleashing the Ultimate Movie <br /> Experience</div>
        <div className='flex flex-col md:flex-row md:justify-between items-center mt-[7vh]'>
            <div className='px-[1vw] my-[5vh]'>
                <div className='icon-container left-1/2 md:left-0 -translate-1/2 md:translate-[0]'>
                    <img className='w-1/2 h-1/2 absolute top-1/4 left-1/4' src={GuaranteedIcon} alt="Guaranteed" />
                </div>
                <div className='font-subtitle text-[#18181B] my-[0] md:my-[2vh] text-center md:text-left'>Guaranteed</div>
                <div className='font-normal text-[#A0A3BD] text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, architecto similique</div>    
            </div>
            <div className='px-[1vw] my-[5vh]'>
                <div className='icon-container left-1/2 md:left-0 -translate-1/2 md:translate-[0]'>
                    <img className='w-1/2 h-1/2 absolute top-1/4 left-1/4' src={AffordableIcon} alt="Affordable" />
                </div>
                <div className='font-subtitle text-[#18181B] my-[2vh] text-center md:text-left'>Affordable</div>
                <div className='font-normal text-[#A0A3BD] text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, architecto similique</div>    
            </div>
            <div className='px-[1vw] my-[5vh]'>
                <div className='icon-container left-1/2 md:left-0 -translate-1/2 md:translate-[0]'>
                    <img className='w-1/2 h-1/2 absolute top-1/4 left-1/4' src={ResponsiveIcon} alt="24/7 Customer Service" />
                </div>
                <div className='font-subtitle text-[#18181B] my-[2vh] text-center md:text-left'>24/7 Customer Service</div>
                <div className='font-normal text-[#A0A3BD] text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, architecto similique</div>    
            </div>
       </div>
    </section>
  )
}

export default Intro
