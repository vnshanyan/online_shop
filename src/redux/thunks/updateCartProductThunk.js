import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {baseUrl} from "../../api/api"

export const updateCartProductThunk = createAsyncThunk(
    "productUpdate",
    async (id) => {
        const data = {
            "id": "1",
            "image": "https://5.imimg.com/data5/ECOM/Default/2022/5/AP/KJ/HN/148051309/1596107585306-black-4-originnm80prcnt-1000x1000.jpg",
            "title": "DLS RUNNING SHOES FOR MENS AND BOYS | Shopee India",
            "price": "50$",
            "qty": "100"
        }
        await axios.put(`${baseUrl}/cartProducts/${id}`,data)
        return data
    })

const cartUpdateThunkPending = (state) => {
    state.cartProducts = state.cartProducts
}

const cartUpdateThunkFulfilld = (state, {payload}) => {
    const newUpdateCart = state.cartProducts.map((item) => {
        if(item.id === payload.id) {
            return payload
        }
            return item
    })
    state.cartProducts = newUpdateCart
}

export const cartUpdateeExtraReducer = (builder) => {
    builder
        .addCase(updateCartProductThunk.pending, cartUpdateThunkPending)
        .addCase(updateCartProductThunk.fulfilled, cartUpdateThunkFulfilld)
}
