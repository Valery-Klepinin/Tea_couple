import React from 'react';
import { useSelector } from 'react-redux';
import FavoritesList from '../Favorites/FavoritesList';
import { RootState } from '../../redux/Store';

function PersonalArea(): JSX.Element {
  const authUser = useSelector((store: RootState) => store.auth.authUser);
  return (
    <div>
      <div className="personalArea">
        <div className="area"> Имя: {authUser?.name}</div>
        <div className="area"> Фамилия: {authUser?.surname}</div>
        <div className="area"> Еmail: {authUser?.email}</div>
        <div className="area"> Телефон: {authUser?.phone}</div>
        <div className="area"> Город: {authUser?.city}</div>
        <div className="area"> Дом: {authUser?.house}</div>
        <div className="area"> Улица: {authUser?.street}</div>
      </div>
      <FavoritesList />
    </div>
  );
}

export default PersonalArea;
