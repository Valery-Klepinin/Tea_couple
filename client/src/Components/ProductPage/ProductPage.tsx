import React from 'react';
import './styles/productpage.scss';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/Store';

function ProductPage(): JSX.Element {
  const product = useSelector((store: RootState) => store.products.products);

  const { productId } = useParams();
  const navigate = useNavigate();

  let thisProduct;
  if (productId) {
    thisProduct = product.find((prod) => prod.id === +productId)!!;
  }

  return (
    <div className="one">
      <div className="main__cardExample1">
        <div className="oneProd__container">
          {thisProduct ? (
            <>
              <h1 className="oneProd__title">{thisProduct.title}</h1>
              <img
                src={thisProduct.img}
                alt="product"
                className="oneProd__image"
              />
              <h1 className="oneProd__descParag">Описание</h1>
              <h2 className="oneProd__description">
                {thisProduct.description}
              </h2>
              <h3 className="oneProd__price">{thisProduct.price}p</h3>
              {/* <button type="submit" className="oneProd__button"> В корзину</button> */}
            </>
          ) : (
            <h1 className="oneProd__undef">Такого продукта нет</h1>
          )}
          <button
            id="button2"
            type="button"
            onClick={() => navigate(-1)}
            className="oneProd__button"
          >
            Назад
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
