import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from '../Components/NavBar/NavBar';
import MainPage from '../Components/Main/MainPage';
import SideBar from '../Components/SideBar/SideBar';
import Footer from '../Components/footer/Footer';
import { useAppDispatch } from '../redux/Store';
import {
  loadProducts,
  loadCategoriesService,
  loadCategoriesTea,
} from '../redux/reducers/productsSlice';
import ProductPage from '../Components/ProductPage/ProductPage';
import RecordPage from '../Components/recordPage/RecordPage';
import Registration from '../Components/Registration/Registration';
import Authorization from '../Components/Authorization/Authorization';
import { checkUser } from '../redux/reducers/authSlice';
import CategoryPage from '../Components/Category/CategoryPage';
import NewsPage from '../Components/News/NewsPage';
import { loadNews } from '../redux/reducers/newsSlice';
import { loadLessons } from '../redux/reducers/lessonsSlice';
import LessonsPage from '../Components/Lessons/LessonsPage';
import { initFavorite } from '../Components/Favorites/FavoritesSlice';
import PersonalArea from '../Components/PersonalArea/PersonalArea';
import AdminPage from '../Components/Admin/AdminPage';
import AdminProductsPage from '../Components/Admin/products/AdminProductsPage';
import AdminNewsPage from '../Components/Admin/news/AdminNewsPage';
import AdminLessonsPage from '../Components/Admin/lessons/AdminLessonsPage';
import CartPage from '../Components/CartPage/CartPage';
import { loadOrderItems } from '../redux/reducers/cartSlice';
import NotFoundPage from '../Components/NotFoundPage/NotFoundPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadLessons());
    dispatch(loadNews());
    dispatch(checkUser());
    dispatch(loadCategoriesService());
    dispatch(loadCategoriesTea());
    dispatch(initFavorite());
    dispatch(loadOrderItems());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Footer />}>
            <Route path="/" element={<SideBar />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/record" element={<RecordPage />} />
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/lessons" element={<LessonsPage />} />
              <Route path="/products/:productId" element={<ProductPage />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Authorization />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/personalArea" element={<PersonalArea />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/products" element={<AdminProductsPage />} />
              <Route path="/admin/news" element={<AdminNewsPage />} />
              <Route path="/admin/lessons" element={<AdminLessonsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
