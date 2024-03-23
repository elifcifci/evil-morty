import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import inputValueReducer from "../features/inputValue/inputValueSlice";
import mortyApiSliceReducer from "../features/api/mortyApiSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    inputValue: inputValueReducer,
    mortyApi: mortyApiSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch