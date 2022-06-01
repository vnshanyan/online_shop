import {createSlice} from "@reduxjs/toolkit";
import { cartExtraReducer } from "../thunks/cartProductThunk"
import {cartUpdateExtraReducer} from "../thunks/updateCartProductThunk";

const initialState = {
    cartProducts: []
}

const cartSlice = createSlice({
    name: 'cartProducts',
    initialState,
    extraReducers: (builder) => {
        cartExtraReducer(builder)
        cartUpdateExtraReducer(builder)
    }
})

export const cartSelector = state => state.cartProducts.cartProducts
export const {setUser} = cartSlice .actions
export default cartSlice.reducer
