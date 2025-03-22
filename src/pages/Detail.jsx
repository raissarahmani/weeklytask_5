import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getDetail } from '../api/movieList'

import Summary from './Detail/Summary'
import Book from './Detail/Book'

function Detail() {

  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    async function getPoster () {
      const posterMovie = await getDetail(id)
      setMovie(posterMovie)
    }
    getPoster()
  }, [id])

  if (!movie) return <p>Loading...</p>

  return (
    <div className='relative z-0'>
        <section className='relative h-[60vh] bg-cover bg-no-repeat bg-[50%_17%] before:content-[""] before:absolute before:inset-0 before:-z-1 before:bg-[#00000099]' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`}}></section>
        <Summary />
        <section className='pt-[120vh] md:pt-[40vh] px-[5vw] md:px-[10vw]'>
            <p className='font-semibold text-xl text-[#000] pt-[5vh]'>Synopsis</p>
            <p className='text-[#A0A3BD]'>{movie.overview}</p>
        </section>
        <Book />
    </div>
  )
}

export default Detail
