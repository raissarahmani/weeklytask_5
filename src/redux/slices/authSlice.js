import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user") || null),
    error: null
}

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        register: (state, action) => {
            const {email, pass} = action.payload

            state.pendingUser = { email, password: pass }
            localStorage.setItem("pendingUser", JSON.stringify(state.pendingUser))
            state.error = null
        },
        login: (state, action) => {
            const {email, pass} = action.payload
            const storedUser = JSON.parse(localStorage.getItem("user"))
            const pendingUser = JSON.parse(localStorage.getItem("pendingUser"))
            const registeredUser = storedUser || pendingUser

            if (!registeredUser || registeredUser.email !== email) {
                state.error = "User not registered. Please sign up"
                return
            }
            if (registeredUser.password !== pass) {
                state.error = "Incorrect password"
                return
            }
            if (email === "test@admin.com" && pass === "1234admin") {
                state.user = {email, role: "admin"}
            } else {
                state.user = {email}
            }
          
            state.error = null
            localStorage.setItem("user", JSON.stringify(state.user))
            localStorage.removeItem("pendingUser")
        },
        logout: (state) => {
            state.user = null
            state.error = null
            localStorage.removeItem("user")
        }
    }
})

export const {register, login, logout} = authSlice.actions
export default authSlice.reducer