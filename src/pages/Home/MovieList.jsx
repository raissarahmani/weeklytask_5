import { useState, useEffect } from 'react'
import { getGenre, movieList } from '../../api/movieList'

import Search from '../../assets/Search.png'
import ArrowBlue from '../../assets/right-blue.png'
import ArrowWhite from '../../assets/right-white.png'

function MovieList() {
const [movies, setMovies] = useState([])
const [genreList, setGenreList] = useState({})

useEffect(() => {
    async function fetchMovie() {
      const genres = await getGenre();
      setGenreList(genres);

      const nowPlaying = await movieList();
      setMovies(nowPlaying);
    }

    fetchMovie();
  }, []);

  return (
    <section className='py-[4vh] px-[10vw]'>
        <div className='flex flex-row my-[5vh]'>
            <div className='w-7/20'>
                <p className='font-semibold text-[#4E4B66]'>Cari Event</p>
                <label for="query" hidden></label>
                <div className='border-input flex flex-row'>
                    <img className='object-contain' src={Search} alt="Search" />
                    <input className='border-none outline-none py-[2vh] px-[1vw] w-full' type="text" name="query" placeholder="New Born Expert" />
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
        <div className="grid grid-cols-4 gap-4">
            {movies.map((movie) => (
                <div key={movie.id} className="container-viewall">
                    <img className='w-full h-full object-cover rounded-lg' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    <p className="movie-title">{movie.title}</p>
                    <div className="flex flex-row text-xs">
                        {movie.genre_ids.slice(0, 2).map((id) => (
                            <p key={id} className='movie-genre'> {genreList[id] || "Unknown"} </p>
                        ))}
                    </div>
                    <div className="detail-hover h-full">
                        <div>Details</div>
                        <div>Buy Ticket</div>
                    </div>
                </div>
            ))}
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
