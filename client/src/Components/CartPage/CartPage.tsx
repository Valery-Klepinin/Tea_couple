import React, { useState } from 'react';
import './styles/basket.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/Store';
import CartItem from './CartItem';
import { updOrder } from '../../redux/reducers/cartSlice';

function CartPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const orderitems = useSelector((store: RootState) => store.cart.orderitems);
  const sendOrder = (): void => {
    dispatch(updOrder(orderitems[0].order_id));
    SetVisibslity((prev) => !prev);
  };

  const [visibility, SetVisibslity] = useState(false);
  return (
    <div className="basket__container">
      <div className="basket__form">
        <h1>Корзина</h1>
        <div className="form__row">
          <div className="form__name">Наименование товара</div>
          <div className="form__count">Количество</div>
          <div className="form__price">Цена за 25гр/1шт</div>
        </div>
        {orderitems.map((orderitem) => (
          <CartItem key={orderitem.id} orderitem={orderitem} />
        ))}
        <div className="form__result">
          <div className="form__fullprice">
            Итого:
            {orderitems.reduce(
              (prev, orderitem) =>
                prev + orderitem.Product.price * orderitem.quantity,
              0
            )}
            р.
          </div>
          <div className="form__count">
            {orderitems.length > 0 ? (
              <button className="btn__result" type="button" onClick={sendOrder}>
                Заказать товар
              </button>
            ) : (
              <> </>
            )}
          </div>
        </div>
        {visibility === true && (
          <div className="windoow">
            Заказ успешно оформлен, с вами свяжется продавец
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
