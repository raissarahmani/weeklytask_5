import React from 'react'

import MovieList from "./Home/MovieList";
import Newsletter from '../components/Newsletter';

import Background from '../assets/avenger.png'

function Home2() {
  return (
    <>
    <section className='bg-[50%_50%] relative z-[0]' style={{backgroundImage: `url(${Background})`}}>
        <div className='py-[15vh] px-[10vw] w-3/5'>
            <p className='font-subtitle text-[#fff]'>LIST MOVIE OF THE WEEK</p>
            <p className='font-medium text-4xl text-[#fff] my-[2vh]'>Experience the Magic of Cinema: Book Your Tickets Today</p>
        </div>
    </section>
    <MovieList />
    <Newsletter />
    </>
  )
}

export default Home2
