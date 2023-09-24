// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from '../../features/cart/State';

import * as api from '../../features/cart/api';
import { OrderItem, UpdItem } from '../../features/cart/types/types';

const initialState: State = {
  orderitems: [],
  error: '',
};

export const loadOrderItems = createAsyncThunk('cart/load', () =>
  api.fetchCart()
);

export const addOrderItem = createAsyncThunk('cart/addItem', (Id: number) =>
  api.fetchAddOrderItem(Id)
);

export const deleteOrderItem = createAsyncThunk(
  'cart/delete',
  (orderitem: OrderItem) => api.fetchDelOrderItem(orderitem)
);

export const updOrderItem = createAsyncThunk('cart/update', (item: UpdItem) =>
  api.updateOrderItemFetch(item)
);

export const updOrder = createAsyncThunk('updOrder', (id: number) =>
  api.sendOrderFetch(id)
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadOrderItems.fulfilled, (state, action) => {
        state.orderitems = action.payload;
      })
      .addCase(loadOrderItems.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addOrderItem.fulfilled, (state, action) => {
         console.log(action.payload);
        state.orderitems = action.payload;
      })
      .addCase(addOrderItem.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteOrderItem.fulfilled, (state, action) => {
        state.orderitems = state.orderitems.filter(
          (item) => item.id !== Number(action.payload.id)
        );
      })
      .addCase(deleteOrderItem.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updOrderItem.fulfilled, (state, action) => {
        state.orderitems = state.orderitems.map((item) =>
          item.id === action.payload?.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      })
      .addCase(updOrderItem.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updOrder.fulfilled, (state) => {
        state.orderitems = [];
      })
      .addCase(updOrder.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
