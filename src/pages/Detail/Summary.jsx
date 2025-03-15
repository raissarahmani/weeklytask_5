import React from 'react'

function Summary() {
  return (
    <div className='summary'>
        <section className='rounded-md'>
            <img className='object-contain w-full h-full' src="../../public/poster1.png" alt="" />
        </section>
        <section className='pl-[3vw] mt-[20vh]'>
            <p className='font-bold text-3xl text-[#14142B]'>Spider-Man: Homecoming</p>
            <div className='flex flex-row'>
                <div className='movie-genre border border-solid border-[#a0a3bd1a]'>Action</div>
                <div className='movie-genre border border-solid border-[#a0a3bd1a]'>Adventure</div>
            </div>
            <div className='w-[70vw] grid grid-cols-2 grid-rows-2'>
                <div>
                    <p className='text-sm text-[#8692A6]'>Release date</p>
                    <p className='text-[121212]'>June 28, 2017</p>
                </div>
                <div class="detail2">
                    <p className='text-sm text-[#8692A6]'>Directed by</p>
                    <p className='text-[121212]'>Jon Watss</p>
                </div>
                <div class="detail3">
                    <p className='text-sm text-[#8692A6]'>Duration</p>
                    <p className='text-[121212]'>2 hours 13 minutes</p>
                </div>
                <div class="detail4">
                    <p className='text-sm text-[#8692A6]'>Casts</p>
                    <p className='text-[121212]'>Tom Holland, Michael Keaton, Robert Downey Jr</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Summary
