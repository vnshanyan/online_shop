import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {baseUrl} from "../../api/api"

export const cartProductThunk = createAsyncThunk(
    'Products',
    async () => {
        const response = await axios.get(`${baseUrl}/Products`)
        return response.data
    }
)


const cartThunkPending = (state) => {
    state.cartProducts = []
}

const cartThunkFulfilled = (state, {payload}) => {
    state.cartProducts = payload
}

export const cartExtraReducer = builder => {
    builder
        .addCase(cartProductThunk.pending, cartThunkPending)
        .addCase(cartProductThunk.fulfilled, cartThunkFulfilled)
}