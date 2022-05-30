import { combineReducers } from "redux";
import loginReducer from "./slices/loginSlice"

export const rootReducer = combineReducers({
    login: loginReducer
})
