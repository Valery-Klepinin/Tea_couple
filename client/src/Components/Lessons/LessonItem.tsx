import React from 'react';
import { Lesson } from '../../features/lessons/types';
import './styles/lesson.scss';

function LessonItem({ lesson }: { lesson: Lesson }): JSX.Element {
  return (
    <div className="lesson__content">
      <h1 className="lesson__title">{lesson.title}</h1>
      <iframe
        width="560"
        height="315"
        src={lesson.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="lesson_video"
      >
        w
      </iframe>
      <h2 className="lesson__desc">{lesson.description}</h2>
    </div>
  );
}

export default LessonItem;
