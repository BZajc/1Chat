import { configureStore } from "@reduxjs/toolkit";
import signReducer from "./slices/signSlice";
import navReducer from "./slices/navSlice";
export const store = configureStore({
    reducer: {
        sign: signReducer,
        nav: navReducer,
    }
})