import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/Store';
import {
  addNews,
  deleteNews,
  loadNews,
} from '../../../redux/reducers/adminSlice';

function AdminNewsPage(): JSX.Element {
  const newses = useSelector((store: RootState) => store.admins.news);

  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const img = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleUpload = (e: React.FormEvent): void => {
    e.preventDefault();
    if (
      title.current?.value &&
      description.current?.value &&
      img.current?.files?.length
    ) {
      const imgInput = img.current.files[0];
      const titleInput = title.current.value;
      const descInput = description.current.value;

      const formData = new FormData();
      formData.append('title', titleInput);
      formData.append('description', descInput);
      formData.append('img', imgInput);
      dispatch(addNews(formData));
    }
  };
  useEffect(() => {
    dispatch(loadNews());
  }, []);

  return (
    <div>
      <form className="prodForm__container" onSubmit={handleUpload}>
        <label className="prodForm__label">Title</label>
        <input className="prodForm__input" type="text" ref={title} name="title" />
        <label className="prodForm__label">Description</label>
        <input className="prodForm__input" type="text" ref={description} name="description" />
        <label className="prodForm__label">Image</label>
        <div className="prodForm__div">
          <input
            className="prodForm__inputImage"
            type="file"
            ref={img}
            name="file"
          />
        </div>
        <button className="prodForm__btn" type="submit">Добавить</button>
      </form>
      <div className="adminNews__container">
        {newses.map((news) => (
          <div className="adminNews__content">
            <h1 className="adminNews__title">{news.title}</h1>
            <img className="adminNews__image" src={news.img} alt="prod" />
            <h2 className="adminNews__desc">{news.description}</h2>
            <button className="adminNews__btn" type="button" onClick={() => dispatch(deleteNews(news.id))}>
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminNewsPage;
