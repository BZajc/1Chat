import { createSlice } from "@reduxjs/toolkit";

interface ChatState {
  connecting: boolean;
  connected: boolean;
  userImage: string | null;
  userName: string | null;
  messages: { message: string; type: "left" | "right" }[];
}

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    connecting: false,
    connected: false,
    userImage: null,
    userName: null,
    messages: [],
  },
  reducers: {
    setConnecting: (state: ChatState, action: { payload: boolean }) => {
      state.connecting = action.payload;
    },
    setConnected: (state: ChatState, action: { payload: boolean }) => {
      state.connected = action.payload;
    },
    setUserImage: (state: ChatState, action: { payload: string }) => {
      state.userImage = action.payload;
    },
    setUserName: (state: ChatState, action: { payload: string }) => {
      state.userName = action.payload;
    },
    addMessage: (
      state: ChatState,
      action: { payload: { message: string; type: "left" | "right" } }
    ) => {
      state.messages.push({
        message: action.payload.message,
        type: action.payload.type,
      });
    },
    removeMessages: (state: ChatState) => {
      state.messages = [];
    }
  },
});
export default chatSlice.reducer;
export const {
  setConnecting,
  setConnected,
  setUserImage,
  setUserName,
  addMessage,
  removeMessages,
} = chatSlice.actions;
export const selectConnecting = (state: { chat: ChatState }) =>
  state.chat.connecting;
export const selectConnected = (state: { chat: ChatState }) =>
  state.chat.connected;
export const selectUserImage = (state: { chat: ChatState }) =>
  state.chat.userImage;
export const selectUserName = (state: { chat: ChatState }) =>
  state.chat.userName;
export const selectMessages = (state: { chat: ChatState }) =>
  state.chat.messages;