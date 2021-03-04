import {combineReducers} from "@reduxjs/toolkit";
import { Cars } from "./slice/cars"
import { Toast } from "./slice/toast";

export const rootReducer = combineReducers({
    cars: Cars.reducer,
    toast: Toast.reducer
})

export type RootState = ReturnType<typeof rootReducer>;