import { createSlice } from "@reduxjs/toolkit";
import { cartExtraReducer } from "../thunks/cartProductThunk"
import {cartDeleteExtraReducer} from "../thunks/deleteCartProductТhunk";
import {cartUpdateeExtraReducer} from "../thunks/updateCartProductThunk";

const initialState = {
    cartProducts: []
}

const cartSlice = createSlice({
    name: 'cartProducts',
    initialState,

    extraReducers: (builder) => {
        cartExtraReducer(builder)
        cartDeleteExtraReducer(builder)
        cartUpdateeExtraReducer(builder)
    }
})

export const cartSelector = state => state.cartProducts.cartProducts
export const {} = cartSlice .actions
export default cartSlice.reducer
