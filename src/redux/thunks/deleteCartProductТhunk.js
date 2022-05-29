import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {baseUrl} from "../../api/api"

export const deleteCartProductThunk = createAsyncThunk(
    "productDelete",
    async (id) => {
    await axios.delete(`${baseUrl}/cartProducts/${id}`)
    return id
})

const cartDeleteThunkPending = (state) => {
    state.cartProducts = state.cartProducts
}

const cartDeleteThunkFulfilld = (state, {payload}) => {
    const newDeleteCart = state.cartProducts.filter((item) =>  item.id !== payload)
    state.cartProducts = newDeleteCart
}

export const cartDeleteExtraReducer = (builder) => {
    builder
        .addCase(deleteCartProductThunk.pending, cartDeleteThunkPending)
        .addCase(deleteCartProductThunk.fulfilled, cartDeleteThunkFulfilld)
}
