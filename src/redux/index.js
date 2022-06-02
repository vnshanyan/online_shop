import { combineReducers } from "redux"
import loginReducer from "./slices/loginSlice"
import registerReducer from "./slices/registerSlice"
import getProductsReducer from "./slices/getProductsSlice"
import getCartProductsReducer from "./slices/getCartProductsSlice"
import cartReducer from "./slices/cartSlice"

export const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    getProductsReducer,
    getCartProductsReducer,
    cartProducts:cartReducer
})

