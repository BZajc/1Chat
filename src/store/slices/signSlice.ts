import { createSlice } from "@reduxjs/toolkit";

interface SignState {
  registerMessage: string;
  checkEmailMessage: boolean;
  loggedIn: boolean;
}

const signSlice = createSlice({
  name: "sign",
  initialState: {
    registerMessage: "",
    checkEmailMessage: false,
    loggedIn: false,
  },
  reducers: {
    setRegisterMessage: (state: SignState, action: { payload: string }) => {
      state.registerMessage = action.payload;
    },
    setCheckEmailMessage: (state: SignState, action: { payload: boolean }) => {
      state.checkEmailMessage = action.payload;
    },
    setLoggedIn: (state: SignState, action: { payload: boolean }) => {
      state.loggedIn = action.payload;
      localStorage.setItem('loggedIn', JSON.stringify(action.payload));
    },
  },
});

export default signSlice.reducer;
export const { setRegisterMessage, setCheckEmailMessage, setLoggedIn } =
  signSlice.actions;
export const selectRegisterMessage = (state: { sign: SignState }) =>
  state.sign.registerMessage;
export const selectCheckEmailMessage = (state: { sign: SignState }) =>
  state.sign.checkEmailMessage;
export const selectLoggedIn = (state: { sign: SignState }) =>
  state.sign.loggedIn;
