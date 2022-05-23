import { combineReducers } from "redux"
import loginReducer from "./slices/loginSlice"
import registerReducer from "./slices/registerSlice"

export const rootReducer = combineReducers({
    login: loginReducer,
    registerReducer: registerReducer
})
