import { createSlice } from "@reduxjs/toolkit"
import { getProductsExttraReducer } from "../thunks/getProductsThunk"

const initialState = {
    someProducts: []
}

const getProductsSlice = createSlice({
    name: 'getProducts',
    initialState,
    extraReducers: (builder) => {
        getProductsExttraReducer(builder)
    }
})


export const getProductsSelector = state => state.getProductsReducer.someProducts
export default getProductsSlice.reducer