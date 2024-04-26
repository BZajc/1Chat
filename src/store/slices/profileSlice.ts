import { createSlice } from "@reduxjs/toolkit";

interface ProfileState {
  profileImages: string[];
}

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileImages: [],
  },
  reducers: {
    addImage: (state: ProfileState, action: { payload: string }) => {
      state.profileImages.push(action.payload);
    },
  },
});

export default profileSlice.reducer;
export const { addImage } = profileSlice.actions;
export const selectProfileImages = (state: { profile: ProfileState }) =>
  state.profile.profileImages;
