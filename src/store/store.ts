import { configureStore } from "@reduxjs/toolkit";
import signReducer from "./slices/signSlice";
import navReducer from "./slices/navSlice";
import chatReducer from "./slices/chatSlice";
import profileReducer from "./slices/profileSlice";
import chatHistoryReducer from "./slices/chatHistorySlice";
export const store = configureStore({
  reducer: {
    sign: signReducer,
    nav: navReducer,
    chat: chatReducer,
    profile: profileReducer,
    chatHistory: chatHistoryReducer,
  },
});
