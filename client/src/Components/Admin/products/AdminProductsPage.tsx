import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/Store';
import './styles/styles.scss';
import {
  addProduct,
  deleteProduct,
  loadProducts,
} from '../../../redux/reducers/adminSlice';

function AdminProductsPage(): JSX.Element {
  const products = useSelector((store: RootState) => store.admins.products);
  const dispatch = useAppDispatch();

  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const img = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.FormEvent): void => {
    e.preventDefault();
    if (
      title.current?.value &&
      description.current?.value &&
      price.current?.value &&
      img.current?.files?.length
    ) {
      const imgInput = img.current.files[0];
      const titleInput = title.current.value;
      const descInput = description.current.value;
      const priceInput = price.current.value;

      const formData = new FormData();
      formData.append('title', titleInput);
      formData.append('description', descInput);
      formData.append('price', priceInput);
      formData.append('img', imgInput);
      dispatch(addProduct(formData));
    }
  };

  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <div>
      <form className="prodForm__container" onSubmit={handleUpload}>
        <label className="prodForm__label">Title</label>
        <input
          className="prodForm__input"
          type="text"
          ref={title}
          name="title"
        />
        <label className="prodForm__label">Description</label>
        <input
          className="prodForm__input"
          type="text"
          ref={description}
          name="description"
        />
        <label className="prodForm__label">Price</label>
        <input
          className="prodForm__input"
          type="number"
          ref={price}
          name="price"
        />
        <label className="prodForm__label">Image</label>
        <div className="prodForm__div">
          <input
            className="prodForm__inputImage"
            type="file"
            ref={img}
            name="file"
          />
        </div>
        <button className="prodForm__btn" type="submit">
          Добавить
        </button>
      </form>
      <div
        className="adminProd__container"
      >
        {products.map((product) => (
          <div className="adminProd__content">
            <h1 className="adminProd__title">{product.title}</h1>
            <img
              className="adminProd__image"
              src={product.img}
              alt="prod"
            />
            <h2 className="adminProd__desc">{product.description}</h2>
            <h4 className="adminProd__price">Цена: {product.price}р</h4>
            <button
              className="adminProd__btn"
              type="button"
              onClick={() => dispatch(deleteProduct(product.id))}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProductsPage;
