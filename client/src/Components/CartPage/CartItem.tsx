import React from 'react';
import { OrderItem } from '../../features/cart/types/types';
import { useAppDispatch } from '../../redux/Store';
import { deleteOrderItem, updOrderItem } from '../../redux/reducers/cartSlice';

function CartItem({ orderitem }: { orderitem: OrderItem }): JSX.Element {
  const dispatch = useAppDispatch();

  const deleteCart = (): void => {
    dispatch(deleteOrderItem(orderitem));
  };

  const updMinus = (): void => {
    if (orderitem.quantity > 1) {
      dispatch(
        updOrderItem({ id: orderitem.id, quantity: orderitem.quantity - 1 })
      );
    }
  };
  const updPlus = (): void => {
    dispatch(
      updOrderItem({ id: orderitem.id, quantity: orderitem.quantity + 1 })
    );
  };

  return (
    <div className="form__row--buy">
      <div className="form__name-buy">{orderitem.Product.title}</div>
      <div className="form__count--buy">
        <div className="btn__count">
          <button className="btn" type="button" onClick={updMinus}>
            -
          </button>
          <div>{orderitem.quantity}</div>
          <button className="btn" type="button" onClick={updPlus}>
            +
          </button>
        </div>
      </div>
      <div className="form__price--buy">{orderitem.Product.price} р.</div>
      <button className="btn__delete" type="button" onClick={deleteCart}>
        Удалить
      </button>
    </div>
  );
}

export default CartItem;
