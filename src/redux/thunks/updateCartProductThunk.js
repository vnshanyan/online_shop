import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {baseUrl} from "../../api/api"
import {useSelectQuantityProvider} from "../../contexts/SelectQuantityProvider";

export const updateCartProductThunk = createAsyncThunk(
    "productUpdate",
    async (id) => {
        const data = {
            "quantity": id.buyQty
        }
        await axios.patch(`${baseUrl}/Products/${id.productId}`,data)
        return data
    })

const cartUpdateThunkFulfilld = (state, {payload}) => {
    const newUpdateCart = state.cartProducts.map((item) => {
        if(item.id === payload.id) {
            return payload
        }
            return item
    })
    state.cartProducts = newUpdateCart
}

export const cartUpdateExtraReducer = (builder) => {
    builder
        .addCase(updateCartProductThunk.fulfilled, cartUpdateThunkFulfilld)
}
