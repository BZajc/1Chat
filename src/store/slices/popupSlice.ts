import { createSlice } from "@reduxjs/toolkit";

export interface PopupState {
  popupVisible: boolean;
  popupMessage: string;
  popupType: "positive-feedback" | "negative-feedback" | "add" | "block" | null;
}

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    popupVisible: false,
    popupMessage: "",
    popupType: null, // used to define purpose of popup eg. "positive-feedback", "positive-feedback", "add" etc.
  },
  reducers: {
    setPopupVisible: (state: PopupState, action: { payload: boolean }) => {
      state.popupVisible = action.payload;
    },
    setPopupMessage: (state: PopupState, action: { payload: string }) => {
      state.popupMessage = action.payload;
    },
    setPopupData: (state: PopupState, action: { payload: "positive-feedback" | "negative-feedback" | "add" | "block" | null }) => {
      state.popupType = action.payload;
    },
  },
});

export default popupSlice.reducer;
export const { setPopupVisible, setPopupMessage, setPopupData } =
  popupSlice.actions;
export const selectPopupVisible = (state: { popup: PopupState }) =>
  state.popup.popupVisible;
export const selectPopupMessage = (state: { popup: PopupState }) =>
  state.popup.popupMessage;
export const selectPopupData = (state: { popup: PopupState }) =>
  state.popup.popupType;