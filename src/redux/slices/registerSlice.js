import { createSlice } from "@reduxjs/toolkit"
import { registerExtraReducer } from "../thunks/registerThunk"

const initialState = {
    userName: localStorage.getItem('user') ||
              sessionStorage.getItem('user') || null,
    allUsers: []
}

const registerSlice = createSlice({
    name: 'registration',
    initialState,
    // reducers: {
    //     // addUser: (state, {payload}) => {
    //     //     state.userName = payload;
    //     //     state.allUsers = []
    //     // }
    // },
    extraReducers: (builder) => {
        registerExtraReducer(builder)
    }
})

//export const useSelector = state => state.registration.userName
export const useSelector = state => state.registration.allUsers
export const {addUser} = registerSlice.actions
export default registerSlice.reducer
