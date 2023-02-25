import React from 'react';
import NavBar from './components/navBar';
import './App.scss';
import Cards from './components/cards';

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Cards />
    </div>
  );
};

export default App;
