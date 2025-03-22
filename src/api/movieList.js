const API_KEY = "ae266d92588cded8ace6fb5f85c35955"
const BASE_URL = 'https://api.themoviedb.org/3'

export async function getGenre () {
    try {
        const response = await fetch (`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
        if (!response.ok) throw new Error("Failed fetch genre")

        const dataGenre = await response.json()
        if (!dataGenre.genres) throw new Error("No genres found")
        return dataGenre.genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name
            return acc
        }, {})
    } catch (error) {
        console.error(error.message)
        return []
    }
}

export async function movieList () {
    try {
        const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=1`)
        if (!response.ok) throw new Error("Failed fetch movie list")

        const dataMovie = await response.json()
        if (!dataMovie) throw new Error ("No movie found")
        return (dataMovie.results.slice(0,12))
    } 
    catch (error) {
        console.error (error.message)
    }
}

export async function getDetail (id) {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    if (!response.ok) throw new Error("Failed fetch detail movie")
    return response.json()
  }
  catch (error) {
    console.error (error.message)
  }
}

export async function getCredits (id) {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
    if (!response.ok) throw new Error("Failed fetch credits movie")
    return response.json()
  }
  catch (error) {
    console.error (error.message)
  }
}