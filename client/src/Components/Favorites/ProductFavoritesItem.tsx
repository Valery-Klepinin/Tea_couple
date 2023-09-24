import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../features/products/types/types';
import { useAppDispatch } from '../../redux/Store';
import { delFavorite } from './FavoritesSlice';
// import { addFavorite } from './FavoritesSlice';
import '../ProductItem/styles/productItem.scss';

function ProductFavoritesItem({ product }: { product: Product }): JSX.Element {
  const dispatch = useAppDispatch();

  // const addFavorites = (): void => {
  //   dispatch(addFavorite(product.id));
  // };

  const delFavoriteFunc = (): void => {
    dispatch(delFavorite(product.id));
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
        <div className="button2">
          {/* <button type="button">В корзину</button> */}

          <div>
            <button type="button" onClick={delFavoriteFunc}>
              Удалить из избранного
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFavoritesItem;
