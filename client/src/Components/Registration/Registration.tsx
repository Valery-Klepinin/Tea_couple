import React, { useEffect, useState } from 'react';
import './styles/registration.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../redux/Store';
import { clearError, signUp } from '../../redux/reducers/authSlice';

function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [city, setcCity] = useState('');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { error, authUser } = useSelector((store: RootState) => store.auth);

  const ChangeEmail: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    setEmail(e.target.value);
    dispatch(clearError());
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    dispatch(
      signUp({ name, password, surname, email, phone, city, street, house })
    );
  };

  useEffect(() => {
    if (authUser) {
      navigate('/');
    }
  }, [authUser, navigate]);

  return (
    <div className="registration__container">
      <div className="registration_title">
        <h1>Форма Регистрации</h1>
      </div>
      <form onSubmit={handleSubmit} className="registration_forms">
        <div className="registration_form">
          <div className="form_first">
            <p>Имя</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <p>Фамилия</p>
            <input type="text" onChange={(e) => setSurname(e.target.value)} />
            <p>Email</p>
            <input type="email" onChange={ChangeEmail} />
            <p>Пароль</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form_second">
            <p>Номер телефона</p>
            <input
              type="text"
              onChange={(e) => setPhone(Number(e.target.value))}
            />
            <p>Город</p>
            <input type="text" onChange={(e) => setcCity(e.target.value)} />
            <p>Улица</p>
            <input type="text" onChange={(e) => setStreet(e.target.value)} />
            <p>Дом</p>
            <input type="text" onChange={(e) => setHouse(e.target.value)} />
          </div>
        </div>
        <button className="registration_btn" type="submit">
          Зарегистрироваться
        </button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Registration;
