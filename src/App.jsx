import React from 'react';
import NavBar from './components/navBar';
import './App.scss';
import Cards from './components/cards';
import { Route, Routes } from 'react-router-dom';

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
      </Routes>
    </div>
  );
};

export default App;
