import React from 'react'

import Arrow from '../../assets/right-blue.png'

function NowPlaying() {
  return (
    <section className='py-[10vh] px-[10vw] bg-[#fff]'>
        <p className="font-subtitle text-[#1D4ED8] text-center">MOVIES</p>
        <p className="text-4xl text-[#121212] text-center my-[3vh]">Exciting Movies That Should Be <br /> Watched Today</p>
        <div className="flex flex-row items-stretch justify-between gap-[1vw]">
            <div className="container-movie">
                <div className="recomended">Recomended</div>
                <img className='movie' src="../../public/poster4.png" alt="Black Widow" />
                <p className="movie-title">Black Widow</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Action</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
                <div className="detail-hover">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
            <div className="container-movie">
                <div className="recomended">Recomended</div>
                <img className='movie' src="../../public/poster3.png" alt="The Witches" />
                <p className="movie-title">The Witches</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Comedy</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
                <div className="detail-hover">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
            <div className="container-movie">
                <div className="recomended">Recomended</div>
                <img src="../../public/poster2.png" alt="Tennet" />
                <p className="movie-title">Tennet</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Action</p>
                    <p className='movie-genre'>SciFi</p>
                </div>
                <div className="detail-hover">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
            <div className="container-movie">
                <div className="recomended">Recomended</div>
                <img className='movie' src="../../public/poster1.png" alt="Spiderman" />
                <p className="movie-title">Spiderman</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Action</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
                <div className="detail-hover">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
        </div>
        <div className="flex flex-row justify-center my-[5vh] cursor-pointer">
            <p className='font-subtitle text-[#1D4ED8] px-[1vw]'>View all</p>
            <img src={Arrow} alt="View All" />
        </div>
    </section>
  )
}

export default NowPlaying
