import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    error: null
}

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        register: (state, action) => {
            const {email, pass} = action.payload

            state.registeredUser = { email, password: pass }
            state.error = null
        },
        login: (state, action) => {
            const {email, pass} = action.payload

            if (state.registeredUser?.email !== email) {
                state.error = "User not registered. Please sign up"
                return
            }
            if (state.registeredUser?.password !== pass) {
                state.error = "Incorrect password"
                return
            }
            
            state.user = email === "test@admin.com" && pass === "1234admin" 
                ? {email, role: "admin"} : {email}
          
            state.error = null
            state.registeredUser = null

        },
        logout: (state) => {
            state.user = null
            state.error = null
        }
    }
})

export const {register, login, logout} = authSlice.actions
export default authSlice.reducer