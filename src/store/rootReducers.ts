import { combineReducers } from "redux";
import userReducers from "./user/auth.reducers.ts";

export const rootReducers = combineReducers({
    user: userReducers,
});