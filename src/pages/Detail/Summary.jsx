import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getDetail, getCredits} from '../../api/movieList'

function Summary() {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)
    const [credits, setCredits] = useState(null)

    useEffect(() => {
        async function fetchData() {    
          const movieData = await getDetail(id);
          setMovie(movieData);
    
          const creditsData = await getCredits(id);
          setCredits(creditsData);
        }
    
        fetchData();
      }, [id]);
    
      if (!movie || !credits) return <p>Loading...</p>

      const director = credits?.crew?.find(person => person.job === "Director")?.name || "Unknown";
      const topCast = credits?.cast?.slice(0, 5).map(actor => actor.name).join(", ") || "Unknown";
      const hours = Math.floor(movie?.runtime / 60) || 0;
      const minutes = movie?.runtime % 60 || 0;
      const duration = movie?.runtime ? `${hours} hours ${minutes} minutes` : "Unknown";

  return (
    <div className='summary'>
        <section className='rounded-md'>
            <img className='object-contain w-full h-full' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </section>
        <section className='pl-[3vw] mt-[20vh]'>
            <p className='font-bold text-3xl text-[#14142B]'>{movie.title}</p>
            <div className='flex flex-row my-[2vh]'>
              {movie.genres.map((genre) => (
                <div key={genre.id} className="movie-genre border border-solid border-[#a0a3bd1a] px-2 py-1 mx-1 rounded-md">
                  {genre.name}
                </div>
                ))}
            </div>
            <div className='w-[70vw] grid grid-cols-2 grid-rows-2'>
                <div>
                    <p className='text-sm text-[#8692A6]'>Release date</p>
                    <p className='text-[121212]'>{new Date(movie.release_date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
                </div>
                <div>
                    <p className='text-sm text-[#8692A6]'>Directed by</p>
                    <p className='text-[121212]'>{director}</p>
                </div>
                <div>
                    <p className='text-sm text-[#8692A6]'>Duration</p>
                    <p className='text-[121212]'>{duration}</p>
                </div>
                <div>
                    <p className='text-sm text-[#8692A6]'>Casts</p>
                    <p className='text-[121212]'>{topCast}</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Summary
