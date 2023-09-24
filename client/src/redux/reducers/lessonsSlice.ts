// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from '../../features/lessons/State';

import * as api from '../../App/api';

const initialState: State = {
  lessons: [],
  error: undefined,
};

export const loadLessons = createAsyncThunk('lessons/load', () => api.fetchLessons());

const productsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadLessons.fulfilled, (state, action) => {
        state.lessons = action.payload;
      })
      .addCase(loadLessons.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
