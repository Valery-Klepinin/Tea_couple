import React, { useEffect, useState } from 'react';
import '../Main/types/main.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../redux/Store';
import {
  clearSearchQuery,
  setSearchQuery,
} from '../../redux/reducers/productsSlice';
import { addOrderItem } from '../../redux/reducers/cartSlice';
import { addFavorite } from '../Favorites/FavoritesSlice';
import '../ProductItem/styles/productItem.scss';

function CategoryPage(): JSX.Element {
  const [poisk, setPoisk] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [inputTeas, setInputValue] = useState('');
  const [inputServices, setInputServices] = useState('');

  const dispatch = useAppDispatch();

  const addFavorites = (value: number): void => {
    dispatch(addFavorite(value));
  };

  const teas = useSelector((store: RootState) => store.products.teas);
  const services = useSelector((store: RootState) => store.products.services);
  const authUser = useSelector((store: RootState) => store.auth.authUser);

  const searchQuery = useSelector(
    (store: RootState) => store.products.searchQuery,
  );

  useEffect(() => {
    dispatch(clearSearchQuery());
  }, []);

  useEffect(() => {
    setInputServices(searchQuery);
  }, [searchQuery]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value !== '') {
      setPoisk(true);
    } else {
      setPoisk(false);
    }
    dispatch(setSearchQuery(event.target.value));
  };

  const filteredAll = [...teas, ...services].filter((product) =>
    product.title.toLocaleLowerCase().includes(searchQuery.toLowerCase()),
  );

  const addCart = (Id: number): void => {
    console.log(Id);

    dispatch(addOrderItem(Id));
  };

  return (
    <div>
      <h1>Категории</h1>
      <div className="search1">
        {/* <div className="search"> */}
        <input
          className="search"
          type="text"
          onChange={handleSearch}
          value={inputServices}
          placeholder="искать на сайте"
        />
      </div>
      {!poisk ? (
        <>
          <h2>Чай</h2>
          <div className="main__popular">
            {teas.map((tea) => (
              <div className="main__cardExample">
                <h1>{tea.title}</h1>
                <img src={tea.img} alt="img" />
                <h2>{tea.price} рублей</h2>
                <Link to={`/products/${tea.id}`}>
                  <button type="button">Подробнее</button>
                </Link>

                {authUser && (
                  <div className="button2">
                    <button
                      className="buttoncard"
                      type="button"
                      onClick={() => addFavorites(tea.id)}
                    >
                      Добавить в избранное
                    </button>

                    <button type="button" onClick={() => addCart(tea.id)}>
                      В корзину
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <h2>Чайный сервиз</h2>

          <div className="main__popular">
            {services.map((service) => (
              <div className="main__cardExample">
                <h1>{service.title}</h1>
                <img src={service.img} alt="img" />
                <h2>{service.price} рублей</h2>
                <Link to={`/products/${service.id}`}>
                  <button type="button">Подробнее</button>
                </Link>

                {authUser && (
                  <div className="button2">
                    <button
                      className="buttoncard"
                      type="button"
                      onClick={() => addFavorites(service.id)}
                    >
                      Добавить в избранное
                    </button>
                    <button type="button" onClick={() => addCart(service.id)}>
                      В корзину
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="main__popular">
          {filteredAll.map((tea) => (
            <div className="main__cardExample">
              <h1>{tea.title}</h1>
              <img src={tea.img} alt="img" />
              <h2>{tea.price} рублей</h2>
              <Link to={`/products/${tea.id}`}>
                <button type="button">Подробнее</button>
              </Link>
              <div />
              <div className="button2">
                <button type="button">В корзину</button>
                <button
                  className="buttoncard"
                  type="button"
                  onClick={() => addFavorites(tea.id)}
                >
                  Добавить в избранное
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
