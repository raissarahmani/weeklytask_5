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
                    <div className='genre-option hover:bg-[#1D4ED8] hover:text-[#fff]'>Thriller</div>
                    <div className='genre-option hover:bg-[#1D4ED8] hover:text-[#fff]'>Horror</div>
                    <div className='genre-option hover:bg-[#1D4ED8] hover:text-[#fff]'>Romantic</div>
                    <div className='genre-option hover:bg-[#1D4ED8] hover:text-[#fff]'>Adventure</div>
                    <div className='genre-option hover:bg-[#1D4ED8] hover:text-[#fff]'>Sci-Fi</div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
            {movies.map((movie) => (
                <div key={movie.id} className="container-viewall relative">
                    <img className='w-full h-full object-cover rounded-lg' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    <p className="movie-title">{movie.title}</p>
                    <div className="flex flex-row text-xs">
                        {movie.genre_ids.slice(0, 2).map((id) => (
                            <p key={id} className='movie-genre'> {genreList[id] || "Unknown"} </p>
                        ))}
                    </div>
                    <div className="detail-hover">
                        <div className='text-[#fff] py-[1vh] my-[0.5vh] text-center w-full border border-solid border-[#fff] rounded-md cursor-pointer'>Details</div>
                        <div className='text-[#fff] bg-[#1D4ED8] py-[1vh] my-[0.5vh] text-center w-full border border-solid border-[#1D4ED8] rounded-md cursor-pointer'>Buy Ticket</div>
                    </div>
                </div>
            ))}
        </div>
        <div className="flex flex-row items-center justify-center">
        <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>1</div>
            <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>2</div>
            <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>3</div>
            <div className='pages hover:bg-[#1D4ED8] hover:text-[#fff]'>4</div>
            <div className='pages'>
                <img className='absolute top-1/8 left-1/5 block hover:hidden' src={ArrowBlue} alt="Next" />
                <img className='absolute top-1/8 left-1/5 hidden hover:block' src={ArrowWhite} alt="Next" />
            </div>
        </div>
    </section>
  )
}

export default MovieList
