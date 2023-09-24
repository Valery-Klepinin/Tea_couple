import React from 'react';
import './types/main.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/Store';
import ProductItem from '../ProductItem/ProductItem';

function MainPage(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const navigate = useNavigate();
  let sortProducts;

  if (products.length > 1) {
    sortProducts = [...products].sort((a, b) => {
      console.log(a.raiting, '========');
      return Number(b.raiting) - Number(a.raiting);
    });
    sortProducts.length = 8;
  }

  return (
    <div className="main__container">
      <Carousel className="main__carousel">
        <div className="main__news">
          <img
            className="main__image"
            src="https://newtea.ua/sites/default/files/styles/blog-page/public/node/blog/whitetea_cups.png?itok=wRVzN5tv"
            alt="news"
          />
          <button type="button" className=" legend" onClick={() => navigate('/news')}> Подробнее</button>
        </div>
        <div className="main__news">
          <img
            className="main__image"
            src="https://newtea.ua/sites/default/files/styles/blog-page/public/node/blog/benefits-of-white-tea-on-your-health.jpg?itok=gK49uaQj"
            alt="news"
          />
          <button type="button" className=" legend" onClick={() => navigate('/news')}> Подробнее</button>
        </div>
        <div className="main__news">
          <img
            className="main__image"
            src="https://www.equatorial.by/sites/default/files/images/tea-sri-lanka001.jpg"
            alt="news"
          />
          <button type="button" className=" legend" onClick={() => navigate('/news')}> Подробнее</button>
        </div>
      </Carousel>
      <div className="main__popular">
        {sortProducts && sortProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
