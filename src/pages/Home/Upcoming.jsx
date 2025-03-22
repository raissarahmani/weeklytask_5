import { useState, useEffect } from 'react'
import { getGenre, upcomingList } from '../../api/upcoming'

import ArrowLeft from '../../assets/left-white.png'
import ArrowRight from '../../assets/right-white.png'

function Upcoming() {
const [movie, setMovie] = useState([])
const [genreList, setGenreList] = useState({})

useEffect(() => {
    async function fetchUpcoming () {
        try {
            const genres = await getGenre()
            if(!genres) throw new Error ("Data is missing")
            setGenreList(genres)
    
            const upcomingMovie = await upcomingList()
            if (!upcomingMovie) throw new Error ("Data is missing")
            setMovie(upcomingMovie)
        }
        catch (error) {
            console.error(error.message)
        }
    }
    fetchUpcoming()
}, [])

  return (
    <section className='py-[7vh] px-[10vw] bg-[#fff]'>
        <p className='font-subtitle text-[#1D4ED8] text-center md:text-left'>UPCOMING MOVIES</p>
        <div className='flex flex-row justify-between'>
            <p class='text-3xl md:text-4xl text-center md:text-left text-[#121212] font-normal my-[3vh]'>Exciting Movie Coming Soon</p>
            <div className='hidden md:flex flex-row gap-[0.5vw]'>
                <div className="icon-container">
                    <img className='absolute top-1/4 left-1/4' src={ArrowLeft} alt="Previous" />
                </div>
                <div className="icon-container">
                    <img className='absolute top-1/4 right-1/4' src={ArrowRight} alt="Next" />
                </div>
            </div>
        </div>
        <div className='overflow-x-auto overflow-y-hidden w-full'>
            <div className="grid grid-flow-col gap-[1vw] w-max">
                {movie.map((movie) => (
                <div key={movie.id} className="container-movie">
                    <img className='movie' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className='w-full overflow-hidden'>
                        <p className="movie-title text-lg md:text-2xl">{movie.title}</p>
                    </div>
                    <p className="text-sm md:font-subtitle text-[#1D4ED8] mb-[2vh]">
                    {new Date(movie.release_date).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                        })}
                    </p>
                    <div className="flex flex-row text-xs">
                        {movie.genre_ids.slice(0,2).map((id) => (
                            <p key={id} className='movie-genre'>{genreList[id] || "unknown"}</p>
                        ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Upcoming
