/* eslint-disable */
import axios from "axios"
import { baseUrl } from "../../api/api"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getProductsThunk = createAsyncThunk(
    'getProducts',
    async () => {
        const response = axios.get(`${baseUrl}/products`)
        return response
    }
)

const getProductsThunkPending = (state) => {
    someProducts: []
}
const getProductsThunkFulfilled = (state, {payload}) => {
    state.someProducts = payload.data
}
const getProductsThunkRejected = (state) => {
    state.someProducts = []
}

export const getProductsExttraReducer = (builder) => {
    builder
        .addCase(getProductsThunk.pending, getProductsThunkPending)
        .addCase(getProductsThunk.fulfilled, getProductsThunkFulfilled)
        .addCase(getProductsThunk.rejected, getProductsThunkRejected)
}