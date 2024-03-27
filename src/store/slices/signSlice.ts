import { createSlice } from "@reduxjs/toolkit";

interface SignState {
  registerMessage: string;
  checkEmailMessage: boolean;
}

const signSlice = createSlice({
  name: "sign",
  initialState: {
    registerMessage: "",
    checkEmailMessage: false,
  },
  reducers: {
    setRegisterMessage: (state: SignState, action: { payload: string }) => {
      state.registerMessage = action.payload;
    },
    setCheckEmailMessage: (state: SignState, action: { payload: boolean }) => {
      state.checkEmailMessage = action.payload;
    },
  },
});

export default signSlice.reducer;
export const { setRegisterMessage, setCheckEmailMessage } = signSlice.actions;
export const selectRegisterMessage = (state: { sign: SignState }) =>
  state.sign.registerMessage;
export const selectCheckEmailMessage = (state: { sign: SignState }) =>
  state.sign.checkEmailMessage;
