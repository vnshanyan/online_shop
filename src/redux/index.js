import { combineReducers } from "redux"
import loginReducer from "./slices/loginSlice"
import registerReducer from "./slices/registerSlice"
import getProductsReducer from "./slices/getProductsSlice"
import getCartProductsReducer from "./slices/getCartProductsSlice"

export const rootReducer = combineReducers({
    loginReducer: loginReducer,
    registerReducer: registerReducer,
    getProductsReducer: getProductsReducer,
    getCartProductsReducer: getCartProductsReducer
})

