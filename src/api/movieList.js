const API_KEY = "ae266d92588cded8ace6fb5f85c35955"
const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1`
const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

export async function getGenre () {
    try {
        const response = await fetch (genreUrl)
        const dataGenre = await response.json()
        return dataGenre.genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name
            return acc
        }, {})
    } catch (error) {
        console.error(error.message)
    }
}

export async function movieList () {
    try {
        const response = await fetch(nowPlayingUrl)
        const dataMovie = await response.json()
        return (dataMovie.results.slice(0,12))
    } 
    catch (error) {
        console.error (error.message)
    }
}

export async function getDetail (id) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    return response.json()
  }
  catch (error) {
    console.error (error.message)
  }
}

export async function getCredits (id) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
    return response.json()
  }
  catch (error) {
    console.error (error.message)
  }
}