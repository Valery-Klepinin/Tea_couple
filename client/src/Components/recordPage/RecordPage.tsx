import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import { Value } from './types/types';
import './styles/record.scss';

function RecordPage(): JSX.Element {
  const [value, onChange] = useState<Value>(new Date());
  const [time, setTime] = useState('');
  const navigate = useNavigate();
  return (
    <div className="record__container">
      <Calendar className="record__calendar" onChange={onChange} value={value} />
      <form className="record__form">
        <label className="record__label"> Время</label>
        <input
          type="time"
          className="record__input"
          onChange={(e) => setTime(e.target.value)}
          value={time}
        />
        <button
          type="submit"
          className="record__btn"
          onClick={() => navigate('/')}
        >
          Записаться
        </button>
      </form>
    </div>
  );
}

export default RecordPage;
