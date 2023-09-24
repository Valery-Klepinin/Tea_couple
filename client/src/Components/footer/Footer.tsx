import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles/footer.scss';

function Footer(): JSX.Element {
  return (
    <footer className="footer__container">
      <div className="footer__content">
        <div className="footer__img">
          <img className="footer__img" src="./img/Logo.png" alt="logo" />
        </div>
        <div className="footer__contacts">
          <p className="footer__par">Контактная информация:</p>
          <p className="footer__par">Номер телефона: +7(999) 999-99-99</p>
          <p className="footer__par">Адрес: г.СПБ, ул. Невский д. 25</p>
        </div>
        <div className="footer__buttons">
          <div className="button__div">
            <button className="button__btn" type="button">
              <a className="button__link" href="https://vk.com/market-152045707">
                <img className="button__img" src="./img/VKLogo.png" alt="vk" />
              </a>
            </button>
          </div>
          <div className="button__div">
            <button className="button__btn" type="button">
              <img
                className="button__img"
                src="https://ulid.ru/images/logo/tg.png"
                alt="tg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="footer__otherContent">
        <Outlet />
      </div>
    </footer>
  );
}

export default Footer;
