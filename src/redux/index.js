import { combineReducers } from "redux";
import loginReducer from "./slices/loginSlice";
import cartReducer from "./slices/cartSlice";

export const rootReducer = combineReducers({
    login: loginReducer,
    cartProducts:cartReducer
})
