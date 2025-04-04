import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    poster: "",
    title: "",
    genres: [],
    date: "",
    time: "",
    city: "",
    cinema: "",
    seats: [],
    total: 0,
}

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        storeMovieDetails: (state, action) => {
            const {poster, title, genres} = action.payload

            state.moviePoster = poster
            state.movieTitle = title
            state.movieGenres = genres
        },
        storeBookDetails: (state, action) => {
            const {date, time, city, cinema} = action.payload

            state.bookDate = date
            state.bookTime = time
            state.bookCity = city
            state.bookCinema = cinema
        },
        storeSeatsDetails: (state, action) => {
            const {seats, total} = action.payload

            state.seatsSeat = seats
            state.seatsTotal = total
        }
    }
})

export const {movieDetails, bookDetails, seatsDetails} = bookingSlice.actions
export default bookingSlice.reducer