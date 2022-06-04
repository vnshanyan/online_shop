import { createSlice } from "@reduxjs/toolkit"
import { getCartProductsExttraReducer } from "../thunks/getCartProductsThunk"

const initialState = {
    countCartProducts: ''
}

const getCartProductsSlice = createSlice({
    name: 'getCartProducts',
    initialState,
    extraReducers: (builder) => {
        getCartProductsExttraReducer(builder)
    }
})


export const getCartProductsSelector = state => state.getCartProductsReducer.countCartProducts
export default getCartProductsSlice.reducer