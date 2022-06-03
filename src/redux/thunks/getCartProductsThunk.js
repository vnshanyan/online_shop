/* eslint-disable */
import axios from "axios"
import { baseUrl } from "../../api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getCartProductsThunk = createAsyncThunk(
    'getCartProducts',
    async () => {
        const response = axios.get(`${baseUrl}/cartProducts`)
        return response
    }
)

const getCartProductsThunkPending = (state) => {
    countCartProducts: ''
}
const getCartProductsThunkFulfilled = (state, {payload}) => {
    state.countCartProducts = payload.data.length
}
const getCartProductsThunkRejected = (state) => {
    state.countCartProducts = ''
}

export const getCartProductsExttraReducer = (builder) => {
    builder
        .addCase(getCartProductsThunk.pending, getCartProductsThunkPending)
        .addCase(getCartProductsThunk.fulfilled, getCartProductsThunkFulfilled)
        .addCase(getCartProductsThunk.rejected, getCartProductsThunkRejected)
}