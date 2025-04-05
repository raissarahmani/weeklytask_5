import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    poster: "",
    title: "",
    genres: [],
    date: "",
    time: "",
    location: "",
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

            state.poster = poster
            state.title = title
            state.genres = genres
        },
        storeBookDetails: (state, action) => {
            const {date, time, location, cinema} = action.payload

            state.date = date
            state.time = time
            state.location = location
            state.cinema = cinema
        },
        storeSeatsDetails: (state, action) => {
            const {seats, total} = action.payload

            state.seats = seats
            state.total = total
        },
        resetData: () => initialState
    }
})

export const {storeMovieDetails, storeBookDetails, storeSeatsDetails, resetData} = bookingSlice.actions
export default bookingSlice.reducer