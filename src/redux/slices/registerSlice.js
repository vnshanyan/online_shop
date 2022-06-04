import { createSlice } from "@reduxjs/toolkit"
import { registerExtraReducer } from "../thunks/registerThunk"

const initialState = {
    allUsers: []
}

const registerSlice = createSlice({
    name: 'registration',
    initialState,
    extraReducers: (builder) => {
        registerExtraReducer(builder)
    }
})

//export const registerSelector = state => state.registration.allUsers
export default registerSlice.reducer

