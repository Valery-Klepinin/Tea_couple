import React from 'react';
import { Link } from 'react-router-dom';
import './styles/styles.scss';

function AdminPage(): JSX.Element {
  return (
    <div className="admin__container">
      <Link className="admin__link" to="/admin/products">
        Изменение продуктов
      </Link>
      <Link className="admin__link" to="/admin/news">
        Изменение новостей
      </Link>
      <Link className="admin__link" to="/admin/lessons">
        Изменение полезных материалов
      </Link>
    </div>
  );
}

export default AdminPage;
