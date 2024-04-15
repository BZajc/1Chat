import { createSlice } from "@reduxjs/toolkit";

interface ChatState {
  connecting: boolean;
  connected: boolean;
  userImage: string | null;
  userName: string | null;
}

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    connecting: false,
    connected: true,
    userImage: null,
    userName: null,
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
  },
});
export default chatSlice.reducer;
export const { setConnecting, setConnected, setUserImage, setUserName } =
  chatSlice.actions;
export const selectConnecting = (state: { chat: ChatState }) =>
  state.chat.connecting;
export const selectConnected = (state: { chat: ChatState }) =>
  state.chat.connected;
export const selectUserImage = (state: { chat: ChatState }) =>
  state.chat.userImage;
export const selectUserName = (state: { chat: ChatState }) =>
  state.chat.userName;
