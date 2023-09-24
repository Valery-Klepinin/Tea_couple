// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from '../../Components/Admin/types/State';

import * as api from '../../Components/Admin/api';
import {
  LessonId,
  NewsId,
  ProductId,
  Lesson
} from '../../Components/Admin/types/types';

const initialState: State = {
  products: [],
  news: [],
  lessons: [],
  error: undefined,
};

// Get___________________________________________________________
export const loadLessons = createAsyncThunk('lessons/load', () =>
  api.loadLessonsFetch()
);
export const loadProducts = createAsyncThunk('products/load', () =>
  api.loadProductsFetch()
);
export const loadNews = createAsyncThunk('news/load', () =>
  api.loadNewsFetch()
);

// Delete___________________________________________________________
export const deleteProduct = createAsyncThunk(
  'products/delete',
  (id: ProductId) => api.deleteProductsFetch(id)
);
export const deleteNews = createAsyncThunk('news/delete', (id: NewsId) =>
  api.deleteNewsFetch(id)
);
export const deleteLessons = createAsyncThunk(
  'lessons/delete',
  (id: LessonId) => api.deleteLessonsFetch(id)
);

// Post___________________________________________________________
export const addProduct = createAsyncThunk('products/add', (formData: FormData) =>
  api.addProductFetch(formData)
);
export const addNews = createAsyncThunk('news/add', (formData: FormData) =>
  api.addNewsFetch(formData)
);
export const addLesson = createAsyncThunk('lessons/add', (lesson: Lesson) =>
  api.addLessonFetch(lesson)
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get___________________________________________________________
      .addCase(loadLessons.fulfilled, (state, action) => {
        state.lessons = action.payload;
      })
      .addCase(loadLessons.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadNews.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(loadNews.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // Delete___________________________________________________________
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== Number(action.payload)
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteNews.fulfilled, (state, action) => {
        state.news = state.news.filter(
          (news) => news.id !== Number(action.payload)
        );
      })
      .addCase(deleteNews.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteLessons.fulfilled, (state, action) => {
        state.lessons = state.lessons.filter(
          (lesson) => lesson.id !== Number(action.payload)
        );
      })
      .addCase(deleteLessons.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // Post___________________________________________________________
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addNews.fulfilled, (state, action) => {
        state.news.push(action.payload);
      })
      .addCase(addNews.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addLesson.fulfilled, (state, action) => {
        state.lessons.push(action.payload);
      })
      .addCase(addLesson.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default adminSlice.reducer;
