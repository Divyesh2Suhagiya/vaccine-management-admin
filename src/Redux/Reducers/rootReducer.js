import { combineReducers } from "redux";
import { childReducer } from "./childReducer";
import { userReducer } from "./UserReducer";
import { vaccineReducer } from "./vaccineReducer";

export const rootReducer = combineReducers({
    user : userReducer,
    child : childReducer,
    vaccine : vaccineReducer
})