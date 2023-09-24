// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from '../../features/news/State';

import * as api from '../../App/api';

const initialState: State = {
  newses: [],
  error: undefined,
};

export const loadNews = createAsyncThunk('news/load', () => api.fetchNews());

const productsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadNews.fulfilled, (state, action) => {
        state.newses = action.payload;
      })
      .addCase(loadNews.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
