import { createSlice } from "@reduxjs/toolkit"
import { registerExtraReducer } from "../thunks/registerThunk"

const initialState = {
    userName: localStorage.getItem('user') || sessionStorage.getItem('user') || null
}

const registerSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        addUser: (state, {payload}) => {
            state.userName = payload
        }
    },
    extraReducers: (builder) => {
        registerExtraReducer(builder)
    }
})

export const useSelector = state => state.registration.userName
export const {addUser} = registerSlice.actions
export default registerSlice.reducer
