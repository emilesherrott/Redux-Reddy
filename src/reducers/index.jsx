import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import biscuitReducer from "./biscuitReducer";

const rootReducer = combineReducers({
    accountReducer: accountReducer,
    biscuitReducer: biscuitReducer
})

export default rootReducer