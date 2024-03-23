import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEvilMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state) => {
      state.isEvilMode = !state.isEvilMode;
    },
  },
});

export const { updateTheme } = themeSlice.actions;
export default themeSlice.reducer;
