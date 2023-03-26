import React from 'react';
import NavBar from './components/navBar';
import './App.scss';
import Cards from './components/cards';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/product';
import Cart from './pages/cart';
import Profile from './pages/profile';
import Error from './pages/error';
import SignIn from './pages/userService/signIn';
import SignUp from './pages/userService/signUp';
import SetPassword from './pages/userService/setPassword';

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
        <Route path='auth/signin' element={<SignIn />} />
        <Route path='auth/signup' element={<SignUp />} />
        <Route path='auth/set-password' element={<SetPassword />} />
        <Route path='profile' element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
