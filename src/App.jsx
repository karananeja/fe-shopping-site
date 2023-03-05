import React from 'react';
import NavBar from './components/navBar';
import './App.scss';
import Cards from './components/cards';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/product';
import Cart from './pages/cart';
import Profile from './pages/profile';
import Error from './pages/error';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <NavBar />
              <Cards />
            </>
          }
        />
        <Route
          path='products/:productID'
          element={
            <>
              <NavBar />
              <Product />
            </>
          }
        />
        <Route
          path='cart'
          element={
            <>
              <NavBar />
              <Cart />
            </>
          }
        />
        <Route
          path='profile'
          element={
            <>
              <NavBar />
              <Profile />
            </>
          }
        />
        <Route
          path='*'
          element={
            <>
              <NavBar />
              <Error />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
