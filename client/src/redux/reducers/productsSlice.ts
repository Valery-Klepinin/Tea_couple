// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from '../../features/products/types/State';

import * as api from '../../App/api';

const initialState: State = {
  products: [],
  teas: [],
  services: [],
  error: undefined,
  searchQuery: '',
};

export const loadProducts = createAsyncThunk('games/load', () =>
  api.fetchProducts(),
);

export const loadCategoriesTea = createAsyncThunk('category/tea/load', () =>
  api.fetchCategoryTea(),
);

export const loadCategoriesService = createAsyncThunk(
  'category/service/load',
  () => api.fetchCategoryService(),
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearState: (state) => {
      state.products = [];
    },
    clearSearchQuery: (state) => {
      state.searchQuery = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadCategoriesTea.fulfilled, (state, action) => {
        state.teas = action.payload;
      })
      .addCase(loadCategoriesTea.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadCategoriesService.fulfilled, (state, action) => {
        state.services = action.payload;
      })
      .addCase(loadCategoriesService.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const { clearSearchQuery } = productsSlice.actions;
export const { setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;
