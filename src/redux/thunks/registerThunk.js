/* eslint-disable */
import { createAsyncThunk, current } from "@reduxjs/toolkit";
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
    //console.log(current(state.allUsers));
    allUsers: state.allUsers
    //state.userName = ''
}

const registerThunkFulfilled = (state, {payload}) => {
    //state.userName = payload
    console.log(...state.allUsers);
    state.allUsers = [payload, ...state.allUsers]
}

const registerThunkRejected = (state) => {
    //state.userName = state.userName;
    state.allUsers = state.allUsers
}
export const registerExtraReducer = builder => {
    builder
        .addCase(registerThunk.pending, registerThunkPending)
        .addCase(registerThunk.fulfilled, registerThunkFulfilled)
        .addCase(registerThunk.rejected, registerThunkRejected)
}