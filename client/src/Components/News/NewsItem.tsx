import React from 'react';
import { News } from '../../features/news/types';
import './styles/news.scss';

function NewsItem({ news }: { news: News }): JSX.Element {
  return (
    <div className="news__content">
      <h1 className="news__title">{news.title}</h1>
      <img src={news.img} alt="news" className="news__image" />
      <h2 className="news__desc">{news.description}</h2>
    </div>
  );
}

export default NewsItem;
