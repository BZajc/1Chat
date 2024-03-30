import { createSlice } from "@reduxjs/toolkit";

interface NavState {
  miniNav: boolean;
}

const navSlice = createSlice({
  name: "nav",
  initialState: {
    miniNav: false,
  },
  reducers: {
    setMiniNav: (state: NavState, action: { payload: boolean }) => {
      state.miniNav = action.payload;
    },
  },
});

export default navSlice.reducer;
export const { setMiniNav } = navSlice.actions;
export const selectMiniNav = (state: { nav: NavState }) => state.nav.miniNav;