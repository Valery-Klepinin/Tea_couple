/* eslint-disable react/jsx-tag-spacing */
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './styles/sidebar.scss';

function SideBar(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="sidebar__container">
      <div className="sidebar__side">
        <div className="sidebar__contacts">
          <p className="sidebar__par">Контактная информация:</p>
          <p className="sidebar__par">
            Номер телефона: <br /> +7(999) 999-99-99
          </p>
          <p className="sidebar__par">
            Адрес: <br /> г.СПБ, ул. Невский д. 25
          </p>
        </div>
        <div className="sidebar__buttonContainer">
          <button
            className="sidebar__button"
            type="button"
            onClick={() => navigate('/record')}
          >
            Записаться на чайную церемонию
          </button>
        </div>
        <div className="sidebar__buttonContainer">
          <button className="sidebar__button" type="button">
            <a href="https://vk.com/market-152045707" className="sidebar__link">
              Связаться с нами в ВК
            </a>
          </button>
        </div>
        <div className="sidebar__buttonContainer">
          <button
            className="sidebar__button"
            type="button"
            onClick={() => navigate('/lessons')}
          >
            Полезные материалы
          </button>
        </div>
        {/* <div className="sidebar__chatCont">
          <div className="sidebar__inputBtn">
            <input
              type="text"
              className="sidebar__input"
              placeholder="Отправить сообщение"
            />
            <button type="submit">Отправить</button>
          </div>
        </div> */}
      </div>

      <div className="sidebar__content">
        <Outlet />
      </div>
    </div>
  );
}

export default SideBar;
