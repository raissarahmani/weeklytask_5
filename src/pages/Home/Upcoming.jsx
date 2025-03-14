import React from 'react'

import ArrowLeft from '../../assets/left-white.png'
import ArrowRight from '../../assets/right-white.png'

function Upcoming() {
  return (
    <section className='py-[7vh] px-[10vw] bg-[#fff]'>
        <p className='font-subtitle text-[#1D4ED8]'>UPCOMING MOVIES</p>
        <div className='flex flex-row justify-between'>
            <p class='text-4xl text-[#121212] font-normal my-[3vh]'>Exciting Movie Coming Soon</p>
            <div className='flex flex-row gap-[0.5vw]'>
                <div className="icon-container">
                    <img className='absolute top-1/4 left-1/4' src={ArrowLeft} alt="Previous" />
                </div>
                <div className="icon-container">
                    <img className='absolute top-1/4 right-1/4' src={ArrowRight} alt="Next" />
                </div>
            </div>
        </div>
        <div className='flex flex-row items-stretch justify-between gap-[1vw]'>
            <div className="container-movie">
                <img className='movie' src="../../public/poster4.png" alt="Black Widow" />
                <p className="movie-title">Black Widow</p>
                <p className="font-subtitle text-[#1D4ED8] mb-[2vh]">December 2024</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Action</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
            </div>
            <div className="container-movie">
                <img className='movie' src="../../public/poster3.png" alt="The Witches" />
                <p className="movie-title">The Witches</p>
                <p className='font-subtitle text-[#1D4ED8] mb-[2vh]'>January 2024</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Comedy</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
            </div>
            <div className="container-movie">
                <img className='movie' src="../../public/poster2.png" alt="Tennet" />
                <p className="movie-title">Tennet</p>
                <p className='font-subtitle text-[#1D4ED8] mb-[2vh]'>June 2024</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Action</p>
                    <p className='movie-genre'>Sci-Fi</p>
                </div>
            </div>
            <div className="container-movie">
                <img className='movie' src="../../public/poster1.png" alt="Spiderman" />
                <p className="movie-title">Spiderman</p>
                <p className='font-subtitle text-[#1D4ED8] mb-[2vh]'>March 2024</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Action</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Upcoming
