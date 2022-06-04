import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loginUser: localStorage.getItem('user') || sessionStorage.getItem('user') || null
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

export const loginSelector = state => state.loginReducer.loginUser
export const { setUser, removeUser} = loginSlice.actions
export default loginSlice.reducer
