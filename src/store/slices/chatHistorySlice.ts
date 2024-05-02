import { createSlice } from "@reduxjs/toolkit";

interface ChatHistoryState {
  sortType: string;
  chatHistory: {
    userImage: string | null;
    userName: string | null;
    id: number;
    added: boolean;
    messages: {
      message: string;
      type: "left" | "right";
      time: string;
      profileImage: string;
    }[];
  }[];
}
const chatHistorySlice = createSlice({
  name: "chatHistory",
  initialState: {
    sortType: "date",
    chatHistory: [
      {
        userImage: null,
        userName: null,
        added: false,
        id: 0,
        messages: [],
      },
    ],
  },
  reducers: {
    setSortType: (state: ChatHistoryState, action: { payload: string }) => {
      state.sortType = action.payload;
      console.log(state.sortType);
    },
    setChatHistory: (
      state: ChatHistoryState,
      action: {
        payload: {
          userImage: string;
          userName: string;
          id: number;
          added: boolean;
          messages: {
            message: string;
            type: "left" | "right";
            time: string;
            profileImage: string;
          }[];
        };
      }
    ) => {
      const { userImage, userName, id, added, messages } = action.payload

      // Find the index of the existing chat in the chat history
      const existingChatIndex = state.chatHistory.findIndex(
        (chat) => chat.id === id
      );

      // If the chat already exists or it is the initial chat (id = 0)
      if (existingChatIndex !== -1 || id === 0) {
        // Get the index of the chat
        const chatIndex = existingChatIndex !== -1 ? existingChatIndex : state.chatHistory.findIndex((chat) => chat.id === 0);
        // Update the chat at the specified index
        state.chatHistory[chatIndex] = { userImage, userName, id, added, messages };
      } else {
        // Add a new chat to the chat history
        state.chatHistory.push({ userImage, userName, id, added, messages });
      }
      console.log(JSON.parse(JSON.stringify(state.chatHistory)));
    },
    setRemoveContact: (state: ChatHistoryState, action: { payload: number }) => {
      const { payload: id } = action;
      const userIndex = state.chatHistory.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.chatHistory[userIndex].added = false;
      }
    },
  },
});

export default chatHistorySlice.reducer;
export const { setSortType, setChatHistory, setRemoveContact } = chatHistorySlice.actions;
export const selectSortType = (state: { chatHistory: ChatHistoryState }) =>
  state.chatHistory.sortType;
export const selectChatHistory = (state: { chatHistory: ChatHistoryState }) =>
  state.chatHistory.chatHistory;