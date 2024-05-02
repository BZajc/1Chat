import { createSlice } from "@reduxjs/toolkit";

interface ContactsState {
  addedUser: {
    userImage: string | null;
    userName: string | null;
    id: number;
  }[];
}

const contactsSlice = createSlice({
  name: "addedUser",
  initialState: {
    addedUser: [
      {
        userImage: null,
        userName: null,
        id: 0,
      },
    ],
  },
  reducers: {
    setContact: (
      state: ContactsState,
      action: {
        payload: {
          userImage: string;
          userName: string;
          id: number;
        };
      }
    ) => {
      const { userImage, userName, id } = action.payload;

      // Find the index of the existing chat in the chat history
      const existingUserIndex = state.addedUser.findIndex(
        (user) => user.id === id
      );

      // If the chat already exists or it is the initial chat (id = 0)
      if (existingUserIndex !== -1 || id === 0) {
        // Get the index of the chat
        const userIndex = existingUserIndex !== -1 ? existingUserIndex : 0;

        // Update the chat
        state.addedUser[userIndex] = {
          userImage,
          userName,
          id,
        };
      } else {
        // Add the new chat
        state.addedUser.push({
          userImage,
          userName,
          id,
        });
      }
    },
  },
});

export const { setContact } = contactsSlice.actions;
