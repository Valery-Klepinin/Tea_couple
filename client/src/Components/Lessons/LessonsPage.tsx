import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/Store';
import LessonItem from './LessonItem';
import './styles/lesson.scss';

function LessonsPage(): JSX.Element {
  const lessons = useSelector((store: RootState) => store.lessons.lessons);
  return (
    <div className="lesson__div">
      <h1 className="lesson__h1">Полезные материалы</h1>
      <div className="lesson__container">
        {lessons.map((lesson) => (
          <LessonItem lesson={lesson} key={lesson.id} />
        ))}
      </div>
    </div>
  );
}

export default LessonsPage;
