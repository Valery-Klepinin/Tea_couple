import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/Store';
import NewsItem from './NewsItem';
import './styles/news.scss';

function NewsPage(): JSX.Element {
  const newses = useSelector((store: RootState) => store.news.newses);
  return (
    <div className="news__divv">
      <h1 className="news__head">Новости</h1>
      <div className="news__container">
        {newses.map((news) => (
          <NewsItem news={news} key={news.id} />
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
