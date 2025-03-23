import React from 'react'

import Menu from '../../assets/menu2.png'
import Pp from '../../assets/pp.png'
import Shape from '../../assets/Ellipse 13.png'
import Star from '../../assets/star.png'

function Acc() {
  return (
    <section className='hidden md:block w-1/4 rounded-[24px] bg-[#fff]'>
        <div className='py-[7vh] px-[3vw] border-b border-solid border-[#DEDEDE]'>
            <div className='flex flex-row justify-between'>
                <p className='text-[#4E4B66]'>INFO</p>
                <img src={Menu} alt=""/>
            </div>
            <div className='rounded-full w-[15vh] h-[15vh] my-[5vh] mx-[5vw] shadow-md'><img className='object-cover w-[15vh] h-[15vh] rounded-full' src={Pp} alt="Profile Picture"/></div>
            <div>
                <p className='text-center font-normal text-xl'>Jonas El Rodriguez</p>
                <p className='text-center text-sm my-[1vh]'>Moviegoers</p>
            </div>
        </div>
        <div className='pt-[7vh] px-[3vw]'>
            <p className='text-[#4E4B66] font-semibold'>Loyalty Points</p>
            <div className='relative py-[5vh] rounded-2xl bg-[transparent]'>
                <img className='absolute top-0 -right-1/20' src={Shape} alt=""/>
                <img className='absolute top-1/10 -right-1/10' src={Shape} alt=""/>
                <div className='bg-[#1D4ED8] rounded-2xl shadow-lg py-[4vh] px-[1vw]'>
                    <p className='font-semibold text-lg text-[#fff] mb-[5vh]'>Moviegoers</p>
                    <img className='absolute top-3/20 right-0' src={Star} alt=""/>
                    <p className='font-normal text-xl text-[#fff]'>320 <span className='text-xs'>points</span></p>
                </div>
            </div>
            <div className='text-sm text-[#4E4B66] text-center'>
                <p>180 points become a master</p>
                <div className='inner-shadow bg-[#F5F6F8] rounded-lg h-[2vh] my-[2vh]'><div className='bg-[#1D4ED8] h-[2vh] w-1/2 rounded-lg'></div></div>
            </div>
            <button className='invisible custom-bottom bg-[#1D4ED8] rounded-xl my-[7vh] py-[1vh] w-full text-[#fff]'>Edit Profile</button>
        </div>
    </section>
  )
}

export default Acc
