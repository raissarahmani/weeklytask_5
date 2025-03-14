import React from 'react'

function Hero() {
  return (
    <section className='flex flex-row px-[10vw] py-[10vh] bg-[#fff]'>
        <div className='w-3/5 px-[1vw] py-[15vh]'>
            <p className='font-subtitle text-[#1D4ED8]'>MOVIE TICKET PURCHASES #1 IN INDONESIA</p>
            <p className='font-normal text-5xl/15 text-[#121212] my-[2vh]'>Experience the Magic of Cinema: Book Your Tickets Today</p>
            <p className='font-normal text-[#A0A3BD]'>Sign up and get the ticket with a lot of discount</p>
        </div>
        <div className='flex flex-row w-2/5 px-[1vw]'>
            <div className='px-[0.5vw]'>
                <div className='w-[15vw] h-[30vh]'>
                    <img className='object-cover object-center-top w-full h-full rounded-t-3xl py-[1vh]' src="../../public/poster6.png" alt="Movie Poster" />
                </div>
                <div className='w-[15vw] h-[40vh]'>
                    <img className='object-cover object-center-top w-full h-full rounded-b-3xl py-[1vh]' src="../../public/poster1.png" alt="Movie Poster" />
                </div>
            </div>
            <div className='px-[0.5vw]'>
                <div className='w-[15vw] h-[40vh]'>
                    <img className='object-cover object-center-top w-full h-full rounded-t-3xl py-[1vh]' src="../../public/poster5.png" alt="Movie Poster" />
                </div>
                <div className='w-[15vw] h-[30vh]'>
                    <img className='object-cover object-center-top w-full h-full rounded-b-3xl py-[1vh]' src="../../public/poster7.png" alt="Movie Poster" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
