import { createSlice } from "@reduxjs/toolkit";
import { cartExtraReducer } from "../thunks/cartProductThunk"

const initialState = {
    cartProducts: []
}

const cartSlice = createSlice({
    name: 'cartProducts',
    initialState,

    extraReducers: (builder) => {
        cartExtraReducer(builder)
    }
})

export const cartSelector = state => state.cartProducts.cartProducts
export const {} = cartSlice .actions
export default cartSlice.reducer
