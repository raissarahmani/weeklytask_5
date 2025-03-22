import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { getGenre, getRecomended } from '../../api/recomended'
import Arrow from '../../assets/right-blue.png'

function NowPlaying() {
const [movie, setMovie] = useState([])
const [genreList, setGenreList] = useState({})
const navigate = useNavigate()

useEffect(() => {
    async function fetchTopRated () {
        try {
            const genres = await getGenre()
            if(!genres) throw new Error ("Data is missing")
            setGenreList(genres)
    
            const recomendedMovie = await getRecomended()
            if (!recomendedMovie) throw new Error ("Data is missing")
            setMovie(recomendedMovie)
        }
        catch (error) {
            console.error(error.message)
        }
    }
    fetchTopRated()
}, [])

  return (
    <section className='py-[10vh] px-[10vw] bg-[#fff]'>
        <p className="font-subtitle text-[#1D4ED8] text-center">MOVIES</p>
        <p className="text-3xl md:text-4xl text-[#121212] text-center my-[3vh]">Exciting Movies That Should Be <br /> Watched Today</p>
        <div className='overflow-x-auto overflow-y-hidden w-full'>
            <div className="grid grid-flow-col gap-[1vw] w-max">
                {movie.map((movie) => (
                    <div key={movie.id} className="container-movie">
                        <div className="recomended">Recomended</div>
                        <img className='movie' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <div className='w-full overflow-hidden'>
                            <p className="movie-title text-lg md:text-2xl">{movie.title}</p>
                        </div>
                        <div className="flex flex-row text-xs">
                        {movie.genre_ids.slice(0, 2).map((id) => (
                            <p key={id} className='movie-genre'> {genreList[id] || "Unknown"} </p>
                        ))}
                        </div>
                        <div className="detail-hover">
                            <div onClick={() => navigate(`/now-playing/movie/${movie.id}`)} className='text-[#fff] py-[1vh] my-[0.5vh] text-center w-full border border-solid border-[#fff] rounded-md cursor-pointer'>Details</div>
                            <div className='text-[#fff] bg-[#1D4ED8] py-[1vh] my-[0.5vh] text-center w-full border border-solid border-[#1D4ED8] rounded-md cursor-pointer'>Buy Ticket</div>
                        </div>
                    </div>
                ))}            
            </div>       
        </div>
        
        <div className="hidden md:flex flex-row justify-center my-[5vh] cursor-pointer">
            <p className='font-subtitle text-[#1D4ED8] px-[1vw]'>View all</p>
            <img src={Arrow} alt="View All" />
        </div>
    </section>
  )
}

export default NowPlaying
