import { configureStore } from "@reduxjs/toolkit";
import signReducer from "./slices/signSlice";
import navReducer from "./slices/navSlice";
import chatReducer from "./slices/chatSlice";
export const store = configureStore({
    reducer: {
        sign: signReducer,
        nav: navReducer,
        chat: chatReducer,
    }
})