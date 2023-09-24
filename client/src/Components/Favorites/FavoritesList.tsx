import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/Store';
import ProductFavoritesItem from './ProductFavoritesItem';
import '../ProductItem/styles/productItem.scss';

function FavoritesList(): JSX.Element {
  const favoritesList = useSelector(
    (store: RootState) => store.favorites.favorites,
  );

  return (
    <div className="favorite">
      {favoritesList.map((favorite) => (
        <ProductFavoritesItem product={favorite.Product} key={favorite.id} />
      ))}
    </div>
  );
}

export default FavoritesList;
