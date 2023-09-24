import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './styles/navbar.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/Store';
import { LogOut } from '../../redux/reducers/authSlice';

function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((store: RootState) => store.auth.authUser);
  const handleLogOut: React.MouseEventHandler<HTMLAnchorElement> = async (
    e
  ) => {
    e.preventDefault();
    dispatch(LogOut());
    navigate('/');
  };

  return (
    <>
      <nav className="nav__container">
        <ul className="nav__ul">
          <li>
            <img className="nav__img" src="./img/Logo.png" alt="logo" />
          </li>
          <li className="nav__li">
            <NavLink className="nav__li" to="/">
              Главная
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink className="nav__li" to="/news">
              Новости
            </NavLink>
          </li>
          <li className="nav__li">
            <NavLink className="nav__li" to="/category">
              Категории
            </NavLink>
          </li>
          {authUser ? (
            <>
              {authUser.isAdmin && (
                <li className="nav__li">
                  <NavLink className="nav__li" to="/admin">
                    Админ панель
                  </NavLink>
                </li>
              )}
              <li className="nav__li">
                <NavLink className="nav__li" to="/cart">
                  Корзина
                </NavLink>
              </li>
              <li className="nav__li">
                <NavLink className="nav__li" to="/personalArea">
                  Личный кабинет
                </NavLink>
              </li>
              <li className="nav__li">{`Привет, ${authUser.name}`}</li>
              <li className="nav__li">
                <a onClick={handleLogOut} href="/" className="nav__li">
                  Выйти
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav__li">
                <NavLink className="nav__li" to="/register">
                  Регистрация
                </NavLink>
              </li>
              <li className="nav__li">
                <NavLink className="nav__li" to="/login">
                  Авторизация
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
