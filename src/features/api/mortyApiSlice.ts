import axios from "axios";
import { IAllCharacterProp } from "../../Interfaces/apiInterfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiUrl = "https://rickandmortyapi.com/api/";

interface IinitialState {
  loading: boolean;
  errorStatus: undefined | string;
  data: undefined | IAllCharacterProp[];
}

const initialState: IinitialState = {
  loading: false,
  errorStatus: undefined,
  data: undefined,
};

export const fetchData = createAsyncThunk(
  'api/fetchData',
  async (inputValue: string) => {
    const response = await axios.get(`${apiUrl}/character/?name=${inputValue}`);
    return response.data.results;
  }
);

const mortyApiSlice = createSlice({
  name: 'mortyApi',
  initialState,
  reducers: {
    updateLoading(state) {
      state.loading = true;
    },
  },  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.errorStatus = undefined;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.errorStatus = undefined;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.errorStatus = action.error.message
        state.data = undefined;
      });
  },
});

export default mortyApiSlice.reducer;
export const {updateLoading} = mortyApiSlice.actions;
