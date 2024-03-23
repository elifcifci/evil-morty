import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
};

export const inputValueSlice = createSlice({
  name: "inputValue",
  initialState,
  reducers: {
    updateInput: (state, actions) => {
      state.inputValue = actions.payload;
    },
  },
});

export const { updateInput } = inputValueSlice.actions;
export default inputValueSlice.reducer;