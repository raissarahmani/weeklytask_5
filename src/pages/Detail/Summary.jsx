import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import {getDetail, getCredits} from '../../api/movieList'
import {storeMovieDetails} from '../../redux/slices/bookingSlice'

function Summary() {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)
    const [credits, setCredits] = useState(null)
    const dispatch = useDispatch()
    const [movieDetails, setMovieDetails] = useState({
      poster: "",
      title: "",
      genres: "",
  });

    useEffect(() => {
        async function fetchData() {
          try {
            const movieData = await getDetail(id);
            if (!movieData) throw new Error ("Data is missing")
            setMovie(movieData);
      
            const creditsData = await getCredits(id);
            if (!creditsData) throw new Error ("Data is missing")
            setCredits(creditsData);

            const fetchedMovie = {
              poster: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
              title: movieData.title,
              genres: movieData.genres.map(el => el.name).join(", ")
            }

            setMovieDetails(fetchedMovie)
            dispatch(storeMovieDetails(fetchedMovie))
          }
          catch (error) {
            console.error(error.message)
          }
        }

        fetchData();
      }, [id, dispatch]);
    
      if (!movie || !credits) return <p>Loading...</p>

      const director = credits?.crew?.find(person => person.job === "Director")?.name || "Unknown";
      const topCast = credits?.cast?.slice(0, 5).map(actor => actor.name).join(", ") || "Unknown";
      const hours = Math.floor(movie?.runtime / 60) || 0;
      const minutes = movie?.runtime % 60 || 0;
      const duration = movie?.runtime ? `${hours} hours ${minutes} minutes` : "Unknown";

  return (
    <div className='summary'>
        <section className='flex md:block justify-center items-center rounded-md col-span-2 md:col-span-1 row-span-1'>
            <img className='object-contain w-2/3 md:w-full h-full rounded-md' src={movieDetails.poster} alt={movieDetails.title} />
        </section>
        <section className='px-[5vw] md:px-0 md:pl-[3vw] mt-[50vh] md:mt-[30vh]'>
            <p className='font-bold text-xl md:text-3xl text-center md:text-left text-[#14142B]'>{movieDetails.title}</p>
            <div className='flex flex-row justify-center md:justify-start my-[2vh]'>
              {movie.genres.map((genre) => (
                <div key={genre.id} className="movie-genre border border-solid border-[#a0a3bd1a] px-2 py-1 mx-1 rounded-md">
                  {genre.name}
                </div>
                ))}
            </div>
            <div className='w-full md:w-[70vw] grid grid-cols-2 md:grid-cols-[20vw_40vw] grid-rows-[15vh_20vh] md:grid-rows-2'>
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
