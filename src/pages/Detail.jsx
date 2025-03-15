import React from 'react'

import Summary from './Detail/Summary'
import Book from './Detail/Book'

function Detail() {
  return (
    <div className='relative'>
        <section className='relative h-[60vh] bg-[url(../../public/poster8.jpeg)] bg-cover bg-no-repeat bg-[50%_17%]'></section>
        <Summary />
        <section className='pt-[40vh] px-[10vw]'>
            <p className='font-semibold text-xl text-[#000] pt-[5vh]'>Synopsis</p>
            <p className='text-[#A0A3BD] my-[2vh]'>Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. </p>
        </section>
        <Book />
    </div>
  )
}

export default Detail
