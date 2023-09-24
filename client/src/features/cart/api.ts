/* eslint-disable import/prefer-default-export */
import { DelItem, OrderItem, UpdItem } from './types/types';

export const fetchCart = async (): Promise<OrderItem[]> => {
  const res = await fetch('/api/cart');
  const data = await res.json();
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return data;
};

export const fetchAddOrderItem = async (Id: number): Promise<OrderItem[]> => {
   console.log(Id);
  const res = await fetch('/api/cart', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      product_id: Id,
    }),
  });
  const data = await res.json();
  console.log(data);
  
  return data;
};

export const fetchDelOrderItem = async (item: OrderItem): Promise<DelItem> => {
  const res = await fetch(`/api/cart/${item.id}`, {
    method: 'delete',
  });
  const data = await res.json();
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return data;
};

export const updateOrderItemFetch = async (item: UpdItem): Promise<UpdItem> => {
  const res = await fetch(`/api/cart/${item.id}`, {
    method: 'put',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      quantity: item.quantity,
    }),
  });
  const data = await res.json();
  return data;
};

export const sendOrderFetch = async (
   Id: number
 ): Promise<{ message: string }> => {
   const res = await fetch(`/api/cart/${Id}/close`, {
     method: 'put',
   });
   const data = await res.json();
   return data;
 };
