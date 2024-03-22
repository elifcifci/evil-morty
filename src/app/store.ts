import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import inputValueReducer from "../features/inputValue/inputValueSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    inputValue: inputValueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
