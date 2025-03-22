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

export async function upcomingList () {
    try {
        const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
        if (!response.ok) throw new Error ("Failed fetch movie")

        const dataUpcoming = await response.json()
        if(!dataUpcoming) throw new Error ("No movie found")
            return dataUpcoming.results
    }
    catch (error) {
        console.error(error.message)
    }
}