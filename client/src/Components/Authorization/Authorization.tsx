import React, { useEffect, useState } from 'react';
import './styles/authorization.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthorizationUser, clearError } from '../../redux/reducers/authSlice';
import { RootState, useAppDispatch } from '../../redux/Store';

function Authorization(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, authUser } = useSelector((store: RootState) => store.auth);

  useEffect(() => {
    if (authUser) {
      navigate('/');
    }
  }, [authUser, navigate]);

  const ChangeEmail: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    setEmail(e.target.value);
    dispatch(clearError());
  };
  const ChangePassword: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    setPassword(e.target.value);
    dispatch(clearError());
  };

  const handleAuth: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    dispatch(AuthorizationUser({ password, email }));
  };

  return (
    <div className="authorization__container">
      <div className="authorization_title">
        <h1>Форма Авторизации</h1>
      </div>
      <form className="authorization_form" onSubmit={handleAuth}>
        <p>Email</p>
        <input type="email" value={email} onChange={ChangeEmail} />
        <p>Пароль</p>
        <input type="password" value={password} onChange={ChangePassword} />
        <button className="authorization_btn" type="submit">
          Авторизоваться
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default Authorization;
