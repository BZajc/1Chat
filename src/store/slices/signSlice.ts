import { createSlice } from "@reduxjs/toolkit";

interface SignState {
    registerMessage: string;
}

const signSlice = createSlice({
  name: "sign",
  initialState: {
    registerMessage: "",
    registerMessageColor: "",
  },
  reducers: {
    setRegisterMessage: (state: SignState, action: {payload: string}) => {
      state.registerMessage = action.payload;
    },
  },
});

export default signSlice.reducer;
export const {
    setRegisterMessage
} = signSlice.actions;
export const selectRegisterMessage = (state: {sign: SignState}) => state.sign.registerMessage;