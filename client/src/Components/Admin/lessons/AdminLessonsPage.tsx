import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/Store';
import {
  addLesson,
  deleteLessons,
  loadLessons,
} from '../../../redux/reducers/adminSlice';

function AdminLessonsPage(): JSX.Element {
  const lessons = useSelector((store: RootState) => store.admins.lessons);
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');

  const handleAddLesson = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    dispatch(addLesson({ title, description, video }));
  };

  useEffect(() => {
    dispatch(loadLessons());
  }, []);
  return (
    <div>
      <form className="prodForm__container" onSubmit={handleAddLesson}>
        <label className="prodForm__label">Title</label>
        <input
          className="prodForm__input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <label className="prodForm__label">Description</label>
        <input
          className="prodForm__input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
        />
        <label className="prodForm__label">Video</label>
        <input
          className="prodForm__input"
          type="text"
          name="video"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />
        <button className="prodForm__btn" type="submit">
          Добавить
        </button>
      </form>

      <div className="adminLesson__container">
        {lessons.map((lesson) => (
          <div className="adminLesson__content">
            <h1 className="adminLesson__title">{lesson.title}</h1>
            <iframe
              width="560"
              height="315"
              src={lesson.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="adminLesson__image"
            >
              w
            </iframe>
            <h2 className="adminLesson__desc">{lesson.description}</h2>
            <button
              className="adminLesson__btn"
              type="button"
              onClick={() => dispatch(deleteLessons(lesson.id))}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminLessonsPage;
