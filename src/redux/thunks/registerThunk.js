/* eslint-disable */
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import {baseUrl} from "../../api/api"

export const registerThunk = createAsyncThunk(
    'registration',
    async ({user}) => {
        const response = await axios.post(`${baseUrl}/users`,user)
        return response.data
    }
)

const registerThunkPending = (state) => {
    allUsers: state.allUsers
}

const registerThunkFulfilled = (state, {payload}) => {
    state.allUsers = [payload, ...state.allUsers]
}

const registerThunkRejected = (state) => {
    state.allUsers = state.allUsers
}

export const registerExtraReducer = builder => {
    builder
        .addCase(registerThunk.pending, registerThunkPending)
        .addCase(registerThunk.fulfilled, registerThunkFulfilled)
        .addCase(registerThunk.rejected, registerThunkRejected)
}
