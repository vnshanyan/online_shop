import {createSlice} from "@reduxjs/toolkit";
import { cartExtraReducer } from "../thunks/cartProductThunk"
import {cartUpdateeExtraReducer} from "../thunks/updateCartProductThunk";

const initialState = {
    cartProducts: []
}

const cartSlice = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state.cartProducts = payload
        }
    },

    extraReducers: (builder) => {
        cartExtraReducer(builder)
        cartUpdateeExtraReducer(builder)
    }
})

export const cartSelector = state => state.cartProducts.cartProducts
export const {setUser} = cartSlice .actions
export default cartSlice.reducer
