import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {baseUrl} from "../../api/api"

export const registerThunk = createAsyncThunk(
    'registration',
    async ({user}) => {
        const response = await axios.post(`${baseUrl}/users`,user)
        console.log(response);
        return response
    }
)


const registerThunkPending = (state) => {
    state.userName = ''
}

const registerThunkFulfilled = (state, {payload}) => {
    state.userName = payload
}

export const registerExtraReducer = builder => {
    builder
        .addCase(registerThunk.pending, registerThunkPending)
        .addCase(registerThunk.fulfilled, registerThunkFulfilled)
}