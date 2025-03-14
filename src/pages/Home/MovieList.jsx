import React from 'react'

import Search from '../../assets/Search.png'
import ArrowBlue from '../../assets/right-blue.png'
import ArrowWhite from '../../assets/right-white.png'

function MovieList() {
  return (
    <section className='py-[4vh] px-[10vw]'>
        <div className='flex flex-row my-[5vh]'>
            <div className='w-7/20'>
                <p className='font-semibold text-[#4E4B66]'>Cari Event</p>
                <label for="query" hidden></label>
                <div className='border-input flex flex-row'>
                    <img className='object-contain' src={Search} alt="Search" />
                    <input className='border-none py-[2vh] px-[1vw] w-full' type="text" name="query" placeholder="New Born Expert" />
                </div>
            </div>
            <div className='mt-[1vh] ml-[1vw]'>
                <p>Filter</p>
                <div className='flex flex-row justify-evenly mt-[1vh]'>
                    <div className='genre-option'>Thriller</div>
                    <div className='genre-option'>Horror</div>
                    <div className='genre-option'>Romantic</div>
                    <div className='genre-option'>Adventure</div>
                    <div className='genre-option'>Sci-Fi</div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-3 items-center justify-between mb-[15vh]">
            <div className="container-viewall">
                <img className='movie' src="../../public/poster4.png" alt="Black Widow" />
                <p className="movie-title">Black Widow</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'> Action</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
                <div className="detail-hover h-full">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
            <div className="container-viewall">
                <div className="recomended">Recomended</div>
                <img className='movie' src="../../public/poster3.png" alt="The Witches" />
                <p className="movie-title">The Witches</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Comedy</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
                <div className="detail-hover h-full">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
            <div className="container-viewall">
                <div className="recomended">Recomended</div>
                <img className='movie' src="../../public/poster2.png" alt="Tennet" />
                <p className="movie-title">Tennet</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Action</p>
                    <p className='movie-genre'>Sci-Fi</p>
                </div>
                <div className="detail-hover h-full">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
            <div className="container-viewall">
                <img className='movie' src="../../public/poster1.png" alt="Spiderman" />
                <p className="movie-title">Spiderman</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Action</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
                <div className="detail-hover h-full">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
            <div className="container-viewall">
                <img className='movie' src="../../public/poster4.png" alt="Black Widow" />
                <p className="movie-title">Black Widow</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'> Action</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
                <div className="detail-hover h-full">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
            <div className="container-viewall">
                <div className="recomended">Recomended</div>
                <img className='movie' src="../../public/poster3.png" alt="The Witches" />
                <p className="movie-title">The Witches</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Comedy</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
                <div className="detail-hover h-full">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
            <div className="container-viewall">
                <div className="recomended">Recomended</div>
                <img className='movie' src="../../public/poster2.png" alt="Tennet" />
                <p className="movie-title">Tennet</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Action</p>
                    <p className='movie-genre'>Sci-Fi</p>
                </div>
                <div className="detail-hover h-full">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
            <div className="container-viewall">
                <img className='movie' src="../../public/poster1.png" alt="Spiderman" />
                <p className="movie-title">Spiderman</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Action</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
                <div className="detail-hover h-full">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
            <div className="container-viewall">
                <img className='movie' src="../../public/poster4.png" alt="Black Widow" />
                <p className="movie-title">Black Widow</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'> Action</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
                <div className="detail-hover h-full">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
            <div className="container-viewall">
                <div className="recomended">Recomended</div>
                <img className='movie' src="../../public/poster3.png" alt="The Witches" />
                <p className="movie-title">The Witches</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Comedy</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
                <div className="detail-hover h-full">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
            <div className="container-viewall">
                <div className="recomended">Recomended</div>
                <img className='movie' src="../../public/poster2.png" alt="Tennet" />
                <p className="movie-title">Tennet</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Action</p>
                    <p className='movie-genre'>Sci-Fi</p>
                </div>
                <div className="detail-hover h-full">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
            <div className="container-viewall">
                <img className='movie' src="../../public/poster1.png" alt="Spiderman" />
                <p className="movie-title">Spiderman</p>
                <div className="flex flex-row text-xs">
                    <p className='movie-genre'>Action</p>
                    <p className='movie-genre'>Adventure</p>
                </div>
                <div className="detail-hover h-full">
                    <div>Details</div>
                    <div>Buy Ticket</div>
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center">
            <div className='pages'>1</div>
            <div className='pages'>2</div>
            <div className='pages'>3</div>
            <div className='pages'>4</div>
            <div className='pages'>
                <img className='absolute top-1/8 left-1/5' src={ArrowBlue} alt="Next" />
                <img className='hidden' src={ArrowWhite} alt="Next" />
            </div>
        </div>
    </section>
  )
}

export default MovieList
