import { configureStore } from "@reduxjs/toolkit";
import signReducer from "./slices/signSlice";
export const store = configureStore({
    reducer: {
        sign: signReducer,
    }
})