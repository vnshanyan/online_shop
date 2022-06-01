import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loginUser: localStorage.getItem('user') || sessionStorage.getItem('user') || null,
    allUsers: []
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state.loginUser = payload
          },
        removeUser: (state) => {
            state.loginUser = null
        }
    },
    extraReducers: (builder) => {}
})

export const userSelector = state => state.login.loginUser
export const {setUser, removeUser} = loginSlice.actions
export default loginSlice.reducer