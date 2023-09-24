import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Product } from '../../features/products/types/types';
import { RootState, useAppDispatch } from '../../redux/Store';
import { addFavorite } from '../Favorites/FavoritesSlice';
import { addOrderItem } from '../../redux/reducers/cartSlice';
import './styles/productItem.scss';

function ProductItem({ product }: { product: Product }): JSX.Element {
  const dispatch = useAppDispatch();

  const authUser = useSelector((store: RootState) => store.auth.authUser);
  const addFavorites = (): void => {
    dispatch(addFavorite(product.id));
  };

  const addCart = (): void => {
    console.log(product.id);
    dispatch(addOrderItem(product.id));
  };

  return (
    <div>
      <div className="main__cardExample">
        <h1>{product.title}</h1>
        <img src={product.img} alt="img" />
        <h2>{product.price} рублей</h2>
        <Link to={`/products/${product.id}`}>
          <button type="button">Подробнее</button>
        </Link>
        {authUser && (
          <div className="button2">
            <button type="button" onClick={addCart}>
              В корзину
            </button>
            <button className="buttoncard" type="button" onClick={addFavorites}>
              Добавить в избранное
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
