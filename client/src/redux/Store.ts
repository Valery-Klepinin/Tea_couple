/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import FavoritesSlice from '../Components/Favorites/FavoritesSlice';
import authSlice from './reducers/authSlice';
import newsSlice from './reducers/newsSlice';
import lessonsSlice from './reducers/lessonsSlice';
import adminSlice from './reducers/adminSlice';
import cartSlice from './reducers/cartSlice';
import productsSlice from './reducers/productsSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    favorites: FavoritesSlice,
    auth: authSlice,
    news: newsSlice,
    lessons: lessonsSlice,
    admins: adminSlice,
    cart: cartSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
