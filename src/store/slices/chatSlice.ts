import { createSlice } from "@reduxjs/toolkit";

interface ChatState {
  connecting: boolean;
  connected: boolean;
  userImage: string | null;
  userName: string | null;
  id: number;
  feedback: "positive" | "negative" | "none" | null;
  addUser: boolean;
  blockUser: boolean;
  messages: {
    message: string;
    type: "left" | "right";
    time: string;
    profileImage: string;
  }[];
}

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    connecting: false,
    connected: false,
    userImage: null,
    userName: null,
    id: 0,
    messages: [],
    feedback: null,
    addUser: false,
    blockUser: false,
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
    setUserId: (state: ChatState, action: { payload: number }) => {
      state.id = action.payload;
    },
    addMessage: (
      state: ChatState,
      action: {
        payload: {
          message: string;
          type: "left" | "right";
          time: string;
          profileImage: string;
        };
      }
    ) => {
      state.messages.push({
        message: action.payload.message,
        type: action.payload.type,
        time: action.payload.time,
        profileImage: action.payload.profileImage,
      });
    },
    removeMessages: (state: ChatState) => {
      state.messages = [];
    },
    setFeedback: (state: ChatState, action: { payload: "positive" | "negative" | "none"}) => {
      state.feedback = action.payload;
    },
    setAddUser: (state: ChatState, action: { payload: boolean }) => {
      state.addUser = action.payload;
      console.log("add user:", state.addUser);
    },
    setBlockUser: (state: ChatState, action: { payload: boolean }) => {
      state.blockUser = action.payload;
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
  setUserId,
  setFeedback,
  setAddUser,
  setBlockUser,
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
export const selectUserId = (state: { chat: ChatState }) => state.chat.id;
export const selectFeedback = (state: { chat: ChatState }) => state.chat.feedback;
export const selectAddUser = (state: { chat: ChatState }) => state.chat.addUser;
export const selectBlockUser = (state: { chat: ChatState }) => state.chat.blockUser;